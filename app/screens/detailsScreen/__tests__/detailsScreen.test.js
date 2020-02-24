import React from 'react';
import 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import DetailsScreen from '..';

describe('DetailsScreen', () => {
  test('DetailsScreen snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<DetailsScreen />);
    expect(snapshot).toMatchSnapshot();
  });
});
