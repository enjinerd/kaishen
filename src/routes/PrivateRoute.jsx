import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ component: Component, ...rest }) {
  const access_token = useSelector((state) => state.spotify.access_token);
  return <Route {...rest} render={(props) => (access_token.length > 0 ? <Component {...props} /> : <Redirect to={'/'} />)} />;
}
