import { download, fatwaLogo, xWhite } from "../../assets";
import { deleteFatwa } from "../../services/fatwaServices";

const Fatwa = ({ fatwa, setFatwas }) => {
  const { id, judul, tema } = fatwa;

  const baseURL = "https://kyai-backend.tanyakyai-dev.194.233.73.19.sslip.io";

  const handleDownload = () => {
    location.href = baseURL + `/file-download/${id}`;
  };

  return (
    <div className="relative mt-4 rounded-2xl bg-gradient-to-r from-primary to-secondary font-roboto text-white">
      <div className="flex w-full items-start gap-7 py-5 px-4">
        <img src={fatwaLogo} alt="fatwa-logo" className="h-[56px] w-[56px] object-contain" />
        <div>
          <h2 className="text-sm font-bold">{judul}</h2>
          <p className="text-xs">Tema: {tema}</p>
          <button className="mt-4">
            <img src={download} alt="download" onClick={() => handleDownload()} />
          </button>
        </div>
        <button onClick={() => deleteFatwa(id, setFatwas)} className="absolute right-[5%]">
          <img src={xWhite} alt="close" className="h-[16px] w-[16px]" />
        </button>
      </div>
    </div>
  );
};

export default Fatwa;
