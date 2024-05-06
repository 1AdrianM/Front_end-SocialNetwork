import RecommendationBar from '../RecommendationBar/RecommendationBar'
import { recommendedUser } from '../../../Array_recm'
import SideUser from '../SideUser/SideUser'
import './SideBar.css'
import * as React from 'react'
interface Props{
  id:number;
  img:string;
  username:string
}
const SideBar = (): React.FC<Props>=> {

  return (
    <div>
      <div className="side--bar">
        <SideUser/>
        <div className="recommendation-board">
        <div className="space"> 
    <span className='suggest-div'>Sugerencias Para ti</span>
    <span className='suggest-seeAll'>Ver todos</span>
    </div>
   
        {recommendedUser.map((post)=>(
              <RecommendationBar
              key={post.id}
              id={post.id}
              username={post.username}
              img={post.img}
              />
        ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar