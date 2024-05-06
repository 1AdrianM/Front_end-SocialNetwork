import Feed from "../../Components/Feed/Feed"
import NavBar from "../../Components/NavBar/NavBar"
import SideBar from "../../Components/SideBar/SideBar"
import './DashBoard.css' 

const DashBoard = ():JSX.Element => {
  return (
    <div className="dash--styles">
        <NavBar/>
            <Feed/>
           <SideBar/>
    </div>
  )
}

export default DashBoard