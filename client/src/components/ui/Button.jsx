const Button = ({ children, className="", ...props }) => {
  return (
    <button
      className={`bg-teal-700 text-white px-5 py-2 rounded-lg hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;