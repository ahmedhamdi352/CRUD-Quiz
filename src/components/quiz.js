import React from 'react'
import QuizCard from './common/card';
import { extractVideoID } from '../helpers/getIdFromUrl'

const quiz = ({ quizzes }) => {
  return (
    <>
      {quizzes?.map((data, index) => <QuizCard key={index}
        title={data?.title}
        description={data?.description}
        url={`https://www.youtube.com/embed/${extractVideoID(data?.url)}`}
        score={data.score}
        questions_answers={data?.questions_answers}
      />)}
    </>

  )
}

export default quiz