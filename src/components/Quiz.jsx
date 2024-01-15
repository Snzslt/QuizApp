import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz(){
   
    
    const [userAnswers, setUserAnswer] = useState([]);

    const activeQuestionIndex =  userAnswers.length;

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    console.log(QUESTIONS.length);
    console.log(activeQuestionIndex);
  

   const handleSelectAnswer = useCallback(function handleSelectAnswer(
       selectedAnswer
       ){
        
        setUserAnswer((prevUserAnswers) => {

        return [...prevUserAnswers, selectedAnswer];
        });
        
    },[]);


    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
         [handleSelectAnswer]
         );

    if (quizIsComplete){
        return (
            <Summary userAnswers={userAnswers}/>  
        )
    }

     /*as we have two same key in here we can check an condition and make the two components not to be sibling any more or we can
            add new compnent and put all the code in there and use one key property for them all
            // I chosed to add condition instead of new component vut you can refer to 242 video */
         
    return (
        <div id='quiz'>
          <Question 
          key = {activeQuestionIndex}
          index = {activeQuestionIndex}
          onSelectAnswer = {handleSelectAnswer}
          onSkipAnswer = {handleSkipAnswer}/>
        </div>
      );
      
}