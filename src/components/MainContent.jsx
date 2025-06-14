import { MainImage } from "./MainImage.jsx";
import { Thumbnails } from "./Thumbnails.jsx";
import { Controls } from "./Controls.jsx";
import { Search } from "./Search.jsx";
import { useState, useEffect } from "react";

export const MainContent = () => {
  const [apiData, setApiData] = useState([]);
  const [imgId, setImgId] = useState("");
  const [search, setSearch] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}&query=${search}`
        );
        const data = await response.json();
        if (!data.errors) {
          setApiData(data);
          setImgId(data[0].id);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [search]);

  const handleThumbnailClick = (imgId) => {
    setImgId(imgId);
  };

  const handlePreviousClick = () => {
    const index = apiData.findIndex((element) => {
      return element.id === imgId;
    });
    const lastIndexOfArr = apiData.length - 1;

    if (index === 0) {
      setImgId(apiData[lastIndexOfArr].id);
      return;
    }

    setImgId(apiData[index - 1].id);
  };

  const handleNextClick = () => {
    const index = apiData.findIndex((element) => {
      return element.id === imgId;
    });
    const lastIndexOfArr = apiData.length - 1;

    if (index === lastIndexOfArr) {
      setImgId(apiData[0].id);
      return;
    }

    setImgId(apiData[index + 1].id);
  };

  const handleVisibilityClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <main>
      <Search setSearch={setSearch} />
      <MainImage imgId={imgId} apiData={apiData} />
      <Thumbnails
        apiData={apiData}
        handleClick={handleThumbnailClick}
        handleVisibilityClick={handleVisibilityClick}
        isVisible={isVisible}
      />
      <Controls
        handlePreviousClick={handlePreviousClick}
        handleNextClick={handleNextClick}
      />
    </main>
  );
};
