"use client";

import { useEffect, useState } from "react";
import { Activity, Clock3, Wifi } from "lucide-react";

export function StatusWidget() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(new Date()),
      );
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {[
        { icon: Activity, label: "Availability", value: "Open to work" },
        { icon: Wifi, label: "System", value: "Operational" },
        { icon: Clock3, label: "Dhaka", value: time || "--:--:--" },
      ].map((item) => (
        <div key={item.label} className="glass rounded-lg p-4">
          <item.icon className="mb-3 h-5 w-5 text-cyan-200" />
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
          <p className="mt-2 font-mono text-sm font-semibold text-white">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
