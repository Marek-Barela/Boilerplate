import React, { Component } from 'react';
import { getCounter } from '../../features/timer/selectors';
import { connect } from 'react-redux';

import { increment, decrement, reset } from '../../features/timer/actions';

class Counter extends Component {
  increment = () => {
    this.props.dispatch(increment())
  }

  decrement = () => {
    this.props.dispatch(decrement())
  }

  reset = () => {
    this.props.dispatch(reset())
  }

  render() {
    const { count } = this.props

    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const count = getCounter(state)
  return {
    count
  }
}
export default connect(mapStateToProps)(Counter)
