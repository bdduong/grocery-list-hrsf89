import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      quantity: 0 
    }
  }

  handleItem(event) {
    console.log(event.target.value);
    this.setState({item: event.target.value});
  }

  handleQuantity(event) {
    console.log(event.target.value);
    this.setState({quantity: event.target.value});
  }

  handleClick() {
    var description = this.state.item;
    var quantity = this.state.quantity;
    var request = {
      description: description,
      quantity: quantity
    }
    this.props.add(request);
  }

  render () {
    return (
      <div>
      Description: <input type="text" onChange={this.handleItem.bind(this)}></input>
      <br></br>
      Quantity: <input type="text" onChange={this.handleQuantity.bind(this)}></input>
      <button onClick={this.handleClick.bind(this)}>Add Grocery</button>
      </div>
    )
  }
}

export default AddGrocery;

