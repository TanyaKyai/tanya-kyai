import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

import { tripleDots, x, share, love, comment, avatar, leftArrow } from "../../assets";
import Comment from "./Comment";
import { deletePost } from "../../services/postServices";
import { userRole } from "../../services/auth";

const PostDetail = ({ posts, setPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((post) => post.id.toString() === id);
  const { question, body } = post || {};

  return (
    <section className="mx-auto px-8 pb-12 pt-6 md:w-3/4 lg:w-1/2">
      <Link to="/home" className="inline-block">
        <img src={leftArrow} alt="left-arrow" />
      </Link>
      <div className="mt-12 rounded-2xl bg-gray px-5 py-4">
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
              <button onClick={() => deletePost(id, posts, setPosts, navigate)}>
                <img src={x} alt="close" className="h-[16px] w-[16px]" />
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* Content */}
        <div className="my-5 flex flex-col">
          <p className="whitespace-pre-line font-roboto text-sm">{question}</p>
          <h2 className="mt-4 font-roboto text-sm font-semibold">Jawaban</h2>
          <p className="mt-1 whitespace-pre-line font-roboto text-sm">{body}</p>
        </div>
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
              <img
                src={share}
                alt="share"
                className="h-[16px] w-[16px]"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
              />
            </button>
          </div>
        </div>
      </div>
      <Comment />
    </section>
  );
};

export default PostDetail;
