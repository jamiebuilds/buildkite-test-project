// @flow
import React from 'react';
import { create as render } from 'react-test-renderer';
import App from '../App';

test('App', async () => {
  let component = render(<App/>);
  let instance = component.getInstance();
  let input = component.root.findByType('input');
  expect(instance.state.amount).toBe(0);
  input.props.onChange({ currentTarget: { value: 1 } });
  expect(instance.state.amount).toBe(1);
});
