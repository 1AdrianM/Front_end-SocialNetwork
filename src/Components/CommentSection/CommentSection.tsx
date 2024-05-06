import './CommentSection.css'
const CommentSection = ({commentsNumber}) => {
  return (
    <>    <div className="comment--sect">See {commentsNumber} comments</div>
<div className="comment--sect-add">
    Add a comment
</div>
    </>
  )
}

export default CommentSection