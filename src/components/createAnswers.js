import React from 'react'
import AnswerForm from './answerForm'
const CreateAnswer = ({ count }) => {

  const items = Array.from({ length: count }, (_, index) => (
    <AnswerForm key={index} />
  ));

  return (
    <>
      {items}
    </>
  )
}

export default CreateAnswer
