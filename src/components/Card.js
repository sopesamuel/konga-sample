import React from 'react'
import Data from './Data'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Card.css'
export default function Card() {
  
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
        const loadPost = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/");
        setPosts(response.data);

        }
  
        // Call the function
        loadPost();
    }, []);

  return (
    <div>
       <div className='movie-grid' >
    {(posts.map((item) =>
    <div key={item.id}>
    <Data title={item.title} body={item.body}/>
    </div>
    ))}
    </div>
    </div>
    //   {(posts.map((item) => <h4>{item.title}</h4>))}
    //<img src='./src/components/pexels-trista-chen-723198.jpg' alt='' className='single-img'/>}
  )
}
