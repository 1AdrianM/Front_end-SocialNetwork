import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faSearch,faCompass, faPaperPlane, faBell, faFileCirclePlus, faBars, faVideo} from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'
const NavBar = (): JSX.Element => {


    
  return (
    <div className="navbar--dash">
          <div className="main-svg">Social Network</div>
<div className="navbar--elements">
    <div className="">< FontAwesomeIcon icon={faHome}/> Inicio</div>
    <div className="">< FontAwesomeIcon icon={faSearch}/> Buscar</div>
    <div className="">< FontAwesomeIcon icon={faCompass}/> Explorar</div>
    <div className="">< FontAwesomeIcon icon={faVideo}/> Reels</div>
    <div className="">< FontAwesomeIcon icon={faPaperPlane}/> Messages</div>
    <div className="">< FontAwesomeIcon icon={faBell}/> Notifications</div>
    <div className="">< FontAwesomeIcon icon={faFileCirclePlus}/> Create</div>
    <div className="">Profile</div>
    <div className="btm--div">< FontAwesomeIcon icon={faBars}/> Mas</div>
</div>
   
    </div>
  )
}

export default NavBar