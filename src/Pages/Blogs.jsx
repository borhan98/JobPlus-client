import NodeExpress from "../BlogsComponents/NodeExpress";
import Tokens from "../BlogsComponents/Tokens";

const Blogs = () => {
  return (
    <div className="container mx-auto px-2 lg:px-0 my-14 space-y-14">
      {/* About access and refresh token and where should store them */}
      <Tokens />
      {/* About express js and node js */}
      <NodeExpress />
    </div>
  );
};

export default Blogs;
