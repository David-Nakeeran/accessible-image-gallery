export const Thumbnails = ({ apiData, handleClick }) => {
  const imgElements = apiData.map((element) => {
    return (
      <img
        className="w-[30%] focus:outline-2 focus:outline-offset-none focus:outline-[#d1b3ff]"
        role="button"
        tabIndex="0"
        key={element.id}
        src={element.urls.thumb}
        alt={element.alt_description}
        onClick={() => handleClick(element.id)}
        onKeyDown={(e) => (e.key === "Enter" ? handleClick(element.id) : null)}
      />
    );
  });
  return (
    <section className="thumbnail-container flex w-[50%] overflow-x-scroll gap-3 bg-[#00000098] mb-3 md:w-[30%] md:mt-3 lg:w-[20%]">
      {imgElements}
    </section>
  );
};
