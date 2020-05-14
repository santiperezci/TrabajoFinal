import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../completed.css';
const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Editar</Link>
        </td>
        
    </tr>
)
export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }
     borrarTarea(id){}
    componentDidMount() {  
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }
    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }
    render() {
        return (
            <div>
            <h3>Tareas</h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>Descripción</th>
                        <th>Fecha</th>
                        <th>Prioridad</th>
                        <th>Modificar</th>
                        
                    </tr>
                </thead>
                <tbody>
                    { this.todoList() }
                </tbody>
            </table>
        </div>
        )
    }
}