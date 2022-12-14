import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer, Zoom } from "react-toastify";
import { useContext } from "react";

import { saveBefore, saveAfter, x, share, love, comment, avatar, leftArrow } from "../../assets";
import Comment from "./Comment";
import { deletePost } from "../../services/postServices";
import { UserContext } from "../../context/UserContext";

const PostDetail = ({ posts, setPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userRole } = useContext(UserContext);

  const post = posts.find((post) => post.id.toString() === id);
  const { tanya, isi } = post || {};

  return (
    <section className="mx-auto px-4 pb-12 pt-6 md:w-3/4 lg:w-1/2">
      <div className="relative flex items-center">
        <Link to="/home" className="inline-block">
          <img src={leftArrow} alt="left-arrow" />
          <h2 className="absolute left-[50%] top-[50%] mx-auto -translate-x-1/2 -translate-y-1/2 text-center font-roboto text-xl font-bold">
            Beranda
          </h2>
        </Link>
      </div>
      <div className="mt-12 rounded-2xl bg-gray px-5 py-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={avatar} alt="avatar" />
            <h2 className="font-roboto text-xs font-bold text-primary">PWNU DIY</h2>
          </div>
          <div className="flex items-center gap-2">
            <button>
              <img src={saveBefore} alt="save" className="h-[20px] w-[20px]" />
            </button>
            {userRole === "admin" ? (
              <button onClick={() => deletePost(id, setPosts, navigate)}>
                <img src={x} alt="close" className="h-[16px] w-[16px]" />
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* Content */}
        <div className="my-5 flex flex-col">
          <p className="whitespace-pre-line font-roboto text-sm">{tanya}</p>
          {tanya ? <h2 className="mt-4 font-roboto text-sm font-semibold">Jawaban</h2> : ""}
          <p className="mt-1 whitespace-pre-line font-roboto text-sm">{isi}</p>
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
                  navigator.clipboard.writeText(window.location.origin + `/post/${id}`);
                  toast("Tautan disalin", {
                    autoClose: 750,
                    position: toast.POSITION.BOTTOM_CENTER,
                    className: "mb-20 flex mx-auto w-1/2 rounded-xl",
                    hideProgressBar: true,
                    pauseOnHover: false,
                  });
                }}
              />
              <ToastContainer transition={Zoom} />
            </button>
          </div>
        </div>
      </div>
      <Comment />
    </section>
  );
};

export default PostDetail;
