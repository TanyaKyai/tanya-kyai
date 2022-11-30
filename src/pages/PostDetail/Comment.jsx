import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { getComments, createComment } from "../../services/commentServices";
import { send, x } from "../../assets";
import { userRole } from "../../services/auth";

const Comment = () => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();

  const user = JSON.parse(localStorage.getItem("userCredential"));
  const { name, picture } = user || {};

  const [comments, setComments] = useState([]);

  const onSubmit = (data) => {
    createComment(data, id, comments, setComments, name, picture);
    reset();
  };

  useEffect(() => {
    getComments(setComments);
  }, []);

  const commentContainer = document.getElementById("commentContainer");
  const commentChildren = commentContainer?.childNodes?.length - 1;

  return (
    <div className="mt-4 rounded-2xl bg-gray px-5 pt-4 pb-0" id="commentContainer">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`mb-3 flex items-center gap-2 ${commentChildren > 0 ? "pb-0" : "pb-4"}`}
      >
        <input type="text" {...register("comment")} className="flex-1 rounded-lg px-2 py-1 font-roboto outline-none" />
        <button type="submit" className="mx-auto rounded-md bg-primary py-2 px-2 font-roboto font-bold">
          <img src={send} alt="send-comment" />
        </button>
      </form>
      {comments.map((item) => {
        const { comment, postId, name, picture } = item;
        return (
          <React.Fragment key={item.id}>
            {postId === id ? (
              <div className="mt-[6.5px] flex items-start justify-between border-b-[1px] border-b-[#000]/[0.22] pb-2 last:border-b-0">
                <div className="flex items-center gap-2">
                  <img src={picture} alt="avatar" className="h-[30px] w-[30px] rounded-[50%]" />
                  <div>
                    <h3 className="font-roboto text-sm font-bold">{name}</h3>
                    <p className="font-roboto text-sm font-light">{comment}</p>
                  </div>
                </div>
                {userRole() === "admin" ? (
                  <button onClick={""}>
                    <img src={x} alt="close" className="h-[16px] w-[16px]" />
                  </button>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Comment;