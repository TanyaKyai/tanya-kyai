const Button = ({ styles, children }) => {
  return <button className={`bg-primary font-roboto font-bold text-white outline-none ${styles}`}>{children}</button>;
};

export default Button;
