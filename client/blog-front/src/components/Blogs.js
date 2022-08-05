import React,{useState, useEffect} from "react"
import "../components/styles/Blogs.css"

const Blogs =() =>{
    const [blogs, setblogs] = useState([])

    const getBlogInfo =()=>{
        fetch('http://localhost:3000')
        .then((response)=>{
            return response.json()
        }).then((response)=>{
            setblogs(response.posts)
        }).catch((err)=>{
            console.log(err)
        })
        
    }

    
 


    useEffect(()=>{
    
        
        
        getBlogInfo()

    },[]);



    

    

   /*form submission temporary, 
   need to figure out why component does not reload automatically when 
   updating posts with post method*/

    return(
        <div>
            
            
            {blogs.map((temp)=>
                <div className="blog-post" key={temp.title}>
                    <p>{temp.title}</p>
                    <p>{temp.blogPost}</p>
                    {temp.comments.map((comment)=>
                        <div key={comment.comment}>
                            <p>{comment.comment}</p>
                            <p>Posted on {comment.date}</p>
                    </div>)}
                </div>
            )}
        </div>
    )
}

export default Blogs