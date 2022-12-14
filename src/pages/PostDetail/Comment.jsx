import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { getComments, createComment, deleteComment } from "../../services/commentServices";
import { send, x } from "../../assets";
import { UserContext } from "../../context/UserContext";

const Comment = () => {
  const { name, picture, userRole } = useContext(UserContext);
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();

  const [comments, setComments] = useState([]);
  const [commentChildren, setCommentChildren] = useState(null);

  const onSubmit = (data) => {
    createComment(data, id, setComments, name, picture);
    reset();
  };

  const handleUpdateComment = () => {
    const commentContainer = document.getElementById("commentContainer");
    setCommentChildren(commentContainer?.childNodes?.length - 1);
  };

  useEffect(() => {
    getComments(id, setComments);
  }, []);

  useEffect(() => {
    handleUpdateComment();
  }, [comments]);

  return (
    <div className="mt-4 rounded-2xl bg-gray px-4 pt-4 pb-0" id="commentContainer">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`mb-3 flex items-center gap-2 ${commentChildren > 0 ? "pb-0" : "pb-4"}`}
      >
        <input type="text" {...register("isi")} className="flex-1 rounded-lg px-2 py-1 font-roboto outline-none" />
        <button type="submit" className="mx-auto rounded-md bg-primary py-2 px-2 font-roboto font-bold">
          <img src={send} alt="send-comment" />
        </button>
      </form>
      {comments.map((item) => {
        const { id: comment_id, isi, post_id, name, picture } = item;
        return (
          <React.Fragment key={item.id}>
            {post_id == id ? (
              <div className="mt-[6.5px] flex items-start justify-between border-b-[1px] border-b-[#000]/[0.22] pb-2 last:border-b-0">
                <div className="flex items-center gap-2">
                  <img src={picture} alt="avatar" className="h-[30px] w-[30px] rounded-[50%]" />
                  <div>
                    <h3 className="font-roboto text-sm font-bold">{name}</h3>
                    <p className="font-roboto text-sm font-light">{isi}</p>
                  </div>
                </div>
                {userRole === "admin" ? (
                  <button onClick={() => deleteComment(id, comment_id, setComments)}>
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
