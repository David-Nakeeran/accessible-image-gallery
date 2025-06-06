export const Controls = ({ handlePreviousClick, handleNextClick }) => {
  return (
    <div className="controls flex items-center justify-between w-screen pl-2 pr-2 pb-5 pt-2">
      <button
        className="font-medium cursor-pointer bg-purple-400 text-purple-950 p-3 rounded-2xl hover:bg-purple-300"
        onClick={() => handlePreviousClick()}
      >
        Prev
      </button>
      <button
        className="font-medium cursor-pointer bg-purple-400 text-purple-950 p-3 rounded-2xl hover:bg-purple-300"
        onClick={() => handleNextClick()}
      >
        Next
      </button>
    </div>
  );
};
