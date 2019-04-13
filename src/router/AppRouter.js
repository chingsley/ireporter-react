import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import Home from '../components/HomePage';
import Header from '../components/Header';
import AdminPage from '../components/AdminPage';
import NotFound from '../components/404';
import Loader from '../components/Loader';
import LoginPage from '../components/LoginPage';
import Register from '../components/SignupPage';
import PageViewAllReports from '../components/PageViewAllReports';
import EditReportPage from '../components/PageEditReport';
import CreateReportPage from '../components/PageCreateReport';
import Footer from '../components/Footer';

const AppRouter = props => (
  <BrowserRouter>
    {props.loading && <Loader />}
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={Register} />
      <Route path="/create_report" component={CreateReportPage} />
      <Route path="/report/:id" component={EditReportPage} />
      <Route path="/reports" component={PageViewAllReports} />
      <Route path="/admin_dashboard" component={AdminPage} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

const mapStateToProps = state => ({
  loading: state.fetchStatus.fetching,
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(AppRouter);
