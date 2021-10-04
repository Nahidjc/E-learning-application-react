import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="*" >
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
