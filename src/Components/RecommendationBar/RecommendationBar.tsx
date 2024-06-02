import './RecommendationBar.css'
import { useState } from 'react';
interface BarProps{
  username:string;
  img:string;
  followed: boolean
}
const RecommendationBar: React.FC<BarProps> = ({username, img, followed}) => {
  const [isFollowing, SetFollowing] = useState(followed)
const handleSuggest=()=>{

  SetFollowing(!isFollowing)
  }
  return (
    <>
<div className='recommended-container'>
   
<div className="recomended--user" >
<img src={img} alt="Profile Picture" />

    

    <span className='recommended--username'>{username}
    <span className='behind-info'>Sugerencias Para ti</span>
    </span>
    
<span className={isFollowing?'btn-followed':'btn-no-followed'}
onClick={handleSuggest}
>
{isFollowing?"Seguido":"Seguir"}
</span>

</div>
</div>
</>
  )
}


export default RecommendationBar