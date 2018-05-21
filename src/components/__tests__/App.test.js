// @flow
import React from 'react';
import { create as render } from 'react-test-renderer';
import App from '../App';

test('App', async () => {
  let component = render(<App/>);
  let instance = component.getInstance();
  let input = component.root.findByType('input');
  expect(instance.state.amount).toBe(1);
  input.props.onChange({ currentTarget: { value: 2 } });
  expect(instance.state.amount).toBe(2);
});
