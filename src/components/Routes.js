import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './pages/Calculator';
import Home from './pages/Home';
import Quotes from './pages/Quote';

const Routes = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calc">
          <App />
        </Route>
        <Route path="/quotes">
          <Quotes />
        </Route>
      </Switch>
    </Router>
  </>
);

export default Routes;
