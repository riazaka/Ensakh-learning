
import '../../App.css'
import Signup from '../Signup';
import NavBar from '../NavBar';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import ErrorPage from '../ErrorPage';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import ForgetPassword from '../ForgetPassword';
import Exer from '../exercices/Exo';
import Exo from '../exercices';
import Exoapp from '../ExercicesApplication';
import Appli from '../Application';
import Adn from '../Admin';
import Uml from '../UML';
import Editor from '../textEditor';
function App() { let history=useHistory();
  return (
    <Router>
     

    <Switch>
    <Route path="/editor"  component={Editor}/>
      {/*gestion des utils*/}
      <Route exact path="/" component={Landing}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/forgetpassword" component={ForgetPassword}/>
      {/*module UML*/}
      <Route path="/uml"><Welcome titreModule={"uml"}></Welcome></Route>
      <Route path="/exouml" ><Exo titreModule={"uml"}></Exo></Route>
      <Route path="/coursuml" ><Uml></Uml></Route>
      <Route path="/exoappuml" ><Exoapp titreModule={"uml"} ></Exoapp></Route>
      <Route path="/appuml" ><Appli titreModule={"uml"} ></Appli></Route>
      {/*module algorithmique*/}
      <Route path="/welcome"><Welcome titreModule={"algorithmique"}></Welcome></Route>
      <Route path="/exo" ><Exo titreModule={"algorithmique"}></Exo></Route>
      <Route path="/exoapp" ><Exoapp titreModule={"algorithmique"}></Exoapp></Route>
       <Route path="/app" ><Appli titreModule={"algorithmique"}></Appli></Route>
       {/*module RO*/}
      <Route path="/ro"><Welcome titreModule={"rechercheopp"}></Welcome></Route>
      <Route path="/exoro" ><Exo titreModule={"rechercheopp"}></Exo></Route>
      <Route path="/exoappro" ><Exoapp titreModule={"rechercheopp"}></Exoapp></Route>
       <Route path="/appro" ><Appli titreModule={"rechercheopp"}></Appli></Route>
       {/*admin*/}
      <Route path="/admin" component={Adn}/>
      {/*route par defaut*/ }
      <Route  component={ErrorPage}/>
     </Switch>
     
  


     <Footer></Footer>
     </Router>
  );
}

export default App;
