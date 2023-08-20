//import Definition  from "./definition";
import React, { useState } from 'react';
import Word from "./word";
import Card from 'react-bootstrap/Card';
import Display from "./rightLetter";
import Definition from "./definition";
//import Letter from "./letter";
import RightLetter from './rightLetter';



    function Game(){
      const letters = Array.from('bulwark');
      const [wrongLetter, setWrongLetter] = useState('');     
      const [rightLetters, setRightLetters] = useState([]);
      
  
      const view_list = [];
      letters.forEach((letter)=>{
        view_list.push('noView');
      });
   
   console.log(view_list);
      const definitions = [{ definition: 'a defensive wall', isCorrect: 1},
                              { definition: 'the ability to produce a desired or intended result', isCorrect: 0},
                              { definition: 'no longer produced or used; out of date', isCorrect: 0},
                              { definition: 'causing shock or dismay; horrific', isCorrect: 0},
                              { definition: 'humble submission and respect.', isCorrect: 0},
                              { definition: 'making a certain situation or outcome likely or possible', isCorrect: 0}
                            ];
                            
    const onHandleWrongLetter = (wrongLetter) =>{
      setWrongLetter(wrongLetter);
      console.log("onGetWrongLetter incomingLetter is"+wrongLetter)
    }

    const onHandleRightLetter = (rightLetter)=>{
      setRightLetters(rightLetter);
        console.log("onGetRightLetter incomingLetter is"+rightLetter)
    }

   
                            
return(
  <div>
 <Card>
  <Card.Body> 
    <RightLetter rightLetters = {rightLetters} />
    <Word letters={letters} handleRightLetter = {onHandleRightLetter} handleWrongLetter = {onHandleWrongLetter}  view_list={view_list}/>
    <Definition/>
    
    </Card.Body>
 </Card>
         
       
        
       
  </div>
);

    }
  export default Game;