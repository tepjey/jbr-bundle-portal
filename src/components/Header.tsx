import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import logoAsset from "@/assets/jbr-logo.png.asset.json";
import { socialLinks } from "@/lib/social-links";

const navItems = [
  { label: "Cawangan & Lokasi", hash: "cawangan" },
  { label: "Waktu Operasi", hash: "waktu" },
  { label: "Seksyen Jualan", hash: "seksyen" },
  { label: "B2B Borong Guni", hash: "borong" },
  { label: "Hubungi Kami", hash: "hubungi" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <img
            src={logoAsset.url}
            alt="JBR BUNDLE"
            className="h-14 w-auto rounded-sm"
            width={56}
            height={56}
          />
          <div className="hidden flex-col sm:flex">
            <span className="font-display text-2xl leading-none tracking-wide text-foreground">
              JBR BUNDLE
            </span>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              SEJAK 2007
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.hash}
              to="/"
              hash={item.hash}
              className="rounded-sm text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden rounded-sm font-display text-sm uppercase tracking-wide sm:inline-flex"
          >
            <a href="#cawangan">
              <MapPin className="mr-2 h-4 w-4" />
              Cari Cawangan Terdekat
            </a>
          </Button>

          <div className="hidden items-center gap-2 md:flex">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.name}
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-transparent text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-sm border-border bg-transparent text-foreground hover:bg-muted lg:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-sm border-border bg-background"
            >
              <SheetTitle className="sr-only">Navigasi JBR BUNDLE</SheetTitle>
              <SheetDescription className="sr-only">
                Pilih bahagian untuk navigasi laman JBR BUNDLE.
              </SheetDescription>

              <div className="flex flex-col gap-6 py-6">
                <Link
                  to="/"
                  className="flex items-center gap-3"
                  onClick={() => setOpen(false)}
                >
                  <img
                    src={logoAsset.url}
                    alt="JBR BUNDLE"
                    className="h-12 w-auto rounded-sm"
                    width={48}
                    height={48}
                  />
                  <div className="flex flex-col">
                    <span className="font-display text-2xl leading-none text-foreground">
                      JBR BUNDLE
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                      SEJAK 2007
                    </span>
                  </div>
                </Link>

                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.hash}>
                      <Link
                        to="/"
                        hash={item.hash}
                        className="rounded-sm px-3 py-3 text-base font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <Button
                  asChild
                  className="w-full rounded-sm font-display text-sm uppercase tracking-wide"
                >
                  <a href="#cawangan" onClick={() => setOpen(false)}>
                    <MapPin className="mr-2 h-4 w-4" />
                    Cari Cawangan Terdekat
                  </a>
                </Button>

                <div className="flex gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.name}
                        className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
