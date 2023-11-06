import React from 'react'
import QuestionsForm from './questionsForm'
const CreateQuestions = ({ count }) => {

  const items = Array.from({ length: count }, (_, index) => (
    <QuestionsForm key={index} />
  ));

  return (
    <>
      {items}
    </>
  )
}

export default CreateQuestions
