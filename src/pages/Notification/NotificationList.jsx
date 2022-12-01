import { useEffect, useState } from "react";
import Notification from "./Notification";
import { getQuestions } from "../../services/questionServices";
import { leftArrow } from "../../assets";
import { Link } from "react-router-dom";

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getQuestions(setNotifications);
  }, []);

  return (
    <section className="mx-auto w-full px-2 sm:w-[476px] ">
      <div className=" flex px-2 pt-6">
        <Link to="/home" className="inline-block pt-1 pl-3">
          <img src={leftArrow} alt="left-arrow" />
        </Link>
        <h1 className=" pl-5 pb-12  font-roboto text-xl font-bold">
          Notifikasi
        </h1>
      </div>
      <Notification />
    </section>
  );
};

export default NotificationList;
