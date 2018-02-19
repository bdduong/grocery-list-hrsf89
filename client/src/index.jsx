import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AddGrocery from './components/AddGrocery.jsx';
import GroceryList from './components/GroceryList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, quantity: 5, description: "frozen pizza"},
        {id: 2, quantity: 10, description: "greek yogurt"},
        {id: 3, quantity: 2, description: "wine"},
        {id: 4, quantity: 1, description: "iced coffee"}
      ]
    }
  }

  componentDidMount() {
    this.fetchGroceries()
  }

  addGroceries(item) {
    var context = this;
    $.ajax({
      type: 'POST',
      data: JSON.stringify(item),
      url: '/groceries',
      contentType: 'application/json',
      success: function(data) {
        console.log('successful post');
        context.fetchGroceries();
      },
      error: function(err) {
        console.log('error did not post');
      }
    })
  }

  fetchGroceries() {
    var context = this;
    $.ajax({
      type: 'GET',
      url: '/groceries',
      success: function(data) {
        console.log('successful get', data);
        context.setState({list: data})
      },
      error: function(err) {
        console.log('error get', err);
      }
    })
  }
  
  render () {
    return (
      <div>
        <h1>Grocery List</h1>
        <AddGrocery add={this.addGroceries.bind(this)}/>
        <GroceryList list={this.state.list}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));