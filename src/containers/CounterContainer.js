// @flow
import { Container } from 'unstated';

type State = {
  count: number,
};

export default class CounterContainer extends Container<State> {
  state = {
    count: 0,
  };

  increment = async (amount: number = 1) => {
    await this.setState(state => ({ count: state.count + amount }));
  };

  decrement = async (amount: number = 1) => {
    await this.setState(state => ({ count: state.count - amount }));
  };
}
