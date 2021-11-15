import React, {useState, Fragment,useContext,useEffect} from 'react'
import  { FirebaseContext } from '../../Firebase'
import Logout from '../Logout'
import Navbar from '../NavBar'
import ExoApp from './ExoApp'
import {withRouter} from 'react-router-dom';
const Exoapp = props => {
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
                <Navbar titreModule={props.titreModule}/>
                <Logout></Logout>
                <ExoApp titreModule={props.titreModule}/>
                <div className="content">
 
</div>
            </div>
        </div>
    )
    
   
}

export default withRouter(Exoapp)