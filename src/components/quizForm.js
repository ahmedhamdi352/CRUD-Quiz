import React, { } from 'react';
import { Divider } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux'
import { InputField, } from './inputs';
import SteperButton from './createQuiz/steperButton';
import quizzesActions from '../state-mangment/quizes/actions';


const CreateQuizForm = () => {

  const dispatch = useDispatch()
  const quizInfo = useSelector(({ QuizzesReducer }) => QuizzesReducer.quizInfo);

  const { control, handleSubmit, formState: { errors }, formState, getValues } = useForm({
    defaultValues: {
      ...quizInfo
    },
  });


  const onSubmit = (values) => {
    dispatch(quizzesActions.setQuizInfo(values))
  };

  return (
    <form className="col-12" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="form-group col-4">
          <Controller
            name="title"
            control={control}
            rules={{ required: 'Field Required' }}
            render={({ field }) => <InputField errors={errors}
              {...field} name="title" label="title"

            />}
          />
        </div>

        <div className="form-group col-4">
          <Controller
            name="description"
            control={control}
            rules={{ required: 'Field Required' }}
            errors={errors}
            render={({ field }) => <InputField errors={errors}
              {...field} name="description" label="description"
            />}
          />
        </div>

        <div className="form-group col-4">
          <Controller
            name="url"
            control={control}
            rules={{ required: 'Field Required' }}
            errors={errors}
            render={({ field }) => <InputField errors={errors}
              {...field} name="url" label="url"
            />}
          />
        </div>

        <div className="form-group col-4">
          <Controller
            name="score"
            control={control}
            rules={{ required: 'Field Required' }}
            errors={errors}
            render={({ field }) => <InputField errors={errors}
              {...field} name="score" label="score"
            />}
          />
        </div>

      </div>
      <Divider />
      <SteperButton disabled={!formState.isValid} fun={onSubmit} values={getValues()} />

    </form>
  );
};

export default CreateQuizForm;
