import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import data from '../../data'
import './Quiz.css'
// import { ToastContainer, toast } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Test = () => {
  const notify = () => toast.success("Sizin cavab doğrudur!!!");
  const notifyFalse = () => toast.error("Sizin cavab  yanlışdır!!!");

  const location = useLocation()
  let topicId = location.pathname.slice(location.pathname.length - 4, location.pathname.length - 2)
  let levelId = location.pathname.slice(location.pathname.length - 1, location.pathname.length)
const [IsSkip, setIsSkip] = useState(false)

  let initialQuiz = data.filter(d => (d.levelId === levelId && d.topicId === topicId))
const [disabledAnswer, setDisabledAnswer] = useState(false)
// const [trueAnswer, setTrueAnswer] = useState()
let answer=document.querySelector('.btn-answer')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const clickAnswer=(myAnswer)=>{
if(myAnswer==initialQuiz[currentQuestionIndex].answer){
notify();
setDisabledAnswer(true)

}else{
setDisabledAnswer(true)
notifyFalse();
}
}

  const handleSkip = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setDisabledAnswer(false)
    setIsSkip(true)
  };

  return (
  <div className='test-page-all-div'>
      <div className='all-test'>
     <Toaster
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 1500,
    style: {
      background: '#363636',
      color: '#fff',
    },

    success: {
      duration: 1500,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
      {initialQuiz[currentQuestionIndex] && (
        <div className='my-quiz'>
          <h4>{initialQuiz[currentQuestionIndex].question}
         <span>{currentQuestionIndex+1}/3</span>
          
          </h4>
         {
         initialQuiz[currentQuestionIndex].allAnswer.map((t,i)=>(
<button disabled={disabledAnswer} key={i} className='btn-answer' onClick={()=>clickAnswer(t)}>{t}</button>
         ))
         }
        </div>
      )}
      
      
      <div className='all-btn-div'>
      {currentQuestionIndex === initialQuiz.length-1 ? (
          <Link to='/'>
             <button className='skip-btn' disabled={currentQuestionIndex !== initialQuiz.length - 1}>
          Ana Səhifə
         </button>
          </Link>
        ):<button className='skip-btn go-home' onClick={handleSkip} disabled={currentQuestionIndex === initialQuiz.length - 1}>
        Skip
      </button>} 
      </div>
        
      
    </div>
  </div>
  )
}

export default Test
