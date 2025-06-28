import React, { memo, useCallback, useEffect, useState } from 'react'

function Lists() {

    const [posts , setPosts ] = useState(null);

    async function getPosts(url) {
        const res = await fetch(url , {method:"GET"})
        const posts = await res.json()
        setPosts(val => [...posts]);
        return posts;
    }

   

    useEffect(()=> {
        const res = getPosts("https://jsonplaceholder.typicode.com/posts");
        console.log(res);
    } ,[])

  return (

    posts && <div className="post_container">
        {
            posts.map((val,ind,arr)=> {
                return <div key={ind} className="post">{val.title}</div>
            })
        }
    </div>
  )
}

export default Lists