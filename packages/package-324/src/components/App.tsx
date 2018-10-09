import * as React from 'react';
import { Provider } from 'unstated';
import Counter from './Counter';

type Props = {};

type State = {
  amount: number,
};

export default class App extends React.Component<Props, State> {
  state = {
    amount: 1,
  };

  handleChange = (event: any) => {
    this.setState({ amount: Number(event.currentTarget.value) });
  };

  render() {
    return (
      <Provider>
        <div>
          <Counter amount={this.state.amount}/>
          <input type="number" value={this.state.amount} onChange={this.handleChange}/>
        </div>
      </Provider>
    );
  }
}
