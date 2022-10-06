import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import App from "pages/App";
import JSIndex from "pages/javascript";
import ReactIndex from "pages/react";
import ReactContext from "pages/react/global-state/Context";
import ReactRedux from "pages/react/global-state/Redux";

axios.defaults.baseURL =
  "https://raw.githubusercontent.com/devanada/learning-markdown/main/";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/javascript/intro" element={<JSIndex />} />
        <Route path="/react/intro" element={<ReactIndex />} />
        <Route path="/react/global-state/context" element={<ReactRedux />} />
        <Route path="/react/global-state/redux" element={<ReactContext />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
