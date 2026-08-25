import { Store, Clock, Package } from "lucide-react";

const highlights = [
  { icon: Store, label: "10+ Gudang Cawangan" },
  { icon: Clock, label: "Buka 7 Hari Seminggu" },
  { icon: Package, label: "Pakaian, Kasut, Toys & Bric-a-Brac" },
];

export function Highlights() {
  return (
    <section className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-sm border border-border bg-background p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <item.icon className="h-5 w-5" />
              </div>
              <span className="font-display text-lg uppercase tracking-wide text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
