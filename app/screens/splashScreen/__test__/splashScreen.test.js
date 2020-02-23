import React from 'react';
import 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import SplashScreen from '..';

describe('SplashScreen', () => {
  test('SplashScreen snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<SplashScreen />);
    expect(snapshot).toMatchSnapshot();
  });
});
