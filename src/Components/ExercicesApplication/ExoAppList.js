const ExoAppList = (props) => {

    const exoapp = props.exoapp
         return (
             <div className="exoapp-list">
                { exoapp.map((exoapp)=> (
                     <div className="exoapp-preview" key={exoapp.id}>
                         <h2>{exoapp.title}</h2>
                         <p>Volume horaire:<span style={{color:'orange'}}>{exoapp.volume}</span></p>
                         <p>Niveau de difficultée:</p>
                     </div>
                 ))}
             </div>
           );
 }
  
 export default ExoAppList;