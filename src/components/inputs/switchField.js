import React from 'react';
import PropTypes from 'prop-types';
import { Form, Switch } from 'antd';
import ErrorMessage from './errorMessage';
const SwitchField = (props) => {
  const { name = '', label = '', errors = {}, value = false, style = {} } = props;
  const errorMessage = errors[name] ? errors[name].message : '';
  const validateStatus = errorMessage ? 'error' : '';
  return (
    <Form.Item className='d-flex' style={{ ...style }} label={label || ''} validateStatus={validateStatus} help={<ErrorMessage name={name || 'NULL'} errors={errors || {}} />}>
      <Switch {...props} checkedChildren="Enable" unCheckedChildren="Disable" checked={value} />
    </Form.Item>
  );

}


export default SwitchField;
