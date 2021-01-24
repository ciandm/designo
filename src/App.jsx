import Home from './components/pages/Home';
import WebDesign from './components/pages/WebDesign';
import ROUTES from './components/pages/routes/routes';
import ScrollToTop from './utils/ScrollToTop';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path={ROUTES.WEB_DESIGN}>
          <WebDesign />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
