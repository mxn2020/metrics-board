import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, PenTool, Database, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/", icon: LayoutDashboard, label: "Dashboard Viewer" },
        { to: "/widgets", icon: PenTool, label: "Widget Editor" },
        { to: "/sources", icon: Database, label: "Data Sources" },
        { to: "/settings", icon: Settings, label: "Settings" }
    ];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-secondary)", borderRight: "1px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border)" }}>
            <div style={{ background: "var(--color-accent-primary)", color: "var(--color-text-inverse)", width: 32, height: 32, borderRadius: "var(--radius-sm)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 18 }}>M</div>
            <strong style={{ fontSize: "1.1rem", fontWeight: 700 }}>MetricsBoard</strong>
        </div>
        <nav style={{ padding: "var(--space-4)", flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
            {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-3)", borderRadius: "var(--radius-sm)", color: loc.pathname === l.to ? "var(--color-accent-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-accent-soft)" : "transparent", fontWeight: loc.pathname === l.to ? 600 : 500, fontSize: "14px", transition: "all var(--transition-fast)" }}><l.icon size={18} />{l.label}</Link>)}
        </nav>
        <div style={{ padding: "var(--space-4)", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "flex-end" }}><ThemeToggle /></div>
    </aside>);
}
