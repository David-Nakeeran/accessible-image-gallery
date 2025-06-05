export const Thumbnails = ({ apiData, handleClick }) => {
  const imgElements = apiData.map((element) => {
    return (
      <img
        key={element.id}
        src={element.urls.thumb}
        alt={element.alt_description}
        onClick={() => handleClick(element.id)}
      />
    );
  });
  return <section className="flex">{imgElements}</section>;
};
