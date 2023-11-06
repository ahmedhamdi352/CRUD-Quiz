import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Quiz from '../../components/quiz';
import quizzesActions from '../../state-mangment/quizes/actions';

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
    <Quiz quizzes={quizzesData} />
  )
}
export default QuizList;