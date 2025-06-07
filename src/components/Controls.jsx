export const Controls = ({ handlePreviousClick, handleNextClick }) => {
  return (
    <div className="controls flex items-center justify-between w-screen pl-2 pr-2 pb-5 pt-2 md:pl-4 md:pr-4">
      <button
        className="font-medium cursor-pointer"
        onClick={() => handlePreviousClick()}
      >
        <i className="fa-regular fa-square-caret-left text-3xl text-purple-400 hover:text-purple-500 drop-shadow-xl md:text-5xl"></i>
      </button>
      <button
        className="font-medium cursor-pointer"
        onClick={() => handleNextClick()}
      >
        <i className="fa-regular fa-square-caret-right text-3xl text-purple-400 hover:text-purple-500 drop-shadow-xl md:text-5xl"></i>
      </button>
    </div>
  );
};
