import './styles/App.css';
import Registration from './pages/signup';
import Authentification from './pages/signin';
import Text from './pages/text';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
            <Authentification />
        </Route>
        <Route path="/signup">
            <Registration />
        </Route>
        <Route path="/text">
            <Text />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
