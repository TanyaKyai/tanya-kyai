import Post from "./Post";

const PostList = ({ posts, setPosts }) => {
  return (
    <div className="mt-4 flex max-h-[75vh] flex-col gap-4 overflow-y-auto">
      {posts?.length ? (
        posts
          ?.slice(0)
          .reverse()
          .map((post) => <Post key={post.id} post={post} posts={posts} setPosts={setPosts} />)
      ) : (
        <p>Belum ada kiriman untuk ditampilkan</p>
      )}
    </div>
  );
};

export default PostList;
