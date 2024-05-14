import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane,faBookBookmark, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import CommentSection from '../CommentSection/CommentSection'
import { useState } from 'react'
interface PostProps{
  text: string;
  img:string;
  postedBy: string;
  commentsNumber: number;
}
const Post:React.FC<PostProps> = ({ img, text, postedBy, commentsNumber}) => {
  
  const[Red, setRed]= useState(false)
  const TurnRed =()=>{
setRed(!Red);
  }
  return (
    <>
<span className='user--posted'>
    {postedBy} <FontAwesomeIcon icon={faCheckCircle}/>
  </span>
    <div className="img--post">
               <img src={img}/>
    </div>
    <div className="btns-icons">

    <span className="btn--like">
         <FontAwesomeIcon 
           onClick={TurnRed}
      className={Red?"red":""   }
        icon={faHeart}/>
     </span>

     <span className="btn--comment">
     <FontAwesomeIcon icon={faComment}/>
</span>
<span className="btn--share">
<FontAwesomeIcon icon={faPaperPlane}/>

</span>
<span className='btn--bookmark'>
    <FontAwesomeIcon icon={faBookBookmark}/>
</span>
    </div>
  
            <div className="post--text">
                 <div className="postedBy">
                  {postedBy} <FontAwesomeIcon icon={faCheckCircle}/></div>{text} 
            </div>
       
        
       <div className="comment--section">
<CommentSection
commentsNumber={commentsNumber}

/>
       </div>
</>    
  )
}

export default Post