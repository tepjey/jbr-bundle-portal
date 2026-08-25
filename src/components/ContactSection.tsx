import { Phone, Mail, Instagram, Facebook } from "lucide-react";

export function ContactSection() {
  return (
    <section id="hubungi" className="border-b border-border bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Hubungi Kami
          </span>
          <h2 className="mt-3 font-display text-4xl uppercase tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Berhubung Dengan JBR Bundle
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ada pertanyaan? Hubungi kami melalui saluran di bawah atau lawati
            cawangan terdekat.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="#"
            className="flex items-center gap-4 rounded-sm border border-border bg-card p-5 transition-colors hover:border-primary"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-muted text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-sm font-medium text-muted-foreground">
                Telefon
              </span>
              <span className="font-display text-lg uppercase tracking-wide text-foreground">
                +60 1X-XXX XXXX
              </span>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-4 rounded-sm border border-border bg-card p-5 transition-colors hover:border-primary"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-muted text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-sm font-medium text-muted-foreground">
                E-mel
              </span>
              <span className="font-display text-lg uppercase tracking-wide text-foreground">
                hello@jbrbundle.my
              </span>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-4 rounded-sm border border-border bg-card p-5 transition-colors hover:border-primary"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-muted text-primary">
              <Instagram className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-sm font-medium text-muted-foreground">
                Instagram
              </span>
              <span className="font-display text-lg uppercase tracking-wide text-foreground">
                @jbrbundle
              </span>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-4 rounded-sm border border-border bg-card p-5 transition-colors hover:border-primary"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-muted text-primary">
              <Facebook className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-sm font-medium text-muted-foreground">
                Facebook
              </span>
              <span className="font-display text-lg uppercase tracking-wide text-foreground">
                JBR Bundle
              </span>
            </div>
          </a>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JBR Bundle. Gedung bundle terbesar di
            Malaysia sejak 2007.
          </p>
        </div>
      </div>
    </section>
  );
}
