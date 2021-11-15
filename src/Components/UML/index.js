import React, {useState, Fragment,useContext,useEffect} from 'react'
import  { FirebaseContext } from '../../Firebase'
import Logout from '../Logout'
import Liste from '../Liste'
import Navbar from '../NavBar'
import CoursList from '../cours/CoursList'
import Cours from '../cours/Cours'
import Exer from '../exercices/Exo'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Exo from '../exercices'
import Exoapp from '../ExercicesApplication'
import Appli from '../Application'


const Uml = (props) => {
    const [moduleUrl, setModuleUrl] = useState('http://localhost:8000')
    const [titreModule,setTitreModule]= useState()
    const firebase=useContext(FirebaseContext)
    const [userSession,setUserSession]=useState(null);
    useEffect(() => {
        let listner=firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/');})



        return () => {
            listner()
        }
    }, [])

   return userSession=== null ? (
    <Fragment>
    <div className="loader"></div>
    <p>loading...</p>
    </Fragment>
    ):(
        <div className="Home">
            <div className="container">
                <Navbar titreModule={"uml"}/>
                <Logout></Logout>
                <Cours moduleUrl={moduleUrl} titreModule={"uml"}></Cours>

                <Switch>
                    
                <Route path="/exouml" ><Exo titreModule={"uml"}></Exo></Route>
      <Route path="/exoappuml" ><Exoapp titreModule={"uml"}></Exoapp></Route>
      <Route path="/appuml" ><Appli titreModule={"uml"}></Appli></Route>
    
      </Switch>
                <div className="content">
 
</div>
            </div>
        </div>
    )
    
   
}

export default Uml