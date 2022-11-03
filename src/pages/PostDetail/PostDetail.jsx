import { useParams } from "react-router-dom";

import { tripleDots, x, share, love, comment, avatar } from "../../assets";

const PostDetail = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const { title, body } = post;

  console.log(post);

  return (
    <section className="mx-auto px-8 md:w-3/4 lg:w-1/2">
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
        <div className="my-5">
          <h3 className="font-roboto text-lg">{title}</h3>
          <p className="mt-7 whitespace-pre-line font-roboto text-sm">{body}</p>
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
