import Post from "./Post";

const PostList = ({ posts, setPosts }) => {
  return (
    <div className="flex max-h-[75vh] flex-col gap-4 overflow-y-auto p-8">
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
