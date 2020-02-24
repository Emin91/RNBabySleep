// import React from 'react';
// import 'react-native';
// import ShallowRenderer from 'react-test-renderer/shallow';
// import NewSoundScreen from '../';

// describe('NewSoundRecorder', () => {
//   test('NewSoundRecorder snapshot', () => {
//     const renderer = new ShallowRenderer();
//     const snap2 = renderer.render(<NewSoundScreen />);
//     expect(snap2).toMatchSnapshot();
//   });
// });


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