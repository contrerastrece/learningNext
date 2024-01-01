import React from 'react'
import PostCard from '../components/PostCard'
const fecthPost=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/posts');
  const data=await res.json();
  await new Promise((resolve)=>setTimeout(resolve,5000))
  return data
}
const Posts = async() => {
  const data=await fecthPost();
  return (
    <div>
      {
        data.map(post=>(
          <PostCard data={post} key={post.id}/>
        ))
      }
    </div>
  )
}

export default Posts