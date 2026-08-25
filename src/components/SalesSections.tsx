import {
  Shirt,
  Footprints,
  ToyBrick,
  Tag,
  Sofa,
  Gem,
  Snowflake,
  Home,
} from "lucide-react";

const departments = [
  {
    icon: Shirt,
    title: "Pakaian",
    subtitle: "Kanak-kanak, Lelaki & Wanita",
    availability: "Semua Cawangan",
    desc: "Pilihan besar pakaian bundle untuk seisi keluarga, dari kasual hingga streetwear ikonik.",
  },
  {
    icon: Footprints,
    title: "Kasut, Beg & Topi / Caps",
    subtitle: "Sneakers, Bags & Headwear",
    availability: "Semua Cawangan",
    desc: "Kasut sukan, boots, beg lasak dan topi vintage untuk gaya harian dan koleksi.",
  },
  {
    icon: ToyBrick,
    title: "Seksyen Permainan Kanak-kanak",
    subtitle: "Toys & Collectibles",
    availability: "7 Cawangan Utama",
    desc: "Mainan antik, action figures, LEGO, dan barangan koleksi untuk kanak-kanak mahupun dewasa.",
  },
  {
    icon: Tag,
    title: "Seksyen Khas RM2 & RM5/1KG",
    subtitle: "Best Value Deals",
    availability: "Shah Alam, Sri Damansara, Hulu Langat",
    desc: "Jimat besar dengan harga RM2 atau RM5 untuk 1KG pakaian terpilih di cawangan istimewa.",
  },
  {
    icon: Sofa,
    title: "Ruang Bric-a-Brac",
    subtitle: "Keramik & Kelengkapan Rumah",
    availability: "Semua Cawangan",
    desc: "Barangan unik, keramik, aksesori dapur, dan hiasan rumah yang sukar dijumpai di tempat lain.",
  },
  {
    icon: Gem,
    title: "Ruang Eksklusif & Item Koleksi",
    subtitle: "Vintage Vault",
    availability: "Cawangan Terpilih",
    desc: "Item premium, vintage berharga, dan koleksi eksklusif untuk peminat sejati.",
  },
  {
    icon: Snowflake,
    title: "Winter, Camping & Hiking Zone",
    subtitle: "Outdoor & Adventure Gear",
    availability: "Cawangan Terpilih",
    desc: "Pakaian musim sejuk, kelengkapan perkhemahan, dan aksesori hiking untuk pengembara.",
  },
  {
    icon: Home,
    title: "Ruang Perabot & Basikal",
    subtitle: "Perabot Rumah & Basikal Terpakai",
    availability: "Cawangan Terpilih",
    desc: "Perabot terpakai berkualiti, basikal, dan barangan besar untuk rumah dan gaya hidup.",
  },
];

export function SalesSections() {
  return (
    <section id="seksyen" className="border-b border-border bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Seksyen Jualan
          </span>
          <h2 className="mt-3 font-display text-4xl uppercase tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Ruang & Seksyen Jualan
          </h2>
          <p className="mt-4 text-muted-foreground">
            JBR Bundle menyusun pengalaman thrifting mengikut kategori supaya
            pembeli mudah menjelajah dan jumpa harta karun.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((dept) => (
            <article
              key={dept.title}
              className="group relative flex flex-col rounded-sm border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-sm"
            >
              <div className="absolute -top-px left-4 right-4 h-0.5 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-border bg-muted text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <dept.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-2xl uppercase leading-tight tracking-wide text-foreground">
                {dept.title}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary">
                {dept.subtitle}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{dept.desc}</p>
              <div className="mt-auto pt-4">
                <span className="inline-block rounded-sm border border-border bg-muted px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground">
                  {dept.availability}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
