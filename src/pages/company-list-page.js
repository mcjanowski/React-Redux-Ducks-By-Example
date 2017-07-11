import React from 'react';
import { connect } from 'react-redux';

import Table from '../components/layouts/table';
import { getCompanies } from '../ducks/companies';

class CompanyListPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCompanies());
  }

  render() {
    return (
      <div>
        <h1 className="page-header">Company List</h1>
        <Table
          headers={this.props.tableHeaders}
          objects={this.props.objects}
          loading={this.props.loading}
          listLinkHref={'/companies'}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  tableHeaders: [
    { label: 'Company name', name: 'name' },
    { label: 'Country/Headquarter', name: 'country' },
  ],
  objects: state.companiesState.objects,
  loading: state.companiesState.loading,
});

export default connect(mapStateToProps)(CompanyListPage);
