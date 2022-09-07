import { BrowserRouter, Routes, Route } from "react-router-dom";
import Egitim from "../pages/Egitim";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/egitim" element={<Egitim />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
