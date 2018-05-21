// @flow
import CounterContainer from '../CounterContainer';

test('CounterContainer', async () => {
  let counter = new CounterContainer();
  expect(counter.state.count).toBe(0);
  await counter.increment();
  expect(counter.state.count).toBe(1);
  await counter.increment(2);
  expect(counter.state.count).toBe(3);
  await counter.decrement();
  expect(counter.state.count).toBe(2);
  await counter.decrement(2);
  expect(counter.state.count).toBe(0);
});
