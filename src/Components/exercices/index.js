import React, {useState, Fragment,useContext,useEffect} from 'react'
import  { FirebaseContext } from '../../Firebase'
import {withRouter} from 'react-router-dom';
import Logout from '../Logout'
import Navbar from '../NavBar'
import Exer from './Exo'
const Exo = props => {
    const firebase=useContext(FirebaseContext)
    const [userSession,setUserSession]=useState(null);
    const [titreModule,setTitreModule]= useState()
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
                <Exer titreModule={props.titreModule}/>
                <div className="content">
 
</div>
            </div>
        </div>
    )
    
   
}

export default withRouter(Exo)