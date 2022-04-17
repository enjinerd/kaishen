import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Component } from 'react';
import { RootState } from '../redux/store';

``;

export default function PrivateRoute({ ...rest }) {
  const access_token = useSelector((state: RootState) => state.spotify.access_token);
  return (
    <Route
      {...rest}
      render={(props) =>
        access_token.length > 0 ? <Component {...props} /> : <Redirect to={'/'} />
      }
    />
  );
}
