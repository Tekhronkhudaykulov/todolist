import React from 'react';
import './assets/style/style.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import TodoItem from "./components/TodoItem";
import {connect} from "react-redux";
import {deleteTodo, completedAll, completeTodo} from "./store/actions/todo";

const Todo = ({todos, deleteTodo, completedAll, completeTodo, filter}) => {
    return (
            <body>
            <section className="todoapp">
            <Header/>
                <section className="main">
                    <input id="toggle-all" className="toggle-all" type="checkbox"/>
                        <label onClick={completedAll} htmlFor="toggle-all">Mark all as complete</label>
                        <ul className="todo-list">
                            {
                                todos.map(todo => {
                                   const item = <TodoItem
                                    title={todo.title}
                                    completed={todo.completed}
                                    deleteTodo={() => deleteTodo(todo.id)}
                                    completeTodo={() => completeTodo(todo.id)}
                                />  
                                if(filter === 'active' && todo.completed === false){
                                    return item
                                }else if (filter === 'completed' && todo.completed === true){
                                    return item
                                }else if (filter === 'all'){
                                    return item;
                                }
                                
                            }
                            )
                            }
                        </ul>
                    <Filter/>
                </section>
            </section>
            <Footer/>
            </body>
    );
};

const mapStateToProps = (state) => ({
    todos:state.todo.todos,
    filter: state.todo.filter
})

const mapDispatchToProps = ({
    deleteTodo,
    completedAll,
    completeTodo
})
export default connect(mapStateToProps, mapDispatchToProps)(Todo);