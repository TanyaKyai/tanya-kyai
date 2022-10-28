import { download, fatwaLogo } from "../../assets";

const Fatwa = ({ fatwa }) => {
  const { id, title, topic, link } = fatwa;

  return (
    <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary font-roboto text-white">
      <div className="flex w-full items-start gap-7 py-5 px-4">
        <img src={fatwaLogo} alt="fatwa-logo" className="h-[56px] w-[56px] object-contain" />
        <div>
          <h2 className="text-sm font-bold">{title}</h2>
          <p className="text-xs">Tema: {topic}</p>
          <button className="mt-4">
            <img src={download} alt="download" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fatwa;
