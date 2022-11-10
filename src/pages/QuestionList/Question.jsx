const Question = ({ questionItem }) => {
  const { id, question } = questionItem;

  return (
    <div className="mb-4 flex max-h-[75vh]  max-w-2xl  flex-col  rounded-2xl bg-gray px-5 pt-4 pb-2">
      <p>{question}</p>
      <div className="mt-2  flex items-end justify-between">
        <span className="text-xs text-primary">19.30</span>
        <button className="rounded-md bg-primary px-3 py-1  text-sm text-white" onClick={() => console.log(id)}>
          jawab
        </button>
      </div>
    </div>
  );
};

export default Question;
