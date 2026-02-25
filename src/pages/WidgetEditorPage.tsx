import { Plus, GripVertical, BarChart3, Hash, Table, Trash2 } from "lucide-react";

export default function WidgetEditorPage() {
    const widgets = [
        { id: "w1", type: "number", title: "Monthly Revenue", source: "Stripe API", config: "SUM(amount)" },
        { id: "w2", type: "chart", title: "Daily Active Users", source: "PostgreSQL", config: "COUNT(DISTINCT user_id)" },
        { id: "w3", type: "table", title: "Top Products", source: "PostgreSQL", config: "SELECT name, sales..." },
    ];

    const typeIcons: Record<string, typeof BarChart3> = { number: Hash, chart: BarChart3, table: Table };

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1000 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700 }}>Widget Editor</h1>
            <button className="btn btn-primary"><Plus size={16} /> Add Widget</button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {widgets.map(w => {
                const Icon = typeIcons[w.type] || Hash;
                return (
                    <div key={w.id} className="card" style={{ display: "flex", overflow: "hidden" }}>
                        <div style={{ width: 40, background: "var(--color-bg-tertiary)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "grab", color: "var(--color-text-tertiary)" }}>
                            <GripVertical size={16} />
                        </div>
                        <div style={{ flex: 1, padding: "var(--space-5)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: 6 }}>
                                    <div style={{ background: "var(--color-accent-soft)", padding: 4, borderRadius: "var(--radius-sm)", color: "var(--color-accent-primary)" }}><Icon size={16} /></div>
                                    <h3 style={{ fontWeight: 600, fontSize: "16px" }}>{w.title}</h3>
                                    <span style={{ fontSize: "11px", fontWeight: 600, padding: "2px 8px", borderRadius: 4, background: "var(--color-bg-tertiary)", color: "var(--color-text-secondary)", textTransform: "uppercase" }}>{w.type}</span>
                                </div>
                                <div style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>Source: <strong>{w.source}</strong> • Query: <code className="mono" style={{ color: "var(--color-text-tertiary)" }}>{w.config}</code></div>
                            </div>
                            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                                <button className="btn btn-sm">Configure</button>
                                <button className="btn btn-ghost" style={{ color: "var(--color-danger)", padding: 6 }}><Trash2 size={16} /></button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>);
}
