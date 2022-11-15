import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { getComments, createComment } from "../../services/commentServices";
import { send } from "../../assets";

const Comment = () => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();

  const [comments, setComments] = useState([]);

  const onSubmit = (data) => {
    createComment(data, id, comments, setComments);
    reset();
  };

  useEffect(() => {
    getComments(setComments);
  }, []);

  return (
    <div className="mt-4 rounded-2xl bg-gray px-5 py-4">
      <form onSubmit={handleSubmit(onSubmit)} className="mb-3 flex items-center gap-2">
        <input type="text" {...register("comment")} className="flex-1 rounded-lg py-1 px-2 font-roboto outline-none" />
        <button type="submit" className="mx-auto rounded-md bg-primary py-2 px-2 font-roboto font-bold">
          <img src={send} alt="send-comment" />
        </button>
      </form>
      {comments.map((item) => {
        const { comment, postId } = item;
        return (
          <>
            {postId === id ? (
              <div
                key={item.id}
                className="mt-[6.5px] flex items-center gap-2 border-b-[1px] border-b-[#000]/[0.22] pb-2 last:border-b-0 last:pb-0"
              >
                <img src="https://via.placeholder.com/150" alt="avatar" className="h-[30px] w-[30px] rounded-[50%]" />
                <div>
                  <h3 className="font-roboto text-sm font-bold">Nama</h3>
                  <p className="font-roboto text-sm font-light">{comment}</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default Comment;
