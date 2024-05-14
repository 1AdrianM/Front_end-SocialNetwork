import * as React from 'react';
import './CommentSection.css'
interface Props{
  commentsNumber:number;
}
const CommentSection: React.FC<Props> = ({commentsNumber}) => {
  return (
    <>    <div className="comment--sect">See {commentsNumber} comments</div>
<div className="comment--sect-add">
    Add a comment
</div>
    </>
  )
}

export default CommentSection