import { BrowserRouter, Routes, Route } from "react-router-dom";
import EgitimTwo from "../components/egitim/EgitimTwo";
import Egitim from "../pages/Egitim";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/egitim" element={<Egitim />} />
        <Route path="/egitim-page-2" element={<EgitimTwo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
