import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TabInformation from '..';

describe('TabInformation', () => {
  test('TabInformation snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<TabInformation />);
    expect(snapshot).toMatchSnapshot();
  });
});
