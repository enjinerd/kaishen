import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { CreatePlaylistPage, HomePage, NotFoundPage } from '../pages';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <PrivateRoute path="/create-playlist" component={CreatePlaylistPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
