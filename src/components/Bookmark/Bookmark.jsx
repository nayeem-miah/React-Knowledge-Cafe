import PropType from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    
    return (
        <div className='bg-slate-100 p-4 m-4 shadow rounded-xl'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropType.object.isRequired,
}

export default Bookmark;