import { ShieldCheck, Banknote } from "lucide-react";

interface PaymentOption {
  name: string;
  type: "icon" | "image" | "duo";
  logo?: string;
  logos?: string[];
}

const paymentMethods: PaymentOption[] = [
  {
    name: "Cash / Tunai",
    type: "image",
    logo: "https://cdn-icons-png.flaticon.com/512/2331/2331941.png",
  },
  {
    name: "DuitNow QR",
    type: "image",
    logo: "https://github.com/SnorSnor9998/Payment-Icon/raw/master/Other/DuitNow/DuitNow_V1_SQU.svg",
  },
  {
    name: "Touch 'n Go eWallet",
    type: "image",
    logo: "https://github.com/SnorSnor9998/Payment-Icon/raw/master/Wallet/TNG/TNG_V1_SQU.svg",
  },
  {
    name: "Boost",
    type: "image",
    logo: "https://github.com/SnorSnor9998/Payment-Icon/raw/master/Wallet/Boost/Boost_V1_SQU.svg",
  },
  {
    name: "GrabPay",
    type: "image",
    logo: "https://github.com/SnorSnor9998/Payment-Icon/raw/master/Wallet/GrabPay/GrabPay_V4_SQU.svg",
  },
  {
    name: "ShopeePay",
    type: "image",
    logo: "https://github.com/SnorSnor9998/Payment-Icon/raw/master/Wallet/ShopeePay/ShopeePay_V5_SQU.svg",
  },
  {
    name: "Visa / Mastercard",
    type: "duo",
    logos: [
      "https://github.com/SnorSnor9998/Payment-Icon/raw/master/Card/Visa/VISA_V1_SQU.svg",
      "https://github.com/SnorSnor9998/Payment-Icon/raw/master/Card/Master/MASTER_V1_SQU.svg",
    ],
  },
  {
    name: "MyDebit",
    type: "image",
    logo: "https://github.com/SnorSnor9998/Payment-Icon/raw/master/Other/FPX/FPX_V3_SQU.svg",
  },
  {
    name: "UnionPay",
    type: "image",
    logo: "https://github.com/SnorSnor9998/Payment-Icon/raw/master/Card/UnionPay/UNIONPAY_V1_SQU.svg",
  },
  {
    name: "JCB",
    type: "image",
    logo: "https://cdn-icons-png.flaticon.com/512/217/217430.png",
  },
  {
    name: "MCash",
    type: "image",
    logo: "https://github.com/SnorSnor9998/Payment-Icon/raw/master/Wallet/MCash/MCash_V2_SQU.svg",
  },
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

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              className="group flex flex-col items-center justify-between gap-2.5 rounded-2xl border border-border bg-card px-5 py-3.5 text-center transition-all hover:border-primary hover:bg-card/80 min-w-[130px]"
            >
              {/* Text Label on Top */}
              <span className="text-xs sm:text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                {method.name}
              </span>

              {/* Larger Icon/Logo Below */}
              <div className="flex items-center justify-center pt-1">
                {method.type === "icon" && (
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <Banknote className="h-5 w-5 text-emerald-400 transition-colors group-hover:text-primary" />
                  </div>
                )}

                {method.type === "image" && (
                  <img
                    src={method.logo}
                    alt={method.name}
                    className="h-13 w-13 rounded-md object-contain shadow-xs transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                )}

                {method.type === "duo" && (
                  <div className="flex items-center gap-1.5">
                    {method.logos?.map((logoUrl, idx) => (
                      <img
                        key={idx}
                        src={logoUrl}
                        alt={method.name}
                        className="h-13 w-13 rounded-md object-contain shadow-xs transition-transform group-hover:scale-105"
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}