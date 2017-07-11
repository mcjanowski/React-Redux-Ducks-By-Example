import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Table from '../components/layouts/table';
import { getProducts } from '../ducks/products';


class ProductListPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProducts());
  }

  render() {
    return (
      <div>
        <h1 className="page-header">Product List</h1>
        <Table
          headers={this.props.tableHeaders}
          objects={this.props.objects}
          loading={this.props.loading}
          listLinkHref={'/products'}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  tableHeaders: [
    { label: 'Product name', name: 'name' },
    { label: 'Product code', name: 'code' },
    { label: 'Price', name: 'price', render: item => `$${item.price.toFixed(2)}` },
  ],
  objects: state.productsState.objects,
  loading: state.productsState.loading,
});

export default connect(mapStateToProps)(ProductListPage);
