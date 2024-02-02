import React, { useState } from 'react'
import { useLocation } from "react-router-dom"
import data from '../../data'
import './Quiz.css'
const Test = () => {
  const location = useLocation()
  let topicId = location.pathname.slice(location.pathname.length - 4, location.pathname.length - 2)
  let levelId = location.pathname.slice(location.pathname.length - 1, location.pathname.length)

  let initialQuiz = data.filter(d => (d.levelId === levelId && d.topicId === topicId))
const [disabledAnswer, setDisabledAnswer] = useState(false)
// const [trueAnswer, setTrueAnswer] = useState()
let answer=document.querySelector('.btn-answer')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const clickAnswer=(myAnswer)=>{
if(myAnswer==initialQuiz[currentQuestionIndex].answer){
answer.classList.add('.true')
setDisabledAnswer(true)
}else{
  answer.classList.add('.false')

setDisabledAnswer(true)

}
}
  const handleSkip = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setDisabledAnswer(false)
  };

  return (
    <>
      {initialQuiz[currentQuestionIndex] && (
        <div>
          <h4>{initialQuiz[currentQuestionIndex].question}</h4>
         {
         initialQuiz[currentQuestionIndex].allAnswer.map((t,i)=>(
<button disabled={disabledAnswer} key={i} className='btn btn-answer' onClick={()=>clickAnswer(t)}>{t}</button>
         ))
         }
         <p>{currentQuestionIndex+1}/3</p>
        </div>
      )}
      <button onClick={handleSkip} disabled={currentQuestionIndex === initialQuiz.length - 1}>
        Skip
      </button>
    </>
  )
}

export default Test
