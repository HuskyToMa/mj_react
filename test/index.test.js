import React from 'react';
import App from '../src/app.jsx';
import renderer from 'react-test-renderer';

test('App component test', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})