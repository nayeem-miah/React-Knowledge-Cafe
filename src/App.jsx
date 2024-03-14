import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime , setReadingTime] = useState(0);

  const handlerAddToBookmarks= blog =>{
    const newBookmarks= [...bookmarks,blog];
    // console.log(newBookmarks);
    setBookmarks(newBookmarks);
  }

  const handelMarkAsRead =( id, time) =>{
    const newReadingTime = readingTime + time ;
    setReadingTime(newReadingTime);
    //  remove the read blog from the bookmarks 
    // console.log('remove bookmarks ', id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id );
    setBookmarks(remainingBookmarks);
  }

  return <>
  <Header>

  </Header>
  <div className="md:flex max-w-7xl mx-auto">
  <Blogs handlerAddToBookmarks={handlerAddToBookmarks}
  handelMarkAsRead={handelMarkAsRead}
  ></Blogs>
  <Bookmarks  bookmarks={bookmarks} readingTime={readingTime} >

  </Bookmarks>
  </div>
  </>;
}

export default App;
