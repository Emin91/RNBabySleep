import React from 'react';
import 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import NewSoundScreen from '..';

describe('NewSoundRecorder', () => {
  test('NewSoundRecorder snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<NewSoundScreen />);
    expect(snapshot).toMatchSnapshot();
  });
});
