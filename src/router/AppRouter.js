import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/basic/Home';
import Header from '../components/basic/Header';
import AdminPage from '../components/auth/AdminPage';
import NotFound from '../components/404';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import CreateReport from '../components/reports/CreateReport';
import EditReport from '../components/reports/EditReport';
import GetAllReports from '../components/reports/GetAllReports';
import Footer from '../components/basic/Footer';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/sign_in" component={Login} />
      <Route path="/sign_up" component={Register} />
      <Route path="/create_report" component={CreateReport} />
      <Route path="/report/:id" component={EditReport} />
      <Route path="/reports" component={GetAllReports} />
      <Route path="/admin_dashboard" component={AdminPage} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
