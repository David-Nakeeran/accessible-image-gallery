import { MainImage } from "./MainImage.jsx";
import { Thumbnails } from "./Thumbnails.jsx";
import { Controls } from "./Controls.jsx";
import { useState, useEffect } from "react";

export const MainContent = () => {
  const [apiData, setApiData] = useState([]);
  const [imgId, setImgId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}
      `
      );
      const data = await response.json();
      console.log(data);
      setApiData(data);
      setImgId(data[0].id);
    };
    fetchData();
  }, []);

  const handleThumbnailClick = (imgId) => {
    setImgId(imgId);
    console.log(imgId);
  };

  return (
    <main>
      <MainImage imgId={imgId} apiData={apiData} />
      <Thumbnails apiData={apiData} handleClick={handleThumbnailClick} />
      <Controls />
    </main>
  );
};
