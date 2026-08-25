import { BranchImage } from "./BranchImage";

const categories = [
  {
    title: "Vintage Sportswear & Grails",
    desc: "Jersi retro, trackt op & jaket sukan klasik.",
    src: "/gallery/sportswear.jpg",
    fallback:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800",
  },
  {
    title: "Denim & Streetwear Racks",
    desc: "Rak denim Jepun, flannel & streetwear pilihan.",
    src: "/gallery/denim.jpg",
    fallback:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800",
  },
  {
    title: "Kasut & Sneakers Corner",
    desc: "Sneakers berjenama, boot kerja & kasut kulit.",
    src: "/gallery/sneakers.jpg",
    fallback:
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=800",
  },
  {
    title: "Toys & Collectibles Vault",
    desc: "Mainan kanak-kanak, figurine & barang koleksi.",
    src: "/gallery/toys.jpg",
    fallback:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800",
  },
  {
    title: "Bric-a-Brac & Barangan Rumah",
    desc: "Pinggan mangkuk, hiasan rumah & perabot terpakai.",
    src: "/gallery/bric-a-brac.jpg",
    fallback:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800",
  },
  {
    title: "Gudang Borong Guni Jenjarom HQ",
    desc: "Stok bale & tokol untuk peniaga borong.",
    src: "/gallery/warehouse.jpg",
    fallback:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
  },
];

export function StoreGallery() {
  return (
    <section id="galeri" className="border-b border-border bg-card/40 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Galeri Visual
          </span>
          <h2 className="mt-3 font-display text-4xl uppercase tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Suasana & Rak Gudang JBR Bundle
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ribuan pilihan pakaian vintage, kasut berjenama, mainan kanak-kanak, dan
            barangan rumah menanti anda.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <article
              key={c.title}
              className={`group relative overflow-hidden rounded-sm border border-border bg-card ${
                i === 0 || i === 5 ? "lg:row-span-2" : ""
              }`}
            >
              <div
                className={`overflow-hidden ${
                  i === 0 || i === 5 ? "aspect-[4/5]" : "aspect-[16/10]"
                }`}
              >
                <BranchImage
                  src={c.src}
                  fallback={c.fallback}
                  alt={`${c.title} di JBR Bundle`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-xl uppercase leading-tight tracking-wide text-foreground">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </div>
              <span className="absolute left-4 top-4 rounded-sm bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                Seksyen
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}