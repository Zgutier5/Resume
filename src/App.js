import React, { Component } from 'react';
import logo from './logo.svg';
import Skills from './componets/Skills';
import Experience from './componets/Experience';
import Education from './componets/Education';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Task from './componets/Task';
import './App.css';



class App extends Component {
  state = {
    tasks: [],
    inputText: ''
  };

  handleTextChange = (e) => {
    e.preventDefault();
    const newState = {...this.state};
    newState.inputText = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newState = {...this.state};
    newState.tasks.push({
      id: Date.now().toString(),
      title: newState.inputText
    });

    newState.inputText = '';
    this.setState(newState);
  };

  handleDeleteTask = (index) => {
    const newState = {...this.state};
    newState.tasks.splice(index, 1);
    this.setState(newState);
  };

  listTasks = () => {
    return this.state.tasks.map((task, index) => {
      return <Task 
              taskName={task.title} 
              onDelete={()=> {this.handleDeleteTask()}}
              key={task.index} 
              />
    });
  };

  render() {
    return (

      <div class='App'>
        <h1>Ezequiel Gutierrez</h1>
        <p/>
        <form onSubmit={this.handleSubmit}>
            <TextField value={this.state.inputText} onChange={this.handleTextChange} />
            <Button onClick={this.handleSubmit} variant="contained" component="span">List</Button>
        </form>
        {this.listTasks()}
        <p/>
        <Education/>
        <Skills/>
        <Experience/>
      </div>
    );
  }
}

export default App;
