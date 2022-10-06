import { ProSidebarProvider } from "react-pro-sidebar";
import ReactDOM from "react-dom/client";
import App from "routes/Router";
import "github-markdown-css";
import "styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ProSidebarProvider>
    <App />
  </ProSidebarProvider>
);
