const ExoList = (props) => {
    const exoapp = props.exo
    return (
        <div className="exo-list">
           { exoapp.map((exo)=> (
                <div className="exo-preview" key={exo.id}>
                    <h2>{exo.title}</h2>
                    <p >Volume horaire:<span style={{color:'orange'}}>{exo.volume}</span></p>
                    <p>Niveau de difficultée:</p>
                </div>
            ))}
        </div>
      );
}
 
export default ExoList;