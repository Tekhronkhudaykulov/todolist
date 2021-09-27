import React, {useState} from "react";

const Hook = () => {
    const [counter, setCounter] = useState(0);
    const  [visible, setVisible] = useState(true);

    const add = () => {
        setCounter(counter + 1);
    }

    const minus = () => {
        setCounter(counter - 1);
    }

    const bekit = () => {
        setVisible(!visible);
    }

    return (
        <>
            <div style={{display:"flex", marginLeft:20, marginTop:20}}>
                <button onClick={minus}>-</button>
                <p style={{marginLeft:20, marginRight:20}}>{counter}</p>
                <button onClick={add}>+</button>
            </div>
            <button onClick={bekit}>Blokni {visible ? 'bekitish' : 'korsat'}</button>
            {visible && <div style={{background:'#000', width:100, height:100}}/>}
        </>
    );
};
export default Hook;