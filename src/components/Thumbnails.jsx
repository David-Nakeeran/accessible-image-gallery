export const Thumbnails = ({ apiData, handleClick }) => {
  const imgElements = apiData.map((element) => {
    return (
      <img
        className="w-[30%]"
        key={element.id}
        src={element.urls.thumb}
        alt={element.alt_description}
        onClick={() => handleClick(element.id)}
      />
    );
  });
  return (
    <section className="thumbnail-container flex w-[50%] overflow-x-scroll gap-3 bg-[#00000098] mb-3">
      {imgElements}
    </section>
  );
};
