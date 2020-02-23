import React from 'react';
import 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import TabSleepTracker from '..';

describe('TabSleepTracker', () => {
  test('TabSleepTracker snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<TabSleepTracker />);
    expect(snapshot).toMatchSnapshot();
  });
});
