import { Routes, Route } from "react-router-dom";

import Home from "../Home";

import BlogLayout from "../layouts/BlogLayout";

import AmaanRoutes from "../profiles/AmaanRoutes";
import RishabhRoutes from "../profiles/RishabhRoutes";
import SulabhRoutes from "../profiles/SulabhRoutes";
function App() {
  return (
    <Routes>
      <Route element={<BlogLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={
          <>
            <AmaanRoutes />
            <RishabhRoutes />
            <SulabhRoutes />
          </>
        } />
      </Route>
    </Routes>
  );
}

export default App;