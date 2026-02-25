import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Activity } from "lucide-react";

const revenueData = [
    { day: "Mon", val: 12400 }, { day: "Tue", val: 14500 }, { day: "Wed", val: 13200 },
    { day: "Thu", val: 15800 }, { day: "Fri", val: 16900 }, { day: "Sat", val: 11200 }, { day: "Sun", val: 9800 }
];

export default function DashboardPage() {
    const kpis = [
        { title: "Revenue (MTD)", value: "$128,450", change: "+14.2%", up: true, icon: DollarSign, color: "var(--color-accent-primary)" },
        { title: "Active Users", value: "12,847", change: "+8.5%", up: true, icon: Users, color: "var(--color-info)" },
        { title: "Conversion Rate", value: "3.24%", change: "-0.3%", up: false, icon: ShoppingCart, color: "var(--color-danger)" },
        { title: "Uptime", value: "99.98%", change: "+0.01%", up: true, icon: Activity, color: "var(--color-success)" }
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1400 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700 }}>Production KPIs</h1>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "13px", marginTop: 4 }}>Live dashboard • Last refreshed just now</p>
            </div>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <button className="btn btn-sm">7 Days</button>
                <button className="btn btn-sm">30 Days</button>
                <button className="btn btn-primary btn-sm">Share</button>
            </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
            {kpis.map(k => (
                <div key={k.title} className="card" style={{ padding: "var(--space-5)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-3)" }}>
                        <span style={{ color: "var(--color-text-secondary)", fontSize: "13px", fontWeight: 500 }}>{k.title}</span>
                        <k.icon size={18} style={{ color: k.color }} />
                    </div>
                    <div style={{ fontSize: "28px", fontWeight: 700, fontFamily: "var(--font-mono)" }}>{k.value}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: "var(--space-2)", fontSize: "13px", fontWeight: 600, color: k.up ? "var(--color-success)" : "var(--color-danger)" }}>
                        {k.up ? <TrendingUp size={14} /> : <TrendingDown size={14} />} {k.change}
                    </div>
                </div>
            ))}
        </div>

        <div className="card" style={{ padding: "var(--space-5)" }}>
            <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "var(--space-5)" }}>Revenue Trend (7d)</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "var(--color-text-secondary)", fontSize: 12 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: "var(--color-text-secondary)", fontSize: 12 }} tickFormatter={v => `$${(v / 1000).toFixed(0)}k`} />
                    <Tooltip contentStyle={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: 8 }} />
                    <Line type="monotone" dataKey="val" stroke="var(--color-accent-primary)" strokeWidth={3} dot={{ fill: "var(--color-accent-primary)", r: 5 }} activeDot={{ r: 7, strokeWidth: 2 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>);
}
