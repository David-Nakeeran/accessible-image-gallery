export const MainImage = ({ imgId, apiData }) => {
  const imgObject = apiData.find((element) => {
    return element.id === imgId;
  });

  return (
    <section>
      {imgObject ? (
        <img
          key={imgObject.id}
          src={imgObject.urls.regular}
          alt={imgObject.alt_description}
        />
      ) : null}
    </section>
  );
};
