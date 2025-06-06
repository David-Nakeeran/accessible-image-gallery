export const MainImage = ({ imgId, apiData }) => {
  const imgObject = apiData.find((element) => {
    return element.id === imgId;
  });

  return (
    <section className="large-img-container">
      {imgObject ? (
        <img
          key={imgObject.id}
          src={imgObject.url}
          alt={imgObject.alt}
          // src={imgObject.urls.regular}
          // alt={imgObject.alt_description}
        />
      ) : null}
    </section>
  );
};
