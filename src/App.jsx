import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
// pages
import Home from './components/pages/Home';
import WebDesign from './components/pages/WebDesign';
import GraphicDesign from './components/pages/GraphicDesign';
import AppDesign from './components/pages/AppDesign';
import About from './components/pages/About';
import Locations from './components/pages/Locations';
import Contact from './components/pages/Contact';

// utils
import ROUTES from './components/pages/routes/routes';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path={ROUTES.WEB_DESIGN}>
          <WebDesign />
        </Route>
        <Route path={ROUTES.WEB_DESIGN}>
          <WebDesign />
        </Route>
        <Route path={ROUTES.APP_DESIGN}>
          <AppDesign />
        </Route>
        <Route path={ROUTES.ABOUT}>
          <About />
        </Route>
        <Route path={ROUTES.LOCATIONS}>
          <Locations />
        </Route>
        <Route path={ROUTES.CONTACT}>
          <Contact />
        </Route>
        <Route path={ROUTES.GRAPHIC_DESIGN}>
          <GraphicDesign />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
