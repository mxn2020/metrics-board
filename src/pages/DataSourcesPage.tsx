import { Database, Plus, CheckCircle2, Settings } from "lucide-react";

export default function DataSourcesPage() {
    const sources = [
        { id: "1", name: "Production PostgreSQL", type: "PostgreSQL", status: "connected", lastSync: "2 mins ago" },
        { id: "2", name: "Stripe API", type: "REST API", status: "connected", lastSync: "5 mins ago" },
        { id: "3", name: "Google Analytics", type: "OAuth", status: "connected", lastSync: "1 hour ago" },
        { id: "4", name: "Staging MySQL", type: "MySQL", status: "error", lastSync: "Failed" },
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1000 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700 }}>Data Sources</h1>
            <button className="btn btn-primary"><Plus size={16} /> Connect Source</button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "var(--space-4)" }}>
            {sources.map(s => (
                <div key={s.id} className="card" style={{ padding: "var(--space-5)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-4)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                            <div style={{ background: "var(--color-bg-tertiary)", padding: 8, borderRadius: "var(--radius-sm)", color: "var(--color-accent-primary)" }}><Database size={20} /></div>
                            <div>
                                <h3 style={{ fontWeight: 600 }}>{s.name}</h3>
                                <span style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>{s.type}</span>
                            </div>
                        </div>
                        <button className="btn btn-ghost" style={{ padding: 6 }}><Settings size={16} /></button>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "var(--space-3)", borderTop: "1px solid var(--color-border)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "13px", fontWeight: 600, color: s.status === "connected" ? "var(--color-success)" : "var(--color-danger)" }}>
                            <CheckCircle2 size={14} /> {s.status === "connected" ? "Connected" : "Error"}
                        </div>
                        <span style={{ fontSize: "12px", color: "var(--color-text-tertiary)" }}>Last sync: {s.lastSync}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>);
}
