import React from 'react';
import { connect } from 'react-redux';

import ProductForm from '../components/products/product-form';
import { saveProduct } from '../ducks/product';


class ProductAddPage extends React.Component {
  render() {
    return (
      <div>
        <h1 className="page-header">Product Creation Form</h1>
        <ProductForm
          onSubmit={this.props.onSubmit}
          loading={this.props.loading}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.productState.loading,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => (
    dispatch(saveProduct({
      ...values,
      price: parseFloat(values.price),
    }))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductAddPage);
