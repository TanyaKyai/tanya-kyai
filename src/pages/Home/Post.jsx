import { Link } from "react-router-dom";

import { tripleDots, x, share, love, comment, avatar } from "../../assets";
import { userRole } from "../../services/auth";
import { deletePost } from "../../services/postServices";

const Post = ({ post, posts, setPosts }) => {
  const { id, question, body } = post;

  return (
    <div className="rounded-2xl bg-gray px-5 py-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={avatar} alt="avatar" />
          <h2 className="font-roboto text-xs font-bold text-primary">PWNU DIY</h2>
        </div>
        <div className="flex items-center gap-2">
          <button>
            <img src={tripleDots} alt="triple-dots" className="h-[20px] w-[20px]" />
          </button>
          {userRole() === "admin" ? (
            <button onClick={() => deletePost(id, posts, setPosts)}>
              <img src={x} alt="close" className="h-[16px] w-[16px]" />
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* Content */}
      <Link to={`/post/${id}`} className="cursor-pointer">
        <div className="my-5">
          {question?.length > 0 ? (
            <div className="mt-4">
              <p className="mt-4">{question?.length > 0 ? question : ""}</p>
              <h2 className="mt-4 font-roboto text-sm font-semibold">Jawaban</h2>
            </div>
          ) : (
            ""
          )}
          <p className={`${question?.length > 0 ? "mt-1" : "mt-4"} whitespace-pre-line font-roboto text-sm`}>
            {body.length <= 500 ? body : `${body.slice(0, 500)}... `}
            <span className="font-bold">{body.length <= 500 ? "" : "See more"}</span>
          </p>
        </div>
      </Link>
      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button>
            <img src={love} alt="like" className="h-[20px] w-[20px]" />
          </button>
          <button>
            <img src={comment} alt="comment" className="h-[16px] w-[16px]" />
          </button>
        </div>
        <div className="flex items-center">
          <button>
            <img src={share} alt="share" className="h-[16px] w-[16px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
