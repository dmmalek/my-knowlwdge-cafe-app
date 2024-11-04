import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [redingTime, setReadingTime] = useState(0);
  // add bookmark
  const handleAddToBookMark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  };

  //Add tootal reading time
  const handleAddTime = (id, time) => {
    setReadingTime(redingTime + time);
    // remove bookmark
    const remainingReadingTime = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingReadingTime);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs
          handleAddToBookMark={handleAddToBookMark}
          handleAddTime={handleAddTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} redingTime={redingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
