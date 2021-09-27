import soReact, {useState} from 'react';
import {connect} from "react-redux";
import {addTodo} from "../store/actions/todo";

const Header = ({addTodo}) => {
    const [value, setValue] = useState('');
    return (
        <header className="header">
            <h1>todos</h1>
            <input
                   onChange={event => setValue(event.target.value)}
                   className="new-todo"
                   placeholder="What needs to be done?"
                   autoFocus
                   value={value}
                   onKeyDown={event => {
                       if (event.keyCode === 13){
                          addTodo(value)
                           setValue('');
                       }
                   }}
            />
        </header>
    );
};

const mapDispatchToProps = ({
    addTodo,
})

export default connect(null, mapDispatchToProps)(Header);