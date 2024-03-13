import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
    return (
        <div>
            
        </div>
    );
};

export default Blogs;