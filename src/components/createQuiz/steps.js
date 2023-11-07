import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';
import { useSelector } from 'react-redux'
import CreatQuiz from '../quizForm'
import CreateQuestions from '../createQuestions'

const { Step } = Steps;

const steps = [
  {
    title: 'Quiz Info',
    content: <CreatQuiz />,
  },
  {
    title: 'Questions and Answers',
    content: <CreateQuestions count={1} />,
  },
];

function Stepper() {
  const currentStep = useSelector(({ QuizzesReducer }) => QuizzesReducer.currentStep);
  ;

  const handleSubmit = () => {
    // Handle form submission or any other action when all steps are completed
    message.success('Processing complete!');
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <Steps current={currentStep} size="small" className="mb-4">
            {steps.map((step) => (
              <Step key={step.title} title={step.title} />
            ))}
          </Steps>

          <div className="steps-content">
            <p>{steps[currentStep].content}</p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Stepper;
