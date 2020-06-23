import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header'
import WorkoutDashboard from '../components/WorkoutDashboard';
import CommentsPage from '../components/CommentsPage';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={WorkoutDashboard} exact={true} />
        <Route path="/suggestions" component={CommentsPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
