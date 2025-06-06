import "./App.css";
import { Header } from "./components/Header.jsx";
import { MainContent } from "./components/MainContent.jsx";
import { Footer } from "./components/Footer.jsx";

export const App = () => {
  return (
    <div className="main-layout">
      {/* <Header /> */}
      <MainContent />
      {/* <Footer /> */}
    </div>
  );
};
