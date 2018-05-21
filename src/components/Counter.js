// @flow
import React from 'react';
import { Subscribe } from 'unstated';
import CounterContainer from '../containers/CounterContainer';

type Props = {
  amount: number
};

export default function Counter(props: Props) {
  return (
    <Subscribe to={[CounterContainer]}>
      {counter => (
        <div>
          <span>{counter.state.count}</span>
          <button onClick={() => counter.increment(props.amount)}>+</button>
          <button onClick={() => counter.decrement(props.amount)}>-</button>
        </div>
      )}
    </Subscribe>
  );
}
