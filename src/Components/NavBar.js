import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import Onglets from './onglets/Onglets';

const modulesUrls={
  UML:"http://localhost:8001",
  JAVA:"http://localhost:8001"

}

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  
  
  const showSidebar = () => setSidebar(!sidebar);
  
  const [titre,setTitre]=useState('Ensakh learning');
  const clickHandler = (titreModule) => {
    
     /* props.titreModuleSetter(titreModule);*/
    
  }
  

  return (
    <>
    
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar' style={{height:100, paddingTop:20}}>
        <h1>{titre}</h1><br></br>
          <i class="far fa-copyright"></i>
          <div className="links">
             {/*<a href="/welcome">cours</a>
              <a href="/exoapp">exercices d'application</a>
              <a href="/exo">exercices</a>
              <a href="/app">application</a>*/}
              <Onglets titreModule={props.titreModule} ></Onglets>
              
          </div>
          <Link   to='#' className='menu-bars'>
            <FaIcons.FaBars className="bars"  onClick={showSidebar} />
          </Link>
        </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            
          <ul  className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
  
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <button onClick = {() => {clickHandler(item.title)}}
                key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span style={{color:'black'}}>{item.title}</span>
                  </Link>
                </button>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;