const Tab = ({ active, onClick, item }) => {
  return (
    <div
      className={`flex flex-1 rounded-2xl ${
        active === item ? "bg-grayActive" : "bg-gray"
      } cursor-pointer items-center justify-center py-2 text-center font-roboto text-[10px] font-bold leading-[11.72px] text-primary`}
      onClick={() => onClick(item)}
    >
      {item}
    </div>
  );
};

export default Tab;
