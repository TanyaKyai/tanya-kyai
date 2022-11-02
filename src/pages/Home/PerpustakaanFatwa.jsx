import Fatwa from "./Fatwa";

const PerpustakaanFatwa = ({ fatwas }) => {
  return (
    <div>
      {fatwas.length
        ? fatwas.map((fatwa) => <Fatwa key={fatwa.id} fatwa={fatwa} />)
        : "Belum ada fatwa untuk ditampilkan"}
    </div>
  );
};

export default PerpustakaanFatwa;
