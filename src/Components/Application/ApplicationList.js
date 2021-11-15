const ApplicationList = (props) => {
    const app = props.app
    return (
        <div className="application-list">
           { app.map((app)=> (
                <div className="application-preview" key={app.id}>
                    <h2>{app.title}</h2>
                    <p>Volume horaire:<span style={{color:'orange'}}>{app.volume}</span></p>
                    <p>Niveau de difficultée:</p>
                </div>
            ))}
        </div>
      );
}
 
export default ApplicationList;