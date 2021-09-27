import React from 'react';
import {decrement, increment, reset} from "./store/actions/counter";
import {connect} from "react-redux";

const Counter = (props) => {

    return (
        <div>
            <div>{props.counter.counter}</div>
            <div>
                <button onClick={props.increment}>increment</button>
                <button onClick={props.reset} >reset</button>
                <button onClick={props.decrement}>decrement</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = ({
    increment,
    decrement,
    reset,
})
export default connect(mapStateToProps,mapDispatchToProps)(Counter);