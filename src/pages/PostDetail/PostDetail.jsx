import { useParams } from "react-router-dom";

const PostDetail = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const { title, body } = post;

  console.log(post);

  return (
    <div>
      <h1>{title}</h1>
      <h2>{body}</h2>
    </div>
  );
};

export default PostDetail;
