import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import axios from "axios";

import App from "pages/App";
import NotFound from "pages/NotFound";

axios.defaults.baseURL =
  "https://raw.githubusercontent.com/devanada/learning-markdown/main/";

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={<App />}
          loader={() => {
            return "Home | Learn FrontEnd";
          }}
        />
        <Route
          path="/javascript/intro"
          element={<App />}
          loader={() => {
            return "JavaScript ─ Intro | Learn FrontEnd";
          }}
        />
        <Route
          path="/react/intro"
          element={<App />}
          loader={() => {
            return "React ─ Intro | Learn FrontEnd";
          }}
        />
        <Route
          path="/react/global-state/context"
          element={<App />}
          loader={() => {
            return "React ─ Context | Learn FrontEnd";
          }}
        />
        <Route
          path="/react/global-state/redux"
          element={<App />}
          loader={() => {
            return "React ─ Redux | Learn FrontEnd";
          }}
        />
        <Route path="*" element={<NotFound />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default Router;
