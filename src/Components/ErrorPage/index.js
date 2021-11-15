import React from 'react'
import ensakh from "../../images/ensak.png"

const centerH2 ={
    textAlign: 'center',
    marginTop:'50px',

}
const centerImg = {
    display: "block",
    margin: "40px auto"
}
const centerA = {
    textAlign: 'center',
    marginLeft:'200px',
    color:"black"
}

const ErrorPage = () => {
    return (
        <div >
            <div className="container">
            <h2 style={centerH2}>Cette page n’est malheureusement pas disponible.</h2>
            <a style={centerA} href="/"> revenir a la page d'acceuil</a>
            <img style={centerImg}  src={ensakh} alt="error page"></img>
            </div>
        </div>
    )
}

export default ErrorPage
