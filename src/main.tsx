import { ProSidebarProvider } from "react-pro-sidebar";
import ReactDOM from "react-dom/client";
import App from "routes/Router";
import "styles/index.css";

import ThemeSelector from "components/theme/ThemeSelector";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ProSidebarProvider>
    <ThemeSelector>
      <App />
    </ThemeSelector>
  </ProSidebarProvider>
);
