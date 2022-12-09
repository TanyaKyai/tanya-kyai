import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { logoPutih, tripleDiamonds } from "../../assets";

const Splash = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-4 bg-primary">
      <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 6 }}>
        <Link
          to="/login"
          className="absolute top-4 right-4 font-inter text-xs text-white"
        >
          Lewati
        </Link>
      </motion.div>
      <motion.div
        className="absolute top-44 flex flex-col items-center justify-center"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 3 }}
      >
        <img src={logoPutih} alt="logo" className="w-[180px]" />
        <p className="pt-2 font-roboto text-[23px] font-bold text-white">
          Tanya Kyai
        </p>
      </motion.div>
      <motion.div
        className="absolute bottom-24 flex flex-col items-center justify-center gap-y-3"
        // animate={{ scale: [1, 0.9, 1] }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}
      >
        <img src={tripleDiamonds} alt="kutip" className="w-[15px]" />
        <p className="flex px-8 text-center font-inter text-[11px] text-white md:w-3/4 md:text-sm lg:w-1/2">
          Aplikasi (Al-Bahtsu) merupakan aplikasi yang bertujuan untuk membangun
          komunikasi yang intens dan berkelanjutan atas permasalahan keagamaan,
          muamalat, dan keluarga yang terjadi di lingkup masyarakat secara luas
          dan nahdiyyin pada khususnya.
        </p>
      </motion.div>
      <motion.footer
        className="absolute bottom-4 font-inter text-xs text-white md:text-sm"
        // animate={{ scale: [1, 0.9, 1] }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}
      >
        Powered by <span className="font-bold">LBM PWNU DIY</span>
      </motion.footer>
    </section>
  );
};

export default Splash;
