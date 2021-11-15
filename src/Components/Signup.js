import React , {useState,useContext} from "react";
import  { FirebaseContext } from "../Firebase";
import {Link} from 'react-router-dom'

const Signup = (props) => {
    const firebase = useContext(FirebaseContext);
    const data={
        pseudo:'',
        email:'',
        password:'',
        confirmPassword:''
    }

    const[loginData,setLoginData]=useState(data);
    const [error,setError]=useState('')


    const handleChange= e =>{
        setLoginData({...loginData, [e.target.id]:e.target.value})
    }
    const handleSubmit =e=>{
        e.preventDefault();
        const {email,password}= loginData;
        firebase.signupUser(email,password)
        .then(user=>{
            setLoginData({...data}); 
            props.history.push('/welcome');

        })
        .catch(error=>{
            setError(error);
            setLoginData({...data});
        })
    }
    const {pseudo,email,password,confirmPassword}= loginData;
   const btn= pseudo===''||email===''||password===''||password!==confirmPassword
    ?<button className="ss" disabled>Inscription</button> : <button className="ss">Inscription</button>



    //gestion des erreurs
    const errorMsg=error !=='' && <span>{error.message}</span>

    return ( 
        <div>
        <header style={{backgroundColor:"#85aec0"}}  className="header">
        <div className="banner-container">
           <h1 style={{backgroundColor:"#85aec0"}} ><a href="/">ENSAKH LEARNING</a></h1> 
        </div>
        </header>
        <div className="signUpLoginBox">
            <div className="slContainer">
             <div className="formBoxLeftSignup">

             </div>
             <div className="formBoxRight">
                 <div className="formContent">
                     {errorMsg}
                 <h2>Inscription</h2>
                     <form onSubmit={handleSubmit}>
                         <div className="inputBox">
                            <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required/>
                            <label htmlFor="pseudo">Pseudo</label>
                         </div>
                         <div className="inputBox">
                            <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required/>
                            <label htmlFor="email">Email</label>
                         </div>
                         <div className="inputBox">
                            <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required/>
                            <label htmlFor="password">Password</label>
                         </div>
                         <div className="inputBox">
                            <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required/>
                            <label htmlFor="password">Confirm Password</label>
                         </div>
                         {btn}
                     </form>
                <div className="linkContainer">
                <Link className="simpleLink" to="/login">Déjà inscrit? Connectez-vous.</Link>
                </div>
                 </div>
             </div>

            </div>
        </div>
        </div>
     );
}
 
export default Signup;
/*
import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../Firebase'

const Signup = (props) => {

    const firebase = useContext(FirebaseContext);

    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('')

    const handleChange = e => {
        setLoginData({...loginData, [e.target.id]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { email, password, pseudo } = loginData;
        firebase.signupUser(email, password)
        .then( authUser => {
            return firebase.user(authUser.user.uid).set({
                pseudo,
                email
            })
        })
        .then(() => {
            setLoginData({...data});
            props.history.push('/welcome');
        })
        .catch(error => {
            setError(error);
            setLoginData({...data});
        })
    }

    const { pseudo, email, password, confirmPassword } = loginData;

    const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword 
    ? <button disabled>Inscription</button> : <button>Inscription</button>

    // gestion erreurs
    const errorMsg = error !== '' && <span>{error.message}</span>;

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">

                    {errorMsg}

                    <h2>Inscription</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required />
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required />
                                <label htmlFor="password">Mot de passe</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required />
                                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                            </div>

                            {btn}
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup*/