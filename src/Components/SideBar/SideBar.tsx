import RecommendationBar from '../RecommendationBar/RecommendationBar'
import { recommendedUser } from '../../../Array_recm'
import SideUser from '../SideUser/SideUser'
import './SideBar.css'
import * as React from 'react'
interface SideProps{

  img?:string;
  username?:string
  followed?:boolean
}
const SideBar:React.FC<SideProps> = () => {

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
            username={post.username}
            img={post.img}
            followed={post.followed}
                        />
        ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar