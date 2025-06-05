import { MainImage } from "./MainImage.jsx";
import { Thumbnails } from "./Thumbnails.jsx";
import { Controls } from "./Controls.jsx";

export const MainContent = () => {
  return (
    <main>
      <MainImage />
      <Thumbnails />
      <Controls />
    </main>
  );
};
