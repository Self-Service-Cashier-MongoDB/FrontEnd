import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Product from './pages/product';
import Admin from './pages/admin';
import FormUser from './pages/form';
import Login from './pages/admin-login';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route exact path="/product" render={(props) => <Product {...props} />}>
        </Route>
        <Route exact path="/admin-login" render={(props) => <Login {...props} />}>
        </Route>
        <Route exact path="/" render={(props) => <FormUser {...props} />}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;