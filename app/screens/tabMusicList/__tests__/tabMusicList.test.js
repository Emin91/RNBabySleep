import React from 'react';
import 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import MusicListTab from '..';

describe('MusicListTab', () => {
  test('MusicListTab snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<MusicListTab />);
    expect(snapshot).toMatchSnapshot();
  });
});
