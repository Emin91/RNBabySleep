import React from 'react';
import 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import TabSettings from '..';

describe('TabSettings', () => {
  test('TabSettings snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<TabSettings />);
    expect(snapshot).toMatchSnapshot();
  });
});
