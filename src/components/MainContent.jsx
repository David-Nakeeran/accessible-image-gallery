import { MainImage } from "./MainImage.jsx";
import { Thumbnails } from "./Thumbnails.jsx";
import { Controls } from "./Controls.jsx";
import { useState, useEffect } from "react";

export const MainContent = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}
      `
      );
      const data = await response.json();
      console.log(data);
      setApiData(data);
    };
    fetchData();
  }, []);

  return (
    <main>
      <MainImage />
      <Thumbnails />
      <Controls />
    </main>
  );
};
