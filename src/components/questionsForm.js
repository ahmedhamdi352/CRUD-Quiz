import React, { } from 'react';
import { Divider } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { InputField, } from './inputs';
import CreateAnswer from './createAnswers';

const CreateQuizForm = () => {

  const { handleSubmit, control, reset, watch, } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      text: '', feedback_false: '', feedback_true: '', num_answer: 1
    },
  });

  const onSubmit = (values) => {
    console.log(values)
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
            render={({ field }) => <InputField {...field} name="text" label="text"
            />}

          />
        </div>

        <div className="form-group col-6">
          <Controller
            name="feedback_true"
            control={control}
            render={({ field }) => <InputField {...field} name="feedback_false" label="feedback true"
            />}
          />
        </div>

        <div className="form-group col-6">
          <Controller
            name="feedback_false"
            control={control}
            render={({ field }) => <InputField {...field} name="feedback_false" label="feedback"
            />}
          />
        </div>

        <div className="form-group col-6">
          <Controller
            name="num_answer"
            control={control}
            render={({ field }) => <InputField {...field} name="num_answer" label="num of answer"
            />}
          />
        </div>
      </div>

      <Divider />
      <span >Answers</span>
      <CreateAnswer count={watch('num_answer')} />
    </form>
  );
};

export default CreateQuizForm;
