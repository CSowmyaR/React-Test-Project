import React,{useState,useEffect} from 'react'
import './App.css'
function Blogs(){
    const [blogs,setBlogs]= useState([]);
    const endpoint = "https://gql-technical-assignment.herokuapp.com/graphql";
    const blogsQuery =`
    query {
      retrievePageArticles(page:0) {
      id
      author
      createdAt
      score
      updatedAt
      title
      text
      type
      url
      }
      }
    `;
    useEffect(() =>{
      fetch (endpoint,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({query:blogsQuery})
      })
      .then(response => response.json())
      .then((data) => setBlogs(data.data.retrievePageArticles))
      
    },[]);

    return(
        <>
        {blogs.map((blog)=>
           <div className='blogs-card' key={blog.id}>
                <div className='blogs-content'>
                  <h2>Author: {blog.author}</h2>
                  <h3>Title: {blog.title}</h3>
                  <p>Text: {blog.text}</p>
                  <iframe src={blog.url}>Read more</iframe>
               </div>

            </div>
        )}
        </>
    );
}
export default Blogs;