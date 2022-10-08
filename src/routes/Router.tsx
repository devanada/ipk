import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import axios from "axios";
import { useState, useMemo } from "react";

import App from "pages/App";
import NotFound from "pages/NotFound";

import { ThemeContext } from "utils/themeContext";

axios.defaults.baseURL =
  "https://raw.githubusercontent.com/devanada/learning-markdown/main/";

function Router() {
  const [isLight, setIsLight] = useState<boolean>(
    JSON.parse(localStorage.getItem("isLight") || "false")
  );
  const background = useMemo(() => ({ isLight, setIsLight }), [isLight]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={<App />}
          loader={() => {
            return "Home | Iringan Pengantar Koding";
          }}
        />
        <Route
          path="/javascript/intro"
          element={<App />}
          loader={() => {
            return "JavaScript ─ Intro | Iringan Pengantar Koding";
          }}
        />
        <Route
          path="/react/intro"
          element={<App />}
          loader={() => {
            return "React ─ Intro | Iringan Pengantar Koding";
          }}
        />
        <Route
          path="/react/global-state/context"
          element={<App />}
          loader={() => {
            return "React ─ Context | Iringan Pengantar Koding";
          }}
        />
        <Route
          path="/react/global-state/redux"
          element={<App />}
          loader={() => {
            return "React ─ Redux | Iringan Pengantar Koding";
          }}
        />
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return (
    <ThemeContext.Provider value={background}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}

export default Router;
