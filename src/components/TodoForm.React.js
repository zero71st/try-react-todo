import React from 'react';
class TodoForm extends React.Component{
    constructor(){
        super();

        this.state = {
            running:0,
            todos:[]
        }
        this.addTodo= this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
    
    addTodo(e){
        e.preventDefault();
        
        let name =this.refs.name.value; 
        let completed = this.refs.completed;
        let running = this.state.running;

        let todo = {
            id : running,
            name: name,
            completed: completed
        }
        running += 1;

        let mytodos = this.state.todos;
        mytodos.push(todo);
        
        this.setState({
            todos:mytodos,
            running:running
        });
        
        console.log(todo);
        this.refs.todoForm.reset();
    }

    removeTodo(index){
        console.log(index);
        let mytodos = this.state.todos;

        let todo = mytodos.find(function(todo){
            return todo.id === index;
        });

        mytodos.splice(mytodos.indexOf(todo),1);

        this.setState({
            todos: mytodos
        });

        console.log(mytodos);
    }

    render(){
        let todos = this.state.todos;
        return(
            <div>
                <form ref="todoForm">
                    <input type="text" ref="name" placeholder="What's activity?" />
                    <input type="text" ref="completed" placeholder="Is done yet?" />
                    <button onClick={this.addTodo}>Add Todo</button>
                </form>
                <ul>
                    {todos.map((todo => 
                      <li key={todo.id}>
                       <h4>{todo.id}</h4> 
                       <h4>{todo.name}</h4>
                        <button onClick={this.removeTodo.bind(null,todo.id)}>Remove</button>
                      </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoForm;