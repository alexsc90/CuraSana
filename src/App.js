import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Home from './components/Home/Home';
import AuthState from './context/autenticacion/AuthState';

function App() {
  return (
    <>
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/registrarse" component={Signup} />
            <Route exact path="/iniciar" component={Login} />
          
          </Switch>
        </Router>
      </AuthState>
    </>
  );
}

export default App;
