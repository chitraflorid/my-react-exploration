import {Component} from 'react';
import Counter from './Counter';
import Total from './Total';

class MultiCounter extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { data: [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  {id:4, value: 0}
],
                 currentActive: -1
                 };
    
    this.state.total = this.calculateTotal();

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
 
  }
  
  calculateTotal() {
    return this.state.data.reduce((total, counter) => total += counter.value, 0);
  }
  
  handleIncrement(indx) {
    return (byVal) => this.changeVal(indx, byVal, "+");
    
  };
  
  changeVal(indx, byVal, op) {
     let { data } = this.state;
    
    data = data.map((counter, index) => {
      if (index === indx) {
        counter.value = op === "+" ? counter.value + byVal : counter.value - byVal;
      }
          return counter;
    });
    
    this.setState({data, total: this.calculateTotal(), currentActive: indx});
  }
  
  handleDecrement(indx)  {
    return (byVal) => this.changeVal(indx, byVal, '-');
  }

  render() {
    return (
      <>
      <div>
        {this.state.data.map((counter, indx) => ( 
          <Counter 
            key={counter.id} 
            currentActive={this.state.currentActive}
            indx={indx}
            value={counter.value} 
            onIncrement={(()=> this.handleIncrement(indx))()}
            onDecrement={(()=> this.handleDecrement(indx))()}
            />
        ))}
      </div>
        <Total total={this.state.total} />
        </>
    );
  }
}
