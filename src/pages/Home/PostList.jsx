import Post from "./Post";

const PostList = ({ activeQuestion, posts, setPosts }) => {
  return (
    <div className="mt-4 flex max-h-[75vh] flex-col gap-4 overflow-y-auto md:px-5 ">
      {posts?.length ? (
        posts
          ?.slice(0)
          .reverse()
          .map((post) => (
            <Post
              key={post.id}
              post={post}
              posts={posts}
              setPosts={setPosts}
              activeQuestion={activeQuestion}
            />
          ))
      ) : (
        <p>Belum ada kiriman untuk ditampilkan</p>
      )}
    </div>
  );
};

export default PostList;
