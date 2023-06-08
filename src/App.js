import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/headers/header';
import Register from './pages/register/register';
import Login from './pages/login/login';
import UserProfile from './pages/userProfile/userprofile';

function App() {
  const path=window.location.pathname.slice('1').charAt(0).toUpperCase()+window.location.pathname.slice('2')
  return (
    <BrowserRouter>
    <Header path={path}/>
      <Switch>
        <Route component={Register} path="/register"/>
        <Route component={Login} path="/login" />
        <Route path="/profile" component={UserProfile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
