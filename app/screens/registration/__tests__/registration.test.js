import React from 'react';
import 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import RegisrationScreen from '..';

describe('RegisrationScreen', () => {
  test('RegisrationScreen snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<RegisrationScreen />);
    expect(snapshot).toMatchSnapshot();
  });
});
