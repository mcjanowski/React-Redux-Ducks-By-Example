import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed"
          data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Redux by Example</a>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Logout</a></li>
        </ul>
        <form className="navbar-form navbar-right">
          <input type="text" className="form-control" placeholder="Search..." />
        </form>
      </div>
    </div>
  </nav>
);

const Sidebar = () => (
  <ul className="nav nav-sidebar">
    <li><Link activeClassName="active" to={'/products'}>Products</Link></li>
    <li><Link activeClassName="active" to={'/companies'}>Companies</Link></li>
    <li><Link activeClassName="active" to={'/orders'}>Orders</Link></li>
  </ul>
);

const BaseLayout = ({ children }) => (
  <div>
    <Navbar />
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 col-md-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default BaseLayout;
