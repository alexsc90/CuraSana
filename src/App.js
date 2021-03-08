import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Home from './components/Home';
import AlertaState from './context/alertas/AlertaState';
import AuthState from './context/autenticacion/AuthState';

function App() {
  return (
    <>
    <AlertaState>
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/registrarse" component={Signup} />
            <Route exact path="/iniciar" component={Login} />
          
          </Switch>
        </Router>
      </AuthState>
    </AlertaState>
    </>
  );
}

export default App;
