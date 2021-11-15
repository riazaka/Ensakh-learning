
const CoursList = (props) => {
    const cours = props.cours
    return (
        <div className="cours-list">
           { cours.map((cour)=> (
                <div className="cour-preview" key={cour.id}>
                    <h2 href="/editor">{cour.title}</h2>
                    <p>Volume horaire:<span style={{color:'orange'}}>{cour.volume}</span></p>
                    <p>Niveau de difficultée:{cour.difficulté}</p>
                </div>
            ))}
        </div>
      );
}
 
export default CoursList;