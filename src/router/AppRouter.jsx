import propTypes from 'prop-types';
import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';
import { connect } from 'react-redux';
import AdminPage from '../components/PageAdmin';
import CreateReportPage from '../components/PageCreateReport';
import EditReportPage from '../components/PageEditReport';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/PageHomePage';
import Loader from '../components/Loader';
import LoginPage from '../components/PageLogin';
import NotFound from '../components/404';
import PageViewAllReports from '../components/PageViewAllReports';
import Register from '../components/PageSignup';
import UserProfile from '../components/PageUserProfile';

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
        <Route path="/profile" component={UserProfile} />
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
