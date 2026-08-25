import { ShieldCheck } from "lucide-react";

const methods = [
  "Cash / Tunai",
  "DuitNow QR",
  "Touch 'n Go eWallet",
  "Boost",
  "GrabPay",
  "ShopeePay",
  "Visa / Mastercard",
  "MyDebit",
  "UnionPay",
  "JCB",
  "MCash",
];

export function PaymentMethods() {
  return (
    <section className="border-b border-border bg-background py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Kaedah Bayaran
            </span>
          </div>
          <h2 className="font-display text-3xl uppercase tracking-tight text-foreground sm:text-4xl">
            Bayar Dengan Yakin
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Kami menerima pelbagai kaedah pembayaran untuk kemudahan semua pelanggan.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {methods.map((method) => (
            <span
              key={method}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {method}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
