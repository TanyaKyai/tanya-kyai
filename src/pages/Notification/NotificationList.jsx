import { useEffect, useState } from "react";
import Notification from "./Notification";
import { getQuestions } from "../../services/questionServices";

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getQuestions(setNotifications);
  }, []);

  return (
    <section className="mx-auto w-full px-2 md:w-1/2">
      <h1 className=" pt-6 pb-12 text-center font-roboto text-xl font-bold">
        Pemberitahuan
      </h1>

      <Notification />
    </section>
  );
};

export default NotificationList;
