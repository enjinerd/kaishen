import { Redirect, Route } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function PrivateRoute({ component: Component, ...rest }) {
  const auth_token = useSelector(state => state.spotify.auth_token);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth_token.length > 0 ? <Component {...props} /> : <Redirect to={'/'} />
      }
    />
  );
}
