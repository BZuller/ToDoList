import React from 'react';
import renderer from 'react-test-renderer';

import App from './Home';

it('renders correctly when there are no tasks', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});