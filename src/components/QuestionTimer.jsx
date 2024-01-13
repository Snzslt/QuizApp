import {useState, useEffect} from 'react';
export default function QuestionTimer({timeout, onTimeout}){
const [remainingTime, setRemainingTime] = useState(timeout);

useEffect(() => {
    setTimeout(() => {
        onTimeout()
    });
},[timeout, onTimeout]);
   
    //setTimeout (onTimeout, timeout);

    useEffect (() => {
        setInterval(() =>{
            setRemainingTime((preRemainingTime) => preRemainingTime - 100);
        }, 100);
    }, []);
   

    return <progress id='questiong-time' max={timeout} value={remainingTime}/>;
}