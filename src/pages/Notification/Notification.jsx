import { TbBook } from "react-icons/tb";
import { format } from "date-fns";

const Notification = ({ NotificationItem }) => {
  const datetime = format(new Date(), "dd MMM yyyy p");

  return (
    <div>
      <div className="flex items-center justify-center pb-4">
        <TbBook size={37} />
        <div className="flex flex-col justify-center pl-2">
          <p className="  font-roboto text-[12px] font-bold">
            Rilis Dokumen Bahtsul Masail Bulan November 2022 {NotificationItem}
          </p>
          <span className="text-[9px]">{datetime}</span>
        </div>
      </div>
    </div>
  );
};

export default Notification;
