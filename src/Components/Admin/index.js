import React, {useState, Fragment,useContext,useEffect} from 'react'
import  { FirebaseContext } from '../../Firebase'

import Adm from './Admin'

const Adn = props => {
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
                <Adm/>
                <div className="content">
 
</div>
            </div>
        </div>
    )
    
   
}

export default Adn