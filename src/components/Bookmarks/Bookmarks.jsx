import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="w-1/3 text-center bg-gray-300 mx-4 p-4 rounded-md">
      <h1>Spent time on read : min</h1>
      <h1 className="text-3xl">Bookmarks : {bookmarks.length}</h1>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};
export default Bookmarks;
