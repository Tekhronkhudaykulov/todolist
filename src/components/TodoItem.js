import React from 'react';


const TodoItem = ({title, completed, deleteTodo, completeTodo}) => {
    return (
            <li className={completed && "completed"}>
                <div className="view">
                    <input onClick={completeTodo} className="toggle" type="checkbox" checked={completed}/>
                    <label>{title}</label>
                    <button onClick={deleteTodo} className="destroy"/>
                </div>
            </li>
    );
};


export default TodoItem;