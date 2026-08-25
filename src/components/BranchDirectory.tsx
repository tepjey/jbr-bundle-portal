import { useMemo, useState } from "react";
import {
  MapPin,
  Navigation,
  Map as MapIcon,
  MessageCircle,
  AlertTriangle,
  Clock,
  Package,
  Phone,
  Search,
  Building,
  ChevronDown,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BranchImage } from "@/components/BranchImage";

const UNSPLASH = {
  racks: "https://images.unsplash.com/photo-1616628180910-1f3e4c5b8d6e?q=80&w=800",
  store: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800",
  boutique: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=800",
  mall: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800",
  hangers: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800",
  warehouse: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
};

const regions = [
  { label: "Semua Cawangan", value: "all" },
  { label: "Selangor", value: "Selangor" },
  { label: "Kuala Lumpur", value: "Kuala Lumpur" },
  { label: "Negeri Sembilan", value: "Negeri Sembilan" },
];

const branches = [
  {
    name: "Lotus's Seremban Jaya",
    region: "Negeri Sembilan",
    hours: "10:00 AM - 10:00 PM (Buka Setiap Hari)",
    fridayNotice: "Kekal Beroperasi Seperti Biasa pada Hari Jumaat",
    phone: "011-59495676",
    specialty: "Toys, Bric-a-brac, Exclusive & Collectible, Winter/Camping",
    wazeQuery: "JBR Bundle Seremban Jaya",
    mapsQuery: "JBR Bundle Seremban Jaya",
  },
  {
    name: "Shah Alam",
    region: "Selangor",
    hours: "10:00 AM - 12:00 AM (Tengah Malam)",
    address:
      "LOT 45, 46, 57, 58, 59 dan 63, Seksyen 1, Mukim, Kampung Batu Tiga, 40150 Shah Alam, Selangor",
    phone: "011-11955676",
    specialty: "RM2 Dept, RM5/1KG Dept, Toys, Vintage Grails, Perabot & Basikal",
    wazeQuery: "JBR Bundle Shah Alam",
    mapsQuery: "JBR Bundle Shah Alam",
  },
  {
    name: "Bandar Sri Damansara",
    region: "Kuala Lumpur",
    hours: "10:00 AM - 12:00 AM (Tengah Malam)",
    phone: "014-3595676",
    specialty: "RM2 Dept, Toys, Collectibles, Perabot, Winter & Hiking",
    wazeQuery: "JBR Bundle Sri Damansara",
    mapsQuery: "JBR Bundle Sri Damansara",
  },
  {
    name: "Bangi (EVO Mall)",
    region: "Selangor",
    hours: "10:00 AM - 10:00 PM",
    phone: "013-2605676",
    specialty: "Pakaian Lelaki/Wanita/Kanak-kanak, Kasut, Beg, Toys",
    wazeQuery: "JBR Bundle Evo Mall Bangi",
    mapsQuery: "JBR Bundle Evo Mall Bangi",
  },
  {
    name: "Subang USJ (Palazzo 19 Mall)",
    region: "Selangor",
    hours: "10:00 AM - 10:00 PM",
    phone: "014-3095676",
    specialty: "Toys, Collectibles, Winter Zone, Perabot & Basikal",
    wazeQuery: "JBR Bundle Subang USJ",
    mapsQuery: "JBR Bundle Subang USJ",
  },
  {
    name: "Klang",
    region: "Selangor",
    hours: "10:00 AM - 12:00 AM",
    phone: "011-16755676",
    specialty: "Pakaian, Kasut, Beg, Toys, Books & Media",
    wazeQuery: "JBR Bundle Klang",
    mapsQuery: "JBR Bundle Klang",
  },
  {
    name: "Balakong",
    region: "Selangor",
    hours: "10:00 AM - 12:00 AM",
    phone: "014-3675676",
    specialty: "Toys, Pakaian, Kasut, Beg, Household",
    wazeQuery: "JBR Bundle Balakong",
    mapsQuery: "JBR Bundle Balakong",
  },
  {
    name: "Hulu Langat",
    region: "Selangor",
    hours: "10:00 AM - 12:00 AM",
    phone: "016-2485676",
    specialty: "RM2 Dept, Pakaian & Aksesori",
    wazeQuery: "JBR Bundle Hulu Langat",
    mapsQuery: "JBR Bundle Hulu Langat",
  },
  {
    name: "Kanchong Darat (Banting)",
    region: "Selangor",
    hours: "10:00 AM - 12:00 AM",
    phone: "014-3015676",
    specialty: "Pakaian Lengkap, Kasut & Aksesori",
    wazeQuery: "JBR Bundle Kanchong Darat",
    mapsQuery: "JBR Bundle Kanchong Darat",
  },
  {
    name: "Banting (Muara)",
    region: "Selangor",
    hours: "10:00 AM - 10:00 PM",
    phone: "014-3035676",
    specialty: "Pakaian, Beg & Kasut",
    wazeQuery: "JBR Bundle Banting Muara",
    mapsQuery: "JBR Bundle Banting Muara",
  },
  {
    name: "Jenjarom (Headquarters & Warehouse)",
    region: "Selangor",
    hours: "8:30 AM - 5:30 PM (Tutup Hari Ahad, Rehat 1-2 PM)",
    phone: "03-31915676",
    specialty: "Pusat Pengurusan, B2B Borong Stok Bale & Tokol",
    wazeQuery: "JBR Bundle Jenjarom HQ",
    mapsQuery: "JBR Bundle Jenjarom HQ",
  },
];

const branchMedia: Record<string, { src: string; fallback: string }> = {
  "Lotus's Seremban Jaya": { src: "/public/branches/seremban.jpg", fallback: UNSPLASH.racks },
  "Shah Alam": { src: "/public/branches/shah-alam.jpg", fallback: UNSPLASH.store },
  "Bandar Sri Damansara": { src: "/public/branches/damansara.jpg", fallback: UNSPLASH.boutique },
  "Bangi (EVO Mall)": { src: "/public/branches/bangi.jpg", fallback: UNSPLASH.mall },
  "Subang USJ (Palazzo 19 Mall)": { src: "/public/branches/subang.jpg", fallback: UNSPLASH.hangers },
  Klang: { src: "/public/branches/klang.jpg", fallback: UNSPLASH.racks },
  Balakong: { src: "/public/branches/balakong.jpg", fallback: UNSPLASH.store },
  "Hulu Langat": { src: "/public/branches/hulu-langat.jpg", fallback: UNSPLASH.hangers },
  "Kanchong Darat (Banting)": { src: "/public/branches/kanchong-darat.jpg", fallback: UNSPLASH.boutique },
  "Banting (Muara)": { src: "/public/branches/banting-muara.jpg", fallback: UNSPLASH.mall },
  "Jenjarom (Headquarters & Warehouse)": {
    src: "/public/branches/warehouse.jpg",
    fallback: UNSPLASH.warehouse,
  },
};


function formatWhatsAppNumber(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("0") ? `6${digits}` : digits;
}

export function BranchDirectory() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("all");
  const [openMap, setOpenMap] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return branches.filter((branch) => {
      const matchesRegion = region === "all" || branch.region === region;
      const matchesQuery =
        !q ||
        branch.name.toLowerCase().includes(q) ||
        branch.region.toLowerCase().includes(q) ||
        branch.specialty.toLowerCase().includes(q) ||
        branch.hours.toLowerCase().includes(q);
      return matchesRegion && matchesQuery;
    });
  }, [query, region]);

  return (
    <section id="cawangan" className="border-b border-border bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Cawangan & Lokasi
          </span>
          <h2 className="mt-3 font-display text-4xl uppercase tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Cari Cawangan Terdekat
          </h2>
          <p className="mt-4 text-muted-foreground">
            Guna carian atau pilih negeri untuk tapis cawangan JBR Bundle di Selangor,
            Kuala Lumpur & Negeri Sembilan.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mx-auto mt-10 max-w-4xl space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Cari nama cawangan, daerah, atau kata kunci..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-12 rounded-sm border-border bg-card pl-10 font-body text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {regions.map((r) => {
              const active = region === r.value;
              return (
                <Button
                  key={r.value}
                  size="sm"
                  variant={active ? "default" : "outline"}
                  onClick={() => setRegion(r.value)}
                  className={
                    active
                      ? "rounded-full border-transparent bg-primary font-display text-xs uppercase tracking-wide text-primary-foreground"
                      : "rounded-full border-border bg-transparent font-display text-xs uppercase tracking-wide text-foreground hover:bg-muted"
                  }
                >
                  {r.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Friday Prayer Advisory */}
        <div className="mx-auto mt-8 max-w-4xl rounded-sm border border-border bg-card p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
              <AlertTriangle className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-display text-base uppercase tracking-wide text-foreground">
                Waktu Rehat Solat Jumaat
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Semua cawangan ditutup 12:30 PM – 2:30 PM setiap Jumaat (Kecuali cawangan
                Lotus’s Seremban Jaya beroperasi seperti biasa).
              </p>
            </div>
          </div>
        </div>

        {/* Branch Directory Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((branch) => (
            <article
              key={branch.name}
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-all hover:border-primary/60 hover:shadow-sm"
            >
              <div className="relative aspect-video overflow-hidden">
                <BranchImage
                  src={branchMedia[branch.name]?.src ?? "/branches/warehouse.jpg"}
                  fallback={branchMedia[branch.name]?.fallback ?? UNSPLASH.warehouse}
                  alt={`Suasana gudang JBR Bundle ${branch.name}`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-card via-card/60 to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-sm bg-background/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm">
                  {branch.region}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5"></div>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg uppercase leading-tight tracking-wide text-foreground">
                      {branch.name}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {branch.region}
                    </p>
                  </div>
                </div>
                <Badge className="shrink-0 rounded-sm border-transparent bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                  Buka Hari Ini
                </Badge>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{branch.hours}</span>
                </div>
                {branch.fridayNotice && (
                  <div className="flex items-start gap-2 text-sm text-primary">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{branch.fridayNotice}</span>
                  </div>
                )}
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Package className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{branch.specialty}</span>
                </div>
                {branch.address && (
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Building className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{branch.address}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span>{branch.phone}</span>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="flex-1 rounded-sm border-border bg-transparent text-xs font-semibold uppercase tracking-wide text-foreground hover:bg-muted"
                >
                  <a
                    href={`https://waze.com/ul?q=${encodeURIComponent(branch.wazeQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Navigation className="mr-1.5 h-3.5 w-3.5 text-primary" />
                    Waze
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="flex-1 rounded-sm border-border bg-transparent text-xs font-semibold uppercase tracking-wide text-foreground hover:bg-muted"
                >
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapsQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MapIcon className="mr-1.5 h-3.5 w-3.5 text-primary" />
                    Maps
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="flex-1 rounded-sm bg-primary text-xs font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
                >
                  <a
                    href={`https://wa.me/${formatWhatsAppNumber(branch.phone)}?text=Salam%20JBR%20Bundle,%20saya%20ada%20pertanyaan%20mengenai%20cawangan`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
              
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() =>
                    setOpenMap((prev) => (prev === branch.name ? null : branch.name))
                  }
                  aria-expanded={openMap === branch.name}
                  className="flex w-full items-center justify-between rounded-sm border border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-muted"
                >
                  <span className="flex items-center gap-1.5">
                    <MapIcon className="h-3.5 w-3.5 text-primary" />
                    Lihat Peta Interaktif
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-primary transition-transform duration-300 ${
                      openMap === branch.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    openMap === branch.name
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    {openMap === branch.name && (
                      <iframe
                        title={`Peta ${branch.name}`}
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(branch.mapsQuery)}&z=15&output=embed`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="mt-3 h-52 w-full rounded-sm border border-border"
                      />
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center text-muted-foreground">
            <p className="font-display text-lg uppercase tracking-wide">Tiada cawangan dijumpai</p>
            <p className="mt-1 text-sm">Cuba carian atau tapisan lain.</p>
          </div>
        )}
      </div>
    </section>
  );
}
