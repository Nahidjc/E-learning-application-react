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
import FooterPage from './components/FooterPage/FooterPage';
import Contact from './components/Contact/Contact';
import AllCourses from './components/AllCourses/AllCourses';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/home" >
            <Home></Home>
          </Route>
          <Route path="/all-courses" >
            <AllCourses></AllCourses>
          </Route>
          <Route path="/contact" >
            <Contact></Contact>
          </Route>
          <Route path="*" >
            <NotFound></NotFound>
          </Route>
        </Switch>
        <FooterPage></FooterPage>
      </BrowserRouter>


    </div>
  );
}

export default App;
