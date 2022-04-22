import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CreatePlaylistPage, HomePage, NotFoundPage, LoginPage } from '../pages';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/create-playlist" component={CreatePlaylistPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
