import React, { } from 'react';
import { Divider } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { InputField, SwitchField, } from './inputs';

const CreateAnswerForm = () => {

  const { handleSubmit, control, reset, } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      text: '', isTrue: '',
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
            name="is_true"
            control={control}
            render={({ field }) => <SwitchField {...field} name="is_true" label="is true"
            />}
          />
        </div>

      </div>
    </form>
  );
};

export default CreateAnswerForm;
