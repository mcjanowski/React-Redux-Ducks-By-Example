import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory, browserHistory } from 'react-router';
import { createHistory } from 'history';

// Layouts
import BaseLayout from './components/layouts/base-layout';
// Pages
import ProductListPage from './pages/product-list-page';
import ProductAddPage from './pages/product-add-page';
import CompanyListPage from './pages/company-list-page';


const history = useRouterHistory(createHistory)({
  basename: '',  // e.g. /administration or /dashboard
});

export default (
  <Router history={history}>
    <Route component={BaseLayout}>
      <Route path="/" component={ProductListPage} />
      <Route path="products">
        <IndexRoute component={ProductListPage} />
        <Route path="add" component={ProductAddPage} />
      </Route>
      <Route path="companies" component={CompanyListPage} />
    </Route>
  </Router>
);
