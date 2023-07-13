import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

class App extends React.Component{
  state ={
    todos:[
      {
        id: 1,
        title :'Wash all plates',
        done:false
      },
      {
        id: 2,
        title :'Play PS4',
        done: false
      },
      {
        id: 3,
        title :'Read books on reactjs',
        done:false
      }
    ]
  }

  //MarkComplete
  markComplete= (id) =>{
    this.setState({
      todos:this.state.todos.map(todo =>{
        if(todo.id === id){
          todo.done = !todo.done
        }return todo;
      })
    });
  }

  //delete todo
  delTodo =(id)=>{
    this.setState({
      todos: [...this.state.todos.filter(todo =>
        todo.id !== id)]
    })
  }
  addTodo=(title)=>{ 
    let id = this.state.todos.length + 1;
    const newTodo ={
      id,
      title,
      done: false
    }
    this.setState({todos:[...this.state.todos, newTodo]});
}
  render(){
    return (
    <Router>
      <div className="App">
      <div className="container">
      <Header />
      <Route  exact path="/" render={props =>(
        <React.Fragment>
           <AddTodo addTodo={this.addTodo}/>
        <Todos todos ={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo} />
        </React.Fragment>
      )} />
      <Route path="/about" component={About} />
      </div>
        <Footer />
      </div>
    </Router>
    ); 
  }
}

export default App;
