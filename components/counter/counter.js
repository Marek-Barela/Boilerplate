import React, { Component } from 'react';
import { incrementCounter, decrementCounter } from '../../features/counter/actions';
import { getCounter } from '../../features/counter/selectors';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    const { count, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h2>Counter</h2>
        <button onClick={incrementCounter}>+1</button>
        <button onClick={decrementCounter}>-1</button>
        <span>Result: {`${count}`}</span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const count = getCounter(state)

  return {
    count
  };
};

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);