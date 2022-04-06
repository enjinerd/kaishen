import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { HomePage, NotFoundPage } from "../pages";

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
