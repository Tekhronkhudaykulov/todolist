import React from 'react';
import { connect } from 'react-redux';
import {clearCompleted,setFilter} from "../store/actions/todo";

const Filter = ({todos, clearCompleted,setFilter,filter}) => {
    console.log(filter)
    return (
        <footer className="footer">
            <span className="todo-count">
                {todos.filter(item => !item.completed).length} items left
            </span>
            <ul className="filters">
                <li onClick={() => setFilter('all')}>
                    <a href="#/" className={(filter === 'all') && "selected"}>All</a>
                </li>
                <li onClick={() => setFilter('active')}>
                    <a href="#/active" className={(filter === 'active') && "selected"}>Active</a>
                </li>
                <li onClick={() => setFilter('completed')}>
                    <a href="#/completed" className={(filter === 'completed') && "selected"}>Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
        </footer>
    );
};

const mapStateToProps = (state) => ({
    todos: state.todo.todos,
    filter:state.todo.filter
})

const mapDispatchToProps = ({
    clearCompleted,
    setFilter
})
export default connect(mapStateToProps, mapDispatchToProps)(Filter);