import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Foo from './components';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const comp = renderer.create(<Foo>Hello</Foo>);
    const tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
});
