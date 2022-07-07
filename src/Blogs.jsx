import React,{useState,useEffect} from 'react'
import './App.css'
function Blogs(){
    const [blogs,setBlogs]= useState([]);
    const [page,setPage]=useState(0);
    const endpoint = "https://gql-technical-assignment.herokuapp.com/graphql";
    const blogsQuery =`
    query {
      retrievePageArticles(page:${page}) {
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

    useEffect(()=>{
        getBlogs();
    },[page]);

    function getBlogs(){
        fetch (endpoint,{
                 method:"POST",
                 headers:{"Content-Type":"application/json"},
                body:JSON.stringify({query:blogsQuery})
              })
              .then(response => response.json())
              .then((data) => setBlogs(data.data.retrievePageArticles))
    }


    function loadBlogs(){
        var isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight; 
        if (isAtBottom) { 
            setPage(page+1);
          } 
        } 
        window.addEventListener("scroll", loadBlogs);
    return(
        <>
           {blogs.map((blog)=>
           <div className='blogs-card' key={blog.id}>
                <div className='blogs-content'>
                  <h2>Author: {blog.author}</h2>
                  <h3>Title: {blog.title}</h3>
                  <p>Text: {blog.text}</p>
                  <a href={blog.url}>Read more</a>
               </div>

            </div>
       
           )}
        </>
    );
}
export default Blogs;