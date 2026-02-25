import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardPage from "../pages/DashboardPage";
import WidgetEditorPage from "../pages/WidgetEditorPage";
import DataSourcesPage from "../pages/DataSourcesPage";

vi.mock("recharts", () => {
    const Original = vi.importActual("recharts");
    return { ...Original, ResponsiveContainer: ({ children }: any) => <div style={{ width: 800, height: 300 }}>{children}</div>, LineChart: () => <div data-testid="line-chart" />, Line: () => null, XAxis: () => null, YAxis: () => null, Tooltip: () => null };
});

function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("MetricsBoard")).toBeInTheDocument(); });
    it("DashboardPage renders", () => { wrap(<DashboardPage />); expect(screen.getByText("Production KPIs")).toBeInTheDocument(); });
    it("WidgetEditorPage renders", () => { wrap(<WidgetEditorPage />); expect(screen.getByText("Widget Editor")).toBeInTheDocument(); });
    it("DataSourcesPage renders", () => { wrap(<DataSourcesPage />); expect(screen.getByText("Data Sources")).toBeInTheDocument(); });
});
