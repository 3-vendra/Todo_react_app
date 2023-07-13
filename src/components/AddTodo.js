import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title:''
    }
    onSubmit =(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title :''});
    }
    onChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    } 
    render() {
        return (
            <form style={{display:'flex'}} onSubmit={this.onSubmit}>
                <input type="text" name="title" style={{ flex:'10' ,padding:'5px'}} placeholder="Type  In A New Todo"  value={this.state.title} onChange={this.onChange}/>
                <input type="submit" value="Add New Todo +" style={{ flex:'1' }} className="btn"/>
            </form>
        )
    }
}

//PropTypes
AddTodo.propTypes={
    AddTodo: PropTypes.func.isRequired
}
export default AddTodo
