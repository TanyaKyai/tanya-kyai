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
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2">
        <input type="text" {...register("comment")} className="flex-1 rounded-lg py-1 px-2 font-roboto outline-none" />
        <button type="submit" className="mx-auto rounded-md bg-primary py-2 px-2 font-roboto text-base font-bold">
          <img src={send} alt="send-comment" />
        </button>
      </form>
      {comments.map((item) => {
        const { comment, postId } = item;
        return <>{postId === id ? <p key={item.id}>{comment}</p> : ""}</>;
      })}
    </div>
  );
};

export default Comment;
