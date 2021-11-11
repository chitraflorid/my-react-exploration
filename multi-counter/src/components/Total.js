import {Component} from 'react';

class Total extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <span>Total :: {this.props.total}</span>
    );
  }
  
}
