import { useEffect } from "react";
import { useState } from "react";
import ExoAppList from "./ExoAppList";
const ExoApp = (props) => {
    const [exoapp,setExoApp]= useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/exoapp'+props.titreModule)
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data from that resouce');
                }
            return res.json();
            })
            .then(data=>{
                console.log(data);
                setExoApp(data);
            })
            .catch(err =>{
                console.log(err.message);
            })

    },[])
    return ( 
        <div className="exoapp">
            <input type="text" placeholder="Rechercher tag"></input>
       {exoapp && <ExoAppList exoapp={exoapp}/> } {/*verifie la gauche en premier conditioannal rendering */}
        </div>
     );
}
 
export default ExoApp;