import { Clock, AlertCircle } from "lucide-react";

export function OperatingHours() {
  return (
    <section id="waktu" className="border-b border-border bg-card py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Waktu Operasi
          </span>
          <h2 className="mt-3 font-display text-4xl uppercase tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Dibuka Setiap Hari
          </h2>
          <p className="mt-4 text-muted-foreground">
            Semua cawangan JBR Bundle beroperasi 7 hari seminggu untuk
            keselesaan anda.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-sm border border-border bg-background p-6 sm:p-8">
          <div className="flex items-center gap-4 border-b border-border pb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-2xl uppercase tracking-wide text-foreground">
                Waktu Pembukaan
              </h3>
              <p className="text-muted-foreground">Setiap hari, 7 hari seminggu</p>
            </div>
          </div>

          <ul className="mt-6 space-y-4">
            <li className="flex justify-between text-foreground">
              <span>Isnin - Khamis</span>
              <span className="font-semibold">10:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between text-foreground">
              <span>Jumaat - Ahad</span>
              <span className="font-semibold">10:00 AM - 11:00 PM</span>
            </li>
          </ul>

          <div className="mt-6 flex items-start gap-3 rounded-sm bg-muted p-4 text-sm text-muted-foreground">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p>
              * Tutup 2 jam setiap Jumaat (12:30 PM - 2:30 PM) kecuali cawangan
              Seremban Jaya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
