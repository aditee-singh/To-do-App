import React, {Component} from 'react';
import classes from './App.module.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      newItem: "",
      list:[]
    }
  }

  addItem(){
    const newItem = {
      id = ! + Math.random(),
      value = this.state.newItem.slice()
    }

    const list = [...this.state.list]

    list.push(newItem)

    this.setState({
      list,
      newItem:""
    })
  }
  render(){
    return (
      <div className={classes.App}>
        <div>
          <p>Add an item</p>
          <br/>
          <input type="text" placeholder="Enter a task" 
          onChange={e=> this.updateInput("newItem",e.target.value)}
          />
          <button onClick={()=>this.addItem()}>Add</button>
        </div>
      </div>
    );
  }
}

export default App;
