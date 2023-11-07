import React, { } from 'react';
import { Divider } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { InputField, } from './inputs';
import SteperButton from './createQuiz/steperButton';
import CreateAnswers from './createAnswers';
import quizzesActions from '../state-mangment/quizes/actions';
import { useNavigate } from "react-router-dom";
const CreateQuizForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const answers = useSelector(({ QuizzesReducer }) => QuizzesReducer.answers);

  const { control, handleSubmit, formState: { errors }, getValues, reset, formState, watch } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      text: '', feedback_false: '', feedback_true: '',
    },
  });

  const onSubmit = (values) => {
    dispatch(quizzesActions.setQuestion({ id: uuidv4(), ...values }))
    reset();
    navigate('/', { replace: true });
  };

  const saveQuestion = (values) => {
    dispatch(quizzesActions.saveAndCreateNew({ id: uuidv4(), ...values }))
    reset();
  };

  return (
    <form className="col-12" onSubmit={handleSubmit(onSubmit)}>
      <Divider />

      <div className="row">
        <div className="form-group col-6">
          <Controller
            name="text"
            control={control}
            rules={{ required: 'Field Required' }}
            render={({ field }) => <InputField errors={errors} {...field} name="text" label="text"
            />}

          />
        </div>

        <div className="form-group col-6">
          <Controller
            name="feedback_true"
            control={control}
            rules={{ required: 'Field Required' }}
            render={({ field }) => <InputField errors={errors} {...field} name="feedback_false" label="feedback true"
            />}
          />
        </div>

        <div className="form-group col-6">
          <Controller
            name="feedback_false"
            control={control}
            rules={{ required: 'Field Required' }}
            render={({ field }) => <InputField errors={errors} {...field} name="feedback_false" label="feedback"
            />}
          />
        </div>

        <CreateAnswers />
        <SteperButton
          showCrateNew={true}
          disabled={(!formState.isValid && answers.length === 0)}
          fun={onSubmit}
          values={getValues()}
          saveQuestion={saveQuestion}
        />

      </div>

    </form>
  );
};

export default CreateQuizForm;
