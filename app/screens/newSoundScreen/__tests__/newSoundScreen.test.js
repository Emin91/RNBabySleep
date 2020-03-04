import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import NewSoundScreen from '..';

describe('NewSoundScreen', () => {
  test('NewSoundScreen snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<NewSoundScreen />);
    expect(snapshot).toMatchSnapshot();
  });
});
