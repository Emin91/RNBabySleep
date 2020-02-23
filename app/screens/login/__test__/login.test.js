import React from 'react';
import 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import LoginScreen from '..';

describe('Login', () => {
  test('Login snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<LoginScreen />);
    expect(snapshot).toMatchSnapshot();
  });
});
