import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import List from "./pages/List/List";
import Motion from "./pages/Motion/Motion";
function router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/index" element={<App />} />
        <Route path="/list" element={<List />} />
        <Route path="/motion" element={<Motion />} />
      </Routes>
    </HashRouter>
  );
}

export default router