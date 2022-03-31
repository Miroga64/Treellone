import Registration from './pages/signup';
import Authentification from './pages/signin';
import TextPage from './pages/text';
import SkillsPage from './pages/skills';
import MusicPage from './pages/music';

import './styles/App.css';
import './styles/Menu.css'
import './styles/slick.css'
import './styles/slick-theme.css'
import './styles/index.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
            <Authentification />
        </Route>
        <Route path="/signup" component={Registration}/>
        <Route path="/text">
            <TextPage />
        </Route>
        <Route path="/skills">
          <SkillsPage/>
        </Route>
        <Route path="/music">
          <MusicPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
