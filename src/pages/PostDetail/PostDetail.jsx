import { Link, useParams } from "react-router-dom";

import { tripleDots, x, share, love, comment, avatar, leftArrow } from "../../assets";

const PostDetail = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const { question, body } = post || {};

  console.log(post);

  return (
    <section className="mx-auto px-8 pt-12 md:w-3/4 lg:w-1/2">
      <Link to="/home">
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
            <button>
              <img src={x} alt="close" className="h-[16px] w-[16px]" />
            </button>
          </div>
        </div>
        {/* Content */}
        <div className="my-5 flex flex-col gap-4">
          <h2 className="font-roboto text-sm font-semibold">Pertanyaan</h2>
          <p className="whitespace-pre-line font-roboto text-sm">{question}</p>
          <h2 className="font-roboto text-sm font-semibold">Jawaban</h2>
          <p className="whitespace-pre-line font-roboto text-sm">{body}</p>
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
              <img src={share} alt="share" className="h-[16px] w-[16px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetail;
