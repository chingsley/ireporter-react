import propTypes from 'prop-types';
import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';
import { connect } from 'react-redux';
import Home from '../components/HomePage';
import Header from '../components/Header';
import AdminPage from '../components/AdminPage';
import NotFound from '../components/404';
import Loader from '../components/Loader';
import LoginPage from '../components/PageLogin';
import Register from '../components/PageSignup';
import PageViewAllReports from '../components/PageViewAllReports';
import EditReportPage from '../components/PageEditReport';
import CreateReportPage from '../components/PageCreateReport';
import Footer from '../components/Footer';

const AppRouter = (props) => {
  const { loading } = props;
  return (
    <BrowserRouter>
      {loading && <Loader />}
      <Header />
      <ToastContainer transition={Flip} autoClose={2000} />
      <Switch>
        <Route path="/create_report" component={CreateReportPage} />
        <Route path="/report/:id" component={EditReportPage} />
        <Route path="/reports" component={PageViewAllReports} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={Register} />
        <Route path="/admin_dashboard" component={AdminPage} />
        <Route path="/" component={Home} exact />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};


const mapStateToProps = state => ({
  loading: state.fetchStatus.fetching,
  // isLoggedIn: state.auth.isLoggedIn,
});

AppRouter.propTypes = {
  loading: propTypes.bool.isRequired,
  // isLoggedIn: propTypes.bool.isRequired,
};

export default connect(mapStateToProps)(AppRouter);
