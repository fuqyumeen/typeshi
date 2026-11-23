import { Routes, Route } from "react-router-dom";

import Sulabh from "./Sulabh";
import Shitpost1 from "../pages/sulabhposts/shitpost1";
import Shitpost2 from "../pages/sulabhposts/shitpost2";
import Shitpost3 from "../pages/sulabhposts/shitpost3";
function SulabhRoutes() {
  return (
    <Routes>
      <Route path="/sulabh" element={<Sulabh />} />
      <Route path="/sulabh/shitpost1" element={<Shitpost1 />} />
      <Route path="/sulabh/shitpost2" element={<Shitpost2 />} />
      <Route path="/sulabh/shitpost3" element={<Shitpost3 />} />
    </Routes>
  );
}

export default SulabhRoutes;