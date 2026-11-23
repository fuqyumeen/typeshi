import { Routes, Route } from "react-router-dom";

import Amaan from "./Amaan";
import Meme1 from "../pages/amaanposts/meme1";
import Meme2 from "../pages/amaanposts/Meme2";
import Meme3 from "../pages/amaanposts/Meme3";
import Xqc from "../pages/amaanposts/Xqc";


function AmaanRoutes() {
  return (
    <Routes>
      <Route path="/amaan" element={<Amaan />} />
      <Route path="/amaan/meme1" element={<Meme1 />} />
      <Route path="/amaan/meme2" element={<Meme2 />} />
      <Route path="/amaan/meme3" element={<Meme3/>}/>
      <Route path="/amaan/xqc" element={<Xqc />}/>
    </Routes>
  );
}

export default AmaanRoutes;