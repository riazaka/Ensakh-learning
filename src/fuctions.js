const modulesUrls={
    UML:"http://localhost:8001",
    JAVA:"http://localhost:8001"

}

export const fetchCours=(title)=>{
    const res=fetch(modulesUrls.title);
    return(res.cours);
}