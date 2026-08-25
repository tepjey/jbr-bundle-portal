import { Phone, Briefcase, MessageCircle } from "lucide-react";

import { socialLinks, GENERAL_HOTLINE_URL, B2B_HQ_URL } from "@/lib/social-links";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="hubungi" className="border-t border-border bg-card py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Hubungi Kami
            </span>
            <h2 className="mt-3 font-display text-4xl uppercase tracking-tight text-foreground sm:text-5xl">
              Ikuti & Hubungi JBR Bundle
            </h2>
            <p className="mt-4 text-muted-foreground">
              Kekal berhubung dengan komuniti thrifting kami dan dapatkan kemas
              kini terkini tentang stok baharu, promosi, dan cawangan baharu.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.name}
                    className="flex h-11 w-11 items-center justify-center rounded-sm border border-border bg-background text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href={GENERAL_HOTLINE_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-sm border border-border bg-background p-5 transition-colors hover:border-primary"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-muted text-primary">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Talian Khidmat Pelanggan
                </span>
                <span className="font-display text-lg uppercase tracking-wide text-foreground">
                  013-629 5755
                </span>
                <span className="block text-xs text-muted-foreground">
                  Pertanyaan Umum
                </span>
              </div>
            </a>

            <a
              href="https://wa.me/601131325676?text=Salam%20JBR%20Bundle,%20saya%20berminat%20mengisi%20borang%20pertanyaan%20kerjaya."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-sm border border-border bg-background p-5 transition-colors hover:border-primary"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-muted text-primary">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  HR Department Hotline
                </span>
                <span className="font-display text-lg uppercase tracking-wide text-foreground">
                  011-3132 5676
                </span>
                <span className="block text-xs text-muted-foreground">
                  Borang Pertanyaan Kerjaya
                </span>
              </div>
            </a>

            <a
              href={B2B_HQ_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-sm border border-border bg-background p-5 transition-colors hover:border-primary"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-muted text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Pusat Panggilan HQ
                </span>
                <span className="font-display text-lg uppercase tracking-wide text-foreground">
                  03-3191 5676
                </span>
                <span className="block text-xs text-muted-foreground">
                  B2B Borong Guni / Tokol
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2007–{currentYear} JBR Bundle. All Rights Reserved. Hak Cipta Terpelihara.
          </p>
        </div>
      </div>
    </footer>
  );
}
