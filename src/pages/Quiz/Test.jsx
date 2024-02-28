import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import data from '../../data';
import './Quiz.css';
import masallah from '../../music/masallah.mpeg'

const Test = () => {
  const notify = () => toast.success("Maşallah!!!");
  const notifyFalse = () => toast.error("Cavabınız  yanlışdır!!!");

  const location = useLocation();
  let topicId = location.pathname.slice(location.pathname.length - 4, location.pathname.length - 2);
  let levelId = location.pathname.slice(location.pathname.length - 1, location.pathname.length);
  const [isSkip, setIsSkip] = useState(false);
  const [countOfTrue, setCountOfTrue] = useState(0);
  const [countOfFalse, setCountOfFalse] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [disabledAnswer, setDisabledAnswer] = useState(false);

  let initialQuiz = data.filter(d => (d.levelId === levelId && d.topicId === topicId));
  const audio = new Audio(masallah);

  const clickAnswer = (myAnswer) => {
    if (myAnswer === initialQuiz[currentQuestionIndex].answer) {
      notify();
      setDisabledAnswer(true);
      setCountOfTrue(countOfTrue + 1);
      audio.play();
    } else {
      notifyFalse();
      setDisabledAnswer(true);
      setCountOfFalse(countOfFalse + 1);
    }
  };

  const handleSkip = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setDisabledAnswer(false);
    setIsSkip(true);
  };
  
  const countHandle = () => {
    setCountOfFalse(0);
    setCountOfTrue(0);

  };

  return (
    <div className='test-page-all-div'>
      <div className='all-test'>
        <Toaster
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 5000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
        />
        {initialQuiz[currentQuestionIndex] && (
          <div className='my-quiz'>
            <h4 dangerouslySetInnerHTML={{ __html: initialQuiz[currentQuestionIndex].question }} />
            {initialQuiz[currentQuestionIndex].allAnswer.map((t, i) => (
              <button
                key={i}
                disabled={disabledAnswer}
                className='btn-answer'
                onClick={() => clickAnswer(t)}
              >
                  <span dangerouslySetInnerHTML={{ __html: t }} />
                 </button>
            ))}
          </div>
        )}
        <div className='all-btn-div'>
          {currentQuestionIndex === initialQuiz.length - 1 ? (
            <Link to='/' className='go-to-homr-anchor'>
              <button
                className='skip-btn go-to-home-btn'
                onClick={() => {countHandle()}}
                disabled={currentQuestionIndex !== initialQuiz.length - 1}
              >
                Ana Səhifə
              </button>
            </Link>
          ) : (
            <button
              className='skip-btn go-home'
              onClick={handleSkip}
              disabled={currentQuestionIndex === initialQuiz.length - 1}
            >
              Növbəti
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Test;
