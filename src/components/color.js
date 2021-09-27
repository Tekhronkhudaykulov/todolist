import React, {useState} from "react";
import '../assets/style/style.scss'

const  Color = () => {
    const [color, setColor] = useState('red');
    const  changeColor = () => {
        if (color === 'red'){
            setColor('blue')
        }else {
            setColor('red')
        }
    }
    return (
        <>
            <div style={{background:color, width:100, height:100}}></div>
            <button onClick={changeColor} className={'button'}>Rangni uzgartirish</button>
        </>


    )
}
export default Color;