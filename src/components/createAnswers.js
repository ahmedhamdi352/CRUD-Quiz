import React from 'react'
import AnswerForm from './answerForm'
import { Divider } from 'antd';
const CreateAnswer = ({ count = 1 }) => {

  return (
    <>
      <Divider />
      <span>Answers</span>
      <Divider />
      <AnswerForm />
    </>
  )
}

export default CreateAnswer
