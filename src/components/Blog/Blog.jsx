import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  return (
    <div>
      <p> blog:{blog}</p>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
