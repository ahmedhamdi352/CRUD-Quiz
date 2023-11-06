import React, { } from 'react';
import { Divider } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { InputField, Button, } from './inputs';
import CreateQuestions from './createQuestions';

const CreateQuizForm = () => {

  const { handleSubmit, control, formState, watch } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      title: '', url: '', score: '', description: '', num_question: 1
    },
  });

  const onSubmit = (values) => {
    console.log(values)
    // reset();
  };

  return (
    <form className="col-12" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="form-group col-3">
          <Controller
            name="title"
            control={control}
            render={({ field }) => <InputField {...field} name="title" label="title"
            />}
          />
        </div>

        <div className="form-group col-3">
          <Controller
            name="description"
            control={control}
            render={({ field }) => <InputField {...field} name="description" label="description"
            />}
          />
        </div>

        <div className="form-group col-3">
          <Controller
            name="url"
            control={control}
            render={({ field }) => <InputField {...field} name="url" label="url"
            />}
          />
        </div>

        <div className="form-group col-3">
          <Controller
            name="score"
            control={control}
            render={({ field }) => <InputField {...field} name="score" label="score"
            />}
          />
        </div>

        <div className="form-group col-3">
          <Controller
            name="num_question"
            control={control}
            render={({ field }) => <InputField {...field} name="num_question" label="num of question"
            />}
          />
        </div>
      </div>

      <Divider />
      <span >Questions</span>
      <CreateQuestions count={watch('num_question')} />

      <div className="row">
        <div className="form-group col-4 col-lg-1">
          <Button size="large" htmlType="submit" type="primary" disabled={!formState.isValid} >
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CreateQuizForm;
