
import './content.css';
import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';

export default function Content(){
    const name = 'John';
 
    const [counter, setCount] = useState(0);

    const increment = () => {

        setCount(counter + 1);
      };
    
      const decrement = () => {
        setCount(counter-1);
      };
      useEffect(()=>{
        alert("You've change counter to "+ counter);
      },[counter])
    
    return (
        <div className='header'>
        <h1 >
           Front-End Development
        </h1>
        <p>
            Hello {name}
           
        </p>
            <button onClick={decrement}>
                -
            </button>
            <h1>{counter}</h1>
            <button onClick={increment}>
                +
            </button>
            
        </div>
    )
}