import './styles/App.css';
import Registration from './pages/signup';
import Authentification from './pages/signin';
import Text from './pages/text';
import './styles/Menu.css'
import './styles/index.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SkillsPage from './pages/skills';


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
        <Route path="/skills">
          <SkillsPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
