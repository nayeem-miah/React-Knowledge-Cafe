
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        
        <div className="md:w-1/3  bg-gray-300 ml-3 p-2">
            <div className='text-4xl text-center border-b-2'>
                <h3>Reading time : {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center border-b-2">Bookmarks Blogs  :{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) =><Bookmark key={idx}
                bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;