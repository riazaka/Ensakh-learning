import { useState } from "react";
import { useEffect } from "react";
import CoursList from "./CoursList";
const Cours = (props) => {
    const [cours,setCours]=useState(null);
    console.log(props.titreModule);
    useEffect(() => {
        fetch('http://localhost:8000/cours'+props.titreModule)
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data from that resouce');
                }
            return res.json();
            })
            .then(data=>{
                console.log(data);
                setCours(data);
            })
            .catch(err =>{
                console.log(err.message);
            })

    },[])
    return ( 
        <div className="home">
            <input type="text" placeholder="Rechercher tag"></input>
       {cours && <CoursList cours={cours}/> } {/*verifie la gauche en premier conditioannal rendering */}
        </div>
     );
}
 
export default Cours;