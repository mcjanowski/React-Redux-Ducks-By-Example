import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';

import Loader from '../layouts/loader';
import { renderField } from '../forms/render-fields';
import { FIELD_REQUIRED } from '../../constants/messages';


const FormFields = () => (
  <div>
    <Row>
      <Col sm={6}>
        <Field
          name="name"
          type="text"
          component={renderField}
          label="Product name"
        />
      </Col>
    </Row>
    <Row>
      <Col sm={6}>
        <Field
          name="code"
          type="text"
          component={renderField}
          label="Product code"
        />
      </Col>
    </Row>
    <Row>
      <Col sm={6}>
        <Field
          name="price"
          type="number"
          component={renderField}
          extra={{
            step: 0.5,
          }}
          label="Price ($)"
        />
      </Col>
    </Row>
  </div>
);

class ProductForm extends React.Component {
  render() {
    const { loading, handleSubmit, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-content">
            {(submitting || loading) && <Loader />}
            <FormFields />
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-success" disabled={submitting}>Save</button>
            <button type="button" className="btn btn-warning" onClick={reset}>Reset</button>
            <Link to={'/products'} className="btn btn-danger pull-right">Cancel</Link>
          </div>
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = FIELD_REQUIRED;
  }
  if (!values.code) {
    errors.code = FIELD_REQUIRED;
  }
  if (!values.price) {
    errors.price = FIELD_REQUIRED;
  }

  return errors;
}

export default reduxForm({
  form: 'ProductForm',
  validate,
})(ProductForm);
