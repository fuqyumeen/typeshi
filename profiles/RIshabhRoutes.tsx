import { Routes, Route } from "react-router-dom";

import Rishabh from "./Rishabh";
import Facts1 from "../pages/rishabhposts/facts1";
import Facts2 from "../pages/rishabhposts/facts2";

function RishabhRoutes() {
  return (
    <Routes>
      <Route path="/rishabh" element={<Rishabh />} />
      <Route path="/rishabh/facts1" element={<Facts1 />} />
      <Route path="/rishabh/facts2" element={<Facts2 />} />
    </Routes>
  );
}

export default RishabhRoutes;