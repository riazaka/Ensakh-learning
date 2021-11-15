const OngletsList = (props) => {
    const onglets= props.onglets
    return (
        <div className="onglets-list">
           { onglets.map((onglet)=> (
                <div className="onglet-preview" key={onglet.id}>
                    <a href={onglet.path}>{onglet.title}</a>
  
                </div>
            ))}
        </div>
      );
}
 
export default OngletsList;