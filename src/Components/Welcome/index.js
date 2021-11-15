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
import {withRouter} from 'react-router-dom';
import Uml from '../UML'


const Welcome = (props) => {
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
    },[])

   return userSession=== null ? (
    <Fragment>
    <div className="loader"></div>
    <p>loading...</p>
    </Fragment>
    ):(
        <div className="Home">
            <div className="container">
                <Navbar titreModule={props.titreModule}/>
                <Logout></Logout>
                <Cours titreModule={props.titreModule}/*moduleUrl={moduleUrl} titreModule={"algorithmique"}*/></Cours>

                {/*<Switch> 
                <Route path="/exo" ><Exo></Exo></Route>
                <Route path="/exoapp" ><Exoapp titreModule={titreModule}></Exoapp></Route>
                <Route path="/app" ><Appli titreModule={titreModule}></Appli></Route>
                 </Switch>*/}
                <div className="content">
 
</div>
            </div>
        </div>
    )
    
   
}

export default withRouter(Welcome)
