import React, { forwardRef } from 'react';
import { Form, Input, Upload } from 'antd';
import ErrorMessage from './errorMessage';
const InputField = forwardRef((props, ref) => {

  const { name, label = '', errors = {}, prefix = '', size = '' } = props;
  const errorMessage = errors[name] ? errors[name].message : '';
  const validateStatus = errorMessage ? 'error' : '';
  return (
    <Form.Item label={label || ''} validateStatus={validateStatus} help={<ErrorMessage name={name || 'NULL'} errors={errors || {}} />}>
      <Input ref={ref} {...props} prefix={prefix || null} size={size || 'default'} />
    </Form.Item>
  );
})

export default InputField;
