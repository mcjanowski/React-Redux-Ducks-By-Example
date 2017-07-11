import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';


export const renderField = ({ input, label, type, meta: { touched, error }, extra = {} }) => (
  <FormGroup validationState={touched && error ? 'error' : null}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      {...input}
      type={type}
      {...extra}
    />
    {touched && error ? <HelpBlock>{error}</HelpBlock> : null}
  </FormGroup>
);

export const renderSelect = ({ input, label, options, meta: { touched, error } }) => (
  <FormGroup validationState={touched && error ? 'error' : null}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...input} componentClass="select" placeholder="select">
      {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
    </FormControl>
    {touched && error ? <HelpBlock>{error}</HelpBlock> : null}
  </FormGroup>
);
