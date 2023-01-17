import React, { useState } from 'react';
import Attempt from './attempt';



function Word(props) {
  const letters_of_rec = props.letters;
  const[letters,setLetters] = useState(letters_of_rec);
  const [view_list, setViewList] = useState(props.view_list);
  

 const onHandleAttempt = (attempt) =>{
   const letterOfRec = letters_of_rec[attempt.index];
   console.log("attempt is letter "+ attempt.letter+ " index is "+attempt.index);
   if(attempt.letter === letterOfRec){
    props.handleRightLetter(attempt.letter);
   }
   if(attempt.letter!=letterOfRec){
    props.handleWrongLetter(attempt.letter);
   }else
      {
        console.log("wrong letter is "+ attempt.letter);
      }
 }
 
      return(
        <div>            
                {
                    letters.map((letter,idx)=>{
                      return(
                        <Attempt letter={letter} key={idx} index = {idx} handleAttempt={onHandleAttempt}></Attempt>
                      )                       
                    })
                  }         
        </div>
      );
    }

  
  export default Word;