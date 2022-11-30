import { Link } from "react-router-dom";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { saveBefore, saveAfter, x, share, love, comment, avatar } from "../../assets";
import { userRole } from "../../services/auth";
import { deletePost } from "../../services/postServices";

const Post = ({ post, setPosts }) => {
  const { id, question, isi } = post;

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
            <img src={saveBefore} alt="save" className="h-[20px] w-[20px]" />
          </button>
          {userRole() === "admin" ? (
            <button onClick={() => deletePost(id, setPosts)}>
              <img src={x} alt="close" className="h-[16px] w-[16px]" />
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* Content */}
      <Link to={`/post/${id}`} id="Tes" className="cursor-pointer">
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
            {isi.length <= 500 ? isi : `${isi.slice(0, 500)}... `}
            <span className="font-bold">{isi.length <= 500 ? "" : "See more"}</span>
          </p>
        </div>
      </Link>
      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button>
            <img src={love} alt="like" className="h-[20px] w-[20px]" />
          </button>
          <Link to={`/post/${id}`} id="Tes" className="cursor-pointer">
            <img src={comment} alt="comment" className="h-[16px] w-[16px]" />
          </Link>
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
  );
};

export default Post;
