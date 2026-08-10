import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/meet_rajesh">
      <Routes>
        <Route element={<MainLayout />}>
           <Route path="/" element={<Home />} />
           <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;