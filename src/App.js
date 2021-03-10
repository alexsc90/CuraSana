import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Home from './components/layout/Home';

import AuthState from './context/autenticacion/AuthState';
import Contacto from './components/details/Contacto';

import RutaPrivada from './components/rutas/RutaPrivada'
import Orders from './components/orders/Orders';
import Profile from './components/user/Profile';

function App() {
  return (
    <>
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/registrarse" component={Signup} />
            <Route exact path="/iniciar" component={Login} />
            <RutaPrivada exact path='/pedido' component={Orders} /> 
            <RutaPrivada exact path='perfil' component={Profile} />
          </Switch>
        </Router>
      </AuthState>
    </>
  );
}

export default App;
