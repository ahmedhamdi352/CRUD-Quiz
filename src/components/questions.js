import React from 'react';
import { Collapse, Divider } from 'antd';
import Answers from './answers'
const Questions = ({ questions }) => {

  const data = questions.map(item => {
    return {
      key: item.id,
      label: item.text,
      children: <Answers answers={item.answers} feedback_false={item.feedback_false} feedback_true={item.feedback_true} />
    }
  })
  return (
    <>
      <Divider orientation="left">Questions</Divider>
      <Collapse
        style={{ width: '100%' }}
        items={[...data]}
      />

    </>
  )
}

export default Questions;