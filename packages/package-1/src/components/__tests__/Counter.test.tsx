import * as React from 'react';
import { create as render } from 'react-test-renderer';
import { Provider } from 'unstated';
import Counter from '../Counter';
import CounterContainer from '../../containers/CounterContainer';

test('Counter', async () => {
  let container = new CounterContainer();
  let component = render(
    <Provider inject={[container]}>
      <Counter amount={1}/>
    </Provider>,
  );
  let counter = component.root.findByType('span');
  let increment = component.root.findByProps({ children: '+' });
  let decrement = component.root.findByProps({ children: '-' });
  expect(counter.props.children).toBe(0);
  await container.increment();
  expect(counter.props.children).toBe(1);
  await increment.props.onClick();
  expect(counter.props.children).toBe(2);
  await container.decrement();
  expect(counter.props.children).toBe(1);
  await decrement.props.onClick();
  expect(counter.props.children).toBe(0);
});
