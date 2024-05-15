import './RecommendationBar.css'
interface BarProps{
  username:string;
  img:string;
}
const RecommendationBar: React.FC<BarProps> = ({username, img}) => {
  return (
    <>
<div className='recommended-container'>
   
<div className="recomended--user" >
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