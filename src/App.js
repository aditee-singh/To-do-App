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

  updateInput(key,value){
    this.setState({
      [key]:value
    })
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
 
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });

    console.log(this.state.newItem)
  }

  deleteItem(id){
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id != id)

    this.setState({list: updatedList});
  }
  
  render(){
    return (
      <div className={classes.App}>
        <div>
          <p>Add an item</p>
          <br/>
          <input type="text" placeholder="Enter a task" value={this.state.newItem}
          onChange={e=> this.updateInput("newItem",e.target.value)}
          />
          <button onClick={()=>this.addItem()}>Add</button>
          <br/>
          <ul>
            {this.state.list.map(item=>{
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={()=>{this.deleteItem(item.id)}}>X</button>
                  </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
