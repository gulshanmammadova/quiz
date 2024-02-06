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
const [countOfTrue, setCountOfTrue] = useState(0)
const [countOfFalse, setCountOfFalse] = useState(0)


  let initialQuiz = data.filter(d => (d.levelId === levelId && d.topicId === topicId))
const [disabledAnswer, setDisabledAnswer] = useState(false)
// const [trueAnswer, setTrueAnswer] = useState()
let answer=document.querySelector('.btn-answer')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const clickAnswer=(myAnswer)=>{
if(myAnswer==initialQuiz[currentQuestionIndex].answer){
notify();
setDisabledAnswer(true)
setCountOfTrue(countOfTrue+1)
}else{
setDisabledAnswer(true)
notifyFalse();
setCountOfFalse(countOfFalse+1)
}
}

  const handleSkip = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setDisabledAnswer(false)
    setIsSkip(true)
  
  };
const countHandle=()=>{
  setCountOfFalse(0)
  setCountOfTrue(0)
}
// console.log(countOfTrue + ' dogru')
// console.log(countOfFalse + ' sehv')

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
{
       countOfTrue>0 ? (
        <span className='span-of-count'>{countOfTrue} - doğru</span>
     
       ):null
}   
      <div className='all-btn-div'>
      {currentQuestionIndex === initialQuiz.length-1 ? (
          <Link to='/' className='go-to-homr-anchor'>
             <button className='skip-btn go-to-home-btn' onClick={()=>{countHandle()}} disabled={currentQuestionIndex !== initialQuiz.length - 1}>
          Ana Səhifə
         </button>
          </Link>
        ):<button className='skip-btn go-home' onClick={handleSkip} disabled={currentQuestionIndex === initialQuiz.length - 1}>
        Növbəti
      </button>} 
      </div>
        
      
    </div>
  </div>
  )
}

export default Test
