import React from 'react'
import { Divider } from 'antd';
import CreateQuizForm from '../../components/quizForm';

const CreateQuiz = () => {
  return (
    <div >
      <span >Add New Quiz</span>
      <Divider />
      <CreateQuizForm />
    </div>
  )
}
export default CreateQuiz;