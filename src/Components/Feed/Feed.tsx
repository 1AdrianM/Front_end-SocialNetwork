import StoryBoard from "../../Components/StoryBoard/StoryBoard"
import Post from "../Post/Post"
import {post} from '../../Array_post'
import './Feed.css'
import { useState } from "react";
import * as React from "react";

interface PostArray{
  id:number;
  img:string;
  text:string;
  postedBy: string;
  commentsNumber:number;
  }
const Feed = ():React.FC<PostArray> => {
  
 // const [postArray, setPostArray]= useState(post)
 
  return (
    <>
        <StoryBoard/>

        <div className="feed--board">
            <div className="post--board">
            {post.map((post)=>(
              <Post
              key={post.id}
              id= {post.id}  
              img= {post.img} 
              text= {post.text} 
              postedBy= {post.postedBy}
              commentsNumber={post.commentsNumber}

              />
            )
  ) }
            </div>
    </div>
    </>
  )
}

export default Feed