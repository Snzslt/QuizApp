import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from './Question.jsx';

export default function Quiz(){
   
    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswer] = useState([]);
    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    console.log(QUESTIONS.length);
    console.log(activeQuestionIndex);
  

   const handleSelectAnswer = useCallback(function handleSelectAnswer(
       selectedAnswer
       ){
        setAnswerState('answered');
        setUserAnswer((prevUserAnswers) => {

        return [...prevUserAnswers, selectedAnswer];
        });
        setTimeout(()=> {
            if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
                setAnswerState('correct');
            }
            else{
                setAnswerState('wrong');
            }

            setTimeout(() => {
                setAnswerState('');
            }, 2000);

        },1000);

    },[activeQuestionIndex]);


    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
         [handleSelectAnswer]
         );

    if (quizIsComplete){
        return <div id='summary'>
            <img src={quizCompleteImg} alt="Trophy icon"/>
            <h2>Quiz Completed!</h2>
            </div>
    }

     /*as we have two same key in here we can check an condition and make the two components not to be sibling any more or we can
            add new compnent and put all the code in there and use one key property for them all
            // I chosed to add condition instead of new component vut you can refer to 242 video */
         
    return (
        <div id='quiz'>
          <Question 
          key = {activeQuestionIndex}
          questionText={QUESTIONS[activeQuestionIndex].text}
          answers={QUESTIONS[activeQuestionIndex].answers}
          answerState = {answerState}
          selectedAnswer ={userAnswers[userAnswers.length - 1]}
          onSelectAnswer = {handleSelectAnswer}
          onSkipAnswer = {handleSkipAnswer}/>
        </div>
      );
      
}