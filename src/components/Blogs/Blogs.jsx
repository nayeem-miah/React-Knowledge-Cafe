import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from '../Blog/Blog';

const Blogs = ({handlerAddToBookmarks,handelMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
    return (
        <div className="w-2/3">
            <h1 className="text-4xl ">Blogs : {blogs.length}</h1>
            {
                blogs.map(blog=><Blog 

                    key={blog.id}
                    handlerAddToBookmarks={handlerAddToBookmarks}
                    handelMarkAsRead={handelMarkAsRead}
                     blog={blog}
                     ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
   
    handlerAddToBookmarks: PropTypes.func.isRequired,
    handelMarkAsRead: PropTypes.func.isRequired,
}
export default Blogs;