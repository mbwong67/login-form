const Button = () => {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className="w-fit m-auto text-white bg-purple-400 px-4 py-2 rounded-sm font-bold mb-4 border-transparent border-2 hover:border-purple-400 hover:bg-transparent hover:text-purple-400"
    >
      LOGIN
    </button>
  );
};

export default Button;
