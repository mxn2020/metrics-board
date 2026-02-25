import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import WidgetEditorPage from "./pages/WidgetEditorPage";
import DataSourcesPage from "./pages/DataSourcesPage";

export default function App() {
  return (<BrowserRouter>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/widgets" element={<WidgetEditorPage />} />
          <Route path="/sources" element={<DataSourcesPage />} />
          <Route path="/settings" element={<DashboardPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>);
}
