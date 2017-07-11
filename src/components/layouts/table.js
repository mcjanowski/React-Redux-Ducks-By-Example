import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Loader from './loader';
import { LOADING_DATA, NO_DATA_FOUND, EMPTY_VALUE } from '../../constants/messages';


const Table = ({ headers, objects, pagination, loading, listLinkHref, getDataFn }) => (
  <div className="card">
    <div className="card-content table-responsive">
      {loading && <Loader />}
      <table className="table">
        <TableHeader headers={headers} />
        <tbody>
          {loading && <tr><td colSpan={headers.length + 1}>{LOADING_DATA}</td></tr>}
          {!loading && !objects.length && <tr><td colSpan={headers.length + 1}>{NO_DATA_FOUND}</td></tr>}
          {!loading && objects.map(obj => <tr key={obj.id}>
            {headers.map(header => <td key={header.name}>
              {header.render ? header.render(obj) : obj[header.name] || EMPTY_VALUE}
            </td>)}
            <td className="actions text-right">
              <Link to={`${listLinkHref}/${obj.id}/`} className="btn btn-xs btn-info">
                <i className="fa fa-edit"></i> edit
              </Link>
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
    <div className="card-footer">
      <Link to={`${listLinkHref}/add/`} className="btn btn-success">Add Another</Link>
    </div>
  </div>
);

const TableHeader = ({ headers }) => (
  <thead className="text-primary">
    <tr>
      {headers.map(header => <th key={header.name}>
        {header.label}
      </th>)}
      <th className="actions"></th>
    </tr>
  </thead>
);

Table.propTypes = {
  objects: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

TableHeader.propTypes = {
  headers: PropTypes.array.isRequired,
};

export default Table;
