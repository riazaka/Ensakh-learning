import { useState } from "react";
import { useEffect } from "react";
import OngletsList from './OngletsList'
const Onglets = (props) => {
    const [onglets,setOnglets]=useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/onglets'+props.titreModule)
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data from that resouce');
                }
            return res.json();
            })
            .then(data=>{
                console.log(data);
                setOnglets(data);
            })
            .catch(err =>{
                console.log(err.message);
            })

    },[])
    return ( 
        <div className="home">
            
       {onglets && <OngletsList onglets={onglets}/> } {/*verifie la gauche en premier conditioannal rendering */}
        </div>
     );
}
 
export default Onglets;