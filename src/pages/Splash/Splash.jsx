import { Link } from "react-router-dom";
import { logoPutih, tripleDiamonds } from "../../assets";

const Splash = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-4 bg-primary">
      <Link to="/login" className="absolute top-4 right-4 font-inter text-xs text-white">
        Lewati
      </Link>
      <div className="absolute top-36 flex flex-col items-center justify-center ">
        <img src={logoPutih} alt="logo" className="w-[180px]" />
      </div>
      <div className="absolute bottom-24 flex flex-col items-center justify-center gap-y-3">
        <img src={tripleDiamonds} alt="kutip" className="w-[15px]" />
        <p className="flex px-8 text-center font-inter text-[11px] text-white md:w-3/4 md:text-sm lg:w-1/2">
          Aplikasi (Al-Bahtsu) merupakan aplikasi di bawah naungan Lembaga Bahtsul Masail (LBM) PWNU DIY sebagai respon
          atas perkembangan laju era digital yang semakin cepat dan berkembang. Tujuan dari aplikasi ini adalah
          membangun komunikasi yang intens dan berkelanjutan atas permasalahan keagamaan, muamalat, dan keluarga yang
          terjadi di lingkup masyarakat secara luas dan nahdiyyin pada khususnya
        </p>
      </div>
      <footer className="absolute bottom-4 font-inter text-xs text-white md:text-sm">
        Powered by <span className="font-bold">LBM PWNU DIY</span>
      </footer>
    </section>
  );
};

export default Splash;
