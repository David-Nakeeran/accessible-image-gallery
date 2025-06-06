export const Controls = ({ handlePreviousClick, handleNextClick }) => {
  return (
    <div>
      <button onClick={() => handlePreviousClick()}>Prev</button>
      <button onClick={() => handleNextClick()}>Next</button>
    </div>
  );
};
