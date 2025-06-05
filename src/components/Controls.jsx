export const Controls = ({ handlePreviousClick }) => {
  return (
    <div>
      <button onClick={() => handlePreviousClick()}>Prev</button>
      <button>Next</button>
    </div>
  );
};
