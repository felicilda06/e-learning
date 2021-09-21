import './index.css';
import Teacher from './pages/Teacher';
import Register from './pages/Register';
import Header from './components/Header';
import LoginForm from './pages/LoginForm';
import LandingPage from './pages/LandingPage';
import TrialAccount from './pages/TrialAccount';
import ForgotPassword from './pages/ForgotPassword';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
     <Router>
        <Header/>
        <Switch>
           <Route exact path={'/'} component={LandingPage}/>
           <Route path={'/trial-account'} component={TrialAccount}/>
           <Route path={'/login'} component={LoginForm}/>
           <Route path={'/sign-up'} component={Register}/>
           <Route path={'/sign-up-teacher'} component={Teacher}/>
           <Route path={'/forgot-password'} component={ForgotPassword}/>
        </Switch>
     </Router>
  );
}

export default App;
