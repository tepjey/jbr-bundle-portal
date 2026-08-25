import { ArrowDown, Phone, Flame, MessageCircle, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import bannerAsset from "@/assets/jbr-banner.png.asset.json";
import { GENERAL_HOTLINE_URL } from "@/lib/social-links";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden border-b border-border"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${bannerAsset.url})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 py-20 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          <Flame className="h-3.5 w-3.5" aria-hidden="true" />
          Gedung Bundle Terbesar Di Malaysia • Sejak 2007
        </span>

        <h1 className="mx-auto mt-6 max-w-5xl font-display text-5xl uppercase leading-[0.9] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          Syurga Thrifting & Vintage Grails Terbesar
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Terokai lebih 10 cawangan warehouse di seluruh Selangor, Kuala Lumpur &
          Negeri Sembilan. Dibuka setiap hari untuk peminat vintage dan pembeli
          borong.
        </p>

        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <Users className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          Dipercayai oleh Ribuan Peminat Vintage & Thrifting di Seluruh Malaysia
        </span>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-sm font-display text-base uppercase tracking-wide"
          >
            <a href="#cawangan">
              <ArrowDown className="mr-2 h-5 w-5" />
              Lihat Semua Cawangan
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-sm border-border bg-transparent font-display text-base uppercase tracking-wide text-foreground hover:bg-muted"
          >
            <a href="#borong">
              <Phone className="mr-2 h-5 w-5" />
              Tempahan B2B Borong Guni
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-sm border-border bg-transparent font-display text-base uppercase tracking-wide text-foreground hover:bg-muted"
          >
            <a href={GENERAL_HOTLINE_URL} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Talian Khidmat Pelanggan
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
