import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../../Firebase';

const Login = (props) => {

    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (password.length > 5 && email !== '') {
            setBtn(true)
        } else if (btn) {
            setBtn(false)
        }
    }, [password, email, btn])

    const handleSubmit = e => {
        e.preventDefault();

        firebase.loginUser(email, password)
        .then(user => {
            setEmail('');
            setPassword('');
            const s =document.getElementById('email').value;
            if (s==="admin@gmail.com"){props.history.push('/admin')}
            else {props.history.push('/welcome');}
          
          
        })
        .catch(error => {
            setError(error);
            setEmail('');
            setPassword('');
        })
        
    }

    return (<div>
        <header style={{backgroundColor:"#85aec0"}}  className="header">
        <div className="banner-container">
           <h1 style={{backgroundColor:"#85aec0"}} ><a href="/">ENSAKH LEARNING</a></h1> 
        </div>
        </header>
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftLogin">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">

                        {error !== '' && <span>{error.message}</span>}

                        <h2>Connexion</h2>
                        <form className="form" onSubmit={handleSubmit}>

                            <div  className="inputBox">
                                <input placeholder="Email" id='email' onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="on" required />
                                <label className="label-email" htmlFor="email"></label>
                            </div>

                            <div   className="inputBox">
                                <input placeholder="Mot de passe" onChange={e => setPassword(e.target.value)} value={password} type="password" autoComplete="off" required />
                                <label  htmlFor="password"></label>
                            </div>

                            {btn ? <button className="ss"  style={{transform: "translate(64px,0)",width:"100%"}}  >Connexion</button> : <button className="ss" style={{transform: "translate(64px,0)",width:"100%"}} disabled >Connexion</button> }

                        </form>
                        <div className="linkContainer">
                            <Link style={{color:"#565867"}} className="simpleLink" to="/signup" >Nouveau sur Ensak Learn ? Inscrivez-vous maintenant.</Link>
                            <br />
                            <Link style={{color:"#565867"}} className="simpleLink" to="/forgetpassword" >Mot de passe oublié? Récupérez-le ici.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login