import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Quiz from '../../components/quiz';
import quizzesActions from '../../state-mangment/quizes/actions';
import './style.css'
const QuizList = () => {
  const dispatch = useDispatch()
  const quizzes = useSelector(({ QuizzesReducer }) => QuizzesReducer.quizzes);

  const [quizzesData, setQuizzesData] = useState([]);

  useEffect(() => {
    // Fetch quiz data when the component mounts
    dispatch(quizzesActions.getQuizzes())
  }, []);

  useEffect(() => {
    if (quizzes !== null)
      setQuizzesData(quizzes)
  }, [quizzes]);

  return (
    <div className="container">
      <button className='button-content' ><Link to="/add-quiz">Add Quiz</Link></button>
      <Quiz quizzes={quizzesData} />
    </div>
  )
}
export default QuizList;