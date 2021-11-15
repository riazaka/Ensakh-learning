import { useState } from "react";
import { useEffect } from "react";
import ApplicationList from "../Application/ApplicationList";

const Application = (props) => {
    const [app,setApp]= useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/app'+props.titreModule)
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data from that resouce');
                }
            return res.json();
            })
            .then(data=>{
                console.log(data);
                setApp(data);
            })
            .catch(err =>{
                console.log(err.message);
            })

    },[])
    return ( 
        <div className="exoapp">
            <input type="text" placeholder="Rechercher tag"></input>
       {app && <ApplicationList app={app}/> } {/*verifie la gauche en premier conditioannal rendering */}
        </div>
     );
}
 
export default Application;