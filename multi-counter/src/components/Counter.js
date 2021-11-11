import { Component } from 'react';

// Counter Component
class Counter extends Component {  
  constructor(props) {
    super(props);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.currentActive === this.props.indx;
  }
  
  render() {
    const { indx, value, onIncrement, onDecrement } = this.props;
    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button onClick={() => onDecrement( 1)} className="button is-danger is-small">-</button>
          <button onClick={()=> onIncrement( indx + 1)} className="button is-success is-small">+</button>
        </div>
      </div>
    );
  }
}

export default Counter;
