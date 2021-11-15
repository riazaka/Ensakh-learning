import { useEffect } from "react";
import { useState } from "react";
import ExoList from "./ExoList";

const Exer = (props) => {console.log(props)
    const [exo,setExo]= useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/exo'+props.titreModule)
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data from that resouce');
                }
            return res.json();
            })
            .then(data=>{
                console.log(data);
                setExo(data);
            })
            .catch(err =>{
                console.log(err.message);
            })

    },[])
    return ( 
        <div className="exo">
            <input type="text" placeholder="Rechercher tag"></input>
       {exo && <ExoList exo={exo}/> } {/*verifie la gauche en premier conditioannal rendering */}
        </div>
     );
}
 
export default Exer;