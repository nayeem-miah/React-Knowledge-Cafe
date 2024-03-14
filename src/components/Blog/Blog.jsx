
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


 
const Blog = ({blog, handlerAddToBookmarks, handelMarkAsRead}) => {
    const {id ,title,cover, author, img, time, posted_Date, hashtags} =blog;
    // console.log(blog);
    return (
        <div className='mb-20 space-y-4' >
            <img className='w-full border rounded mb-4' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                    
                    <img className='w-10 h-10 bg-gray-400 rounded-full mb-4' src={img}></img>
                    <div className='ml-6'>
                    <h2 className='text-2xl mb-4'>{author}</h2>
                    <p>{posted_Date}</p>

                    </div>
                </div>
                <div className='items-center'>
                <span>{time} min read</span>
                <button onClick={()=>handlerAddToBookmarks(blog)} className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-2xl'> {title}</h2>
            
            <p>
            {
                hashtags.map((hash,idx) => <span key={idx} className='ml-4'><a href="">#{hash}</a></span>)
                
            }
            </p>
            <button onClick={()=> handelMarkAsRead(id,time)} className='font-bold text-purple-800 underline'>Mark As Read </button>
        </div>
    );
};
Blog.propTypes ={
    blog :PropTypes.object.isRequired,
   
    handlerAddToBookmarks: PropTypes.func.isRequired,
    handelMarkAsRead : PropTypes.func.isRequired


}
export default Blog;