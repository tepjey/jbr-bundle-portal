import { useState } from "react";
import { Phone, Truck, PackageCheck, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const b2bOptions = [
  { value: "Pakaian Dewasa Gred A", label: "Pakaian Dewasa Gred A" },
  { value: "Vintage Sportswear", label: "Vintage Sportswear" },
  { value: "Kasut/Aksesori", label: "Kasut / Aksesori" },
  { value: "Bric-a-Brac", label: "Bric-a-Brac" },
];

export function WholesaleSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guni, setGuni] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !phone.trim() || !guni || !quantity.trim()) {
      setError("Sila lengkapkan semua maklumat untuk teruskan tempahan.");
      return;
    }

    const digits = phone.replace(/\D/g, "");
    if (digits.length < 9) {
      setError("Nombor WhatsApp tidak sah. Sila masukkan nombor yang betul.");
      return;
    }

    const formattedPhone = digits.startsWith("0") ? `6${digits}` : digits;
    const message = [
      "Salam JBR Bundle,",
      "",
      "Saya berminat dengan tempahan Borong Guni / Tokol B2B:",
      `Nama: ${name.trim()}`,
      `No. WhatsApp: ${phone.trim()}`,
      `Pilihan Guni: ${guni}`,
      `Anggaran Kuantiti: ${quantity.trim()}`,
      "",
      "Mohon maklumat lanjut dan sebut harga. Terima kasih.",
    ].join("%0A");

    window.open(
      `https://wa.me/60331915676?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="borong" className="border-b border-border bg-card py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              B2B Borong Guni
            </span>
            <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Tempahan Borong Guni & Tokol B2B
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              (Jenjarom HQ)
            </p>
            <p className="mt-4 text-muted-foreground">
              Sedia untuk menjual semula? JBR Bundle menawarkan bekalan bundle
              mengikut guni untuk peniaga, vendor pasar malam & kedai thrift.
              Isi borang dan teruskan perbincangan melalui WhatsApp.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <PackageCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">
                  Pilihan Guni: Pakaian Gred A, Vintage Sportswear, Kasut/Aksesori, Bric-a-Brac
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Truck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">
                  Penghantaran ke seluruh Semenanjung Malaysia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">
                  Hubungi HQ: 03-31915676 (Jenjarom)
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-sm border border-border bg-background p-6 sm:p-8">
            <h3 className="font-display text-2xl uppercase tracking-wide text-foreground">
              Borang Tempahan B2B
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Lengkapkan maklumat untuk sebut harga pantas melalui WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="b2b-name" className="text-foreground">
                  Nama Penuh
                </Label>
                <Input
                  id="b2b-name"
                  type="text"
                  placeholder="Contoh: Ahmad bin Abdullah"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-sm border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="b2b-phone" className="text-foreground">
                  Nombor WhatsApp
                </Label>
                <Input
                  id="b2b-phone"
                  type="tel"
                  placeholder="Contoh: 012-3456789"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-sm border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="b2b-guni" className="text-foreground">
                  Pilihan Guni
                </Label>
                <Select value={guni} onValueChange={setGuni}>
                  <SelectTrigger
                    id="b2b-guni"
                    className="rounded-sm border-border bg-card text-foreground focus:ring-primary"
                  >
                    <SelectValue placeholder="Pilih kategori guni" />
                  </SelectTrigger>
                  <SelectContent className="rounded-sm border-border bg-card">
                    {b2bOptions.map((opt) => (
                      <SelectItem
                        key={opt.value}
                        value={opt.value}
                        className="text-foreground focus:bg-muted focus:text-foreground"
                      >
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="b2b-quantity" className="text-foreground">
                  Anggaran Kuantiti (Bale / KG)
                </Label>
                <Input
                  id="b2b-quantity"
                  type="text"
                  placeholder="Contoh: 2 Bale atau 50KG"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="rounded-sm border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                />
              </div>

              {error && (
                <p className="rounded-sm bg-destructive/10 px-3 py-2 text-sm text-destructive">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-sm font-display text-base uppercase tracking-wide"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Hantar ke WhatsApp B2B
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
