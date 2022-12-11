import Fatwa from "./Fatwa";

const PerpustakaanFatwa = ({ fatwas, setFatwas }) => {
  console.log("Perpus: ", fatwas);

  return (
    <div className="mt-4 flex max-h-[75vh] flex-col gap-4 overflow-y-auto md:px-5">
      {fatwas.length
        ? fatwas.map((fatwa) => <Fatwa key={fatwa.id} fatwa={fatwa} setFatwas={setFatwas} />)
        : "Tidak ada fatwa untuk ditampilkan"}
    </div>
  );
};

export default PerpustakaanFatwa;
