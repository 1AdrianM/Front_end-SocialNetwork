import './RecommendationBar.css'

const RecommendationBar = ({username, img, id}) => {
  return (
    <>
<div className='recommended-container'>
   
<div className="recomended--user" key={id}>
<img src={img} alt="Profile Picture" />

    

    <span className='recommended--username'>{username}
    <span className='behind-info'>Sugerencias Para ti</span>
    </span>
    
<span className='btn-follow'>Seguir</span>
</div>
</div>
</>
  )
}


export default RecommendationBar