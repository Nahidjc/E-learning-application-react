import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
