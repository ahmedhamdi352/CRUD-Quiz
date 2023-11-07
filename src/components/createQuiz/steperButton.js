import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, } from '../inputs';
import quizzesActions from '../../state-mangment/quizes/actions';

const SteperButton = ({ fun, disabled, values, showCrateNew, saveQuestion }) => {
  const dispatch = useDispatch()
  const currentStep = useSelector(({ QuizzesReducer }) => QuizzesReducer.currentStep);

  return (
    <div className="steps-action">
      {currentStep > 0 && (
        <Button className="mr-2" onClick={() => {
          dispatch(quizzesActions.setNextStep(currentStep - 1))
        }}
        >
          Previous
        </Button>
      )}
      {currentStep < 1 && (
        <Button type="primary"
          disabled={disabled}
          onClick={() => {
            fun(values)
            dispatch(quizzesActions.setNextStep(currentStep + 1))

          }
          } >
          Next
        </Button>
      )}
      {showCrateNew && (
        <Button className='mx-2' type="primary" onClick={() => saveQuestion(values)} disabled={disabled}>
          Save and create new
        </Button>
      )}
      {currentStep === 1 && (
        <Button type="primary" onClick={() => fun(values)} disabled={disabled}>
          Submit
        </Button>
      )}

    </div>
  )
}

export default SteperButton