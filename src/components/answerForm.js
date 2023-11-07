import React, { } from 'react';
import { Divider, message } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

import { InputField, SwitchField, Button } from './inputs';
import quizzesActions from '../state-mangment/quizes/actions';

const CreateAnswerForm = () => {
  const dispatch = useDispatch()
  const answers = useSelector(({ QuizzesReducer }) => QuizzesReducer.answers);


  const { control, handleSubmit, formState: { errors }, reset, formState } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      text: '', is_true: false
    },
  });

  const onSubmit = (values) => {
    dispatch(quizzesActions.setAnswerToQuestion({ id: uuidv4(), ...values }))
    message.success(`answer number ${answers.length + 1} added!`);
    reset()
  };

  return (
    <form className="col-12" >
      <div className="row">
        <div className="form-group col-5">
          <Controller
            name="text"
            control={control}
            rules={{ required: 'Field Required' }}
            render={({ field }) => <InputField errors={errors} {...field} name="text" label="text"
            />}
          />
        </div>

        <div className="form-group col-5">
          <Controller
            name="is_true"
            control={control}
            render={({ field }) => <SwitchField errors={errors} {...field} name="is_true" label="is true"
            />}
          />
        </div>
        <div className="form-group  col-2">
          <Button size="large" type="primary" disabled={!formState.isValid}
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </div>

      </div>
    </form>
  );
};

export default CreateAnswerForm;
