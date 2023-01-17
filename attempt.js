import React, { useState, useEffect } from "react";
import './word.style.css';

function Attempt(props) {
  const letter = props.letter;
  const canShow = props.canShow;
  const [attempt, setAttempt] = useState('');

  const handleFocus = (e) =>{

  }

  const handleInputChange=(e)=>{
    console.log(e);
    const incomingLetter = e.target.value;  
    const index = e.target.getAttribute("data-index");
    let workAttempt = {letter:incomingLetter, index:index};
     setAttempt(workAttempt);   

    props.handleAttempt(workAttempt);
  }

  //const [letter, setLetter] = 
 //const [letter, setLetter] =
    return (
      <div>
          <input type="text"  className={canShow} data-index = {props.index} onChange={handleInputChange}></input>
      </div>
    );
  }
  
  export default Attempt;