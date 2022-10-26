const Button = ({ styles, children, onClick }) => {
  return (
    <button onClick={onClick} className={`bg-primary font-roboto font-bold text-white outline-none ${styles}`}>
      {children}
    </button>
  );
};

export default Button;
