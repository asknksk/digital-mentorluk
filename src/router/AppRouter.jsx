import { BrowserRouter, Routes, Route } from "react-router-dom";
import EgitimSoru from "../components/egitim/EgitimSoru";
import EgitimThree from "../components/egitim/EgitimThree";
import EgitimTwo from "../components/egitim/EgitimTwo";
import EgitimVideo from "../components/egitim/EgitimVideo";
import Egitim from "../pages/Egitim";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/egitim" element={<Egitim />} />
        <Route path="/egitim-page-2" element={<EgitimTwo />} />
        <Route path="/egitim-page-3" element={<EgitimThree />} />
        <Route path="/egitim-video" element={<EgitimVideo />} />
        <Route path="/egitim-soru" element={<EgitimSoru />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
