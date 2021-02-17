import { Route, Switch } from 'react-router';
import './App.css';
import Home from './components/footer/home';
import SignUp from './components/footer/signUp';

function App() {
  return (
    <div className="App">
    {/* <Home/>
    <SignUp/> */}
    <Switch>
      <Route exact path = '/' component = {Home}></Route>
      <Route exact path = '/signup' component = {SignUp}></Route>
    </Switch>
    </div>
  );
}

export default App;
