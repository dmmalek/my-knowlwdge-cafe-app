import PropTypes from "prop-types";
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookMark, handleAddTime }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-full mb-8 rounded-md" src={cover} alt="" />
      <div className="flex justify-between items-center mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-4">
            <h4>{author}</h4>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex">
          <p>{reading_time} minutes read</p>
          <button onClick={() => handleAddToBookMark(blog)}>
            <IoBookmarkOutline />
          </button>
        </div>
      </div>
      <h2 className="text-4xl mb-2">{title}</h2>
      {hashtags.map((hash, idx) => (
        <span key={idx}>
          <a href=""> #{hash}</a>
        </span>
      ))}
      <br />
      <button onClick={() => handleAddTime(reading_time)}>Mark as read</button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMark: PropTypes.func.isRequired,
  handleAddTime: PropTypes.func.isRequired,
};
export default Blog;
