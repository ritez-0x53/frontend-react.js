import React from 'react'
import { useQuery } from "@tanstack/react-query";  
import Todo from './Todo';


function TodosContainer() {

    const { data ,isLoading , error  } = useQuery({
        queryKey : ["posts"],
        queryFn : async () => {
            const res = await fetch("https://jsonplceholder.typicode.com/posts" , {method:"GET"});
            const posts = await res.json()
            await delay(5);
            return posts;
        }
    })

    if(isLoading) { return <h1>Loading ...</h1> }
    if (error) { return <h1>{error.message}</h1> }

  return (
    <div className='todos_container' >
        <h1>POSTS LIST</h1>
        {data?.map((val,ind,arr)=> {
            return <Todo image={val.title} slug={val.body}  />
        })}
    </div>
  )
}

export default TodosContainer


function delay(t) {
    return new Promise((res,rej) => {
        setTimeout(()=> { res("ok") } , t*1000)
    })
}