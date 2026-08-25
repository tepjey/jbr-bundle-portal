import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { BranchDirectory } from "@/components/BranchDirectory";
import { OperatingHours } from "@/components/OperatingHours";
import { SalesSections } from "@/components/SalesSections";
import { WholesaleSection } from "@/components/WholesaleSection";
import { PaymentMethods } from "@/components/PaymentMethods";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://jbrbundle.app";
const OG_IMAGE =
  SITE_URL + "/__l5e/assets-v1/9997fcdd-2b17-4258-bf60-bd9cc4c3235c/jbr-banner.png";

const branchSchemas = [
  {
    name: "JBR Bundle Lotus's Seremban Jaya",
    region: "Seremban",
    state: "Negeri Sembilan",
    telephone: "+60115949 5676",
    hours: "Mo-Su 10:00-22:00",
  },
  {
    name: "JBR Bundle Shah Alam",
    region: "Shah Alam",
    state: "Selangor",
    telephone: "+60111195 5676",
    hours: "Mo-Su 10:00-24:00",
  },
  {
    name: "JBR Bundle Bandar Sri Damansara",
    region: "Kuala Lumpur",
    state: "Kuala Lumpur",
    telephone: "+601435 95676",
    hours: "Mo-Su 10:00-24:00",
  },
  {
    name: "JBR Bundle Bangi (EVO Mall)",
    region: "Bangi",
    state: "Selangor",
    telephone: "+601326 05676",
    hours: "Mo-Su 10:00-22:00",
  },
  {
    name: "JBR Bundle Subang USJ (Palazzo 19 Mall)",
    region: "Subang Jaya",
    state: "Selangor",
    telephone: "+601430 95676",
    hours: "Mo-Su 10:00-22:00",
  },
  {
    name: "JBR Bundle Klang",
    region: "Klang",
    state: "Selangor",
    telephone: "+60111675 5676",
    hours: "Mo-Su 10:00-24:00",
  },
  {
    name: "JBR Bundle Balakong",
    region: "Balakong",
    state: "Selangor",
    telephone: "+601436 75676",
    hours: "Mo-Su 10:00-24:00",
  },
  {
    name: "JBR Bundle Hulu Langat",
    region: "Hulu Langat",
    state: "Selangor",
    telephone: "+601624 85676",
    hours: "Mo-Su 10:00-24:00",
  },
  {
    name: "JBR Bundle Kanchong Darat (Banting)",
    region: "Banting",
    state: "Selangor",
    telephone: "+601430 15676",
    hours: "Mo-Su 10:00-24:00",
  },
  {
    name: "JBR Bundle Banting (Muara)",
    region: "Banting",
    state: "Selangor",
    telephone: "+601430 35676",
    hours: "Mo-Su 10:00-22:00",
  },
  {
    name: "JBR Bundle Jenjarom (Headquarters & Warehouse)",
    region: "Jenjarom",
    state: "Selangor",
    telephone: "+60331915676",
    hours: "Mo-Sa 08:30-17:30",
  },
].map((branch) => ({
  "@type": "LocalBusiness",
  name: branch.name,
  image: OG_IMAGE,
  url: SITE_URL + "/#cawangan",
  telephone: branch.telephone,
  openingHours: branch.hours,
  currenciesAccepted: "MYR",
  priceRange: "$",
  address: {
    "@type": "PostalAddress",
    addressLocality: branch.region,
    addressRegion: branch.state,
    addressCountry: "MY",
    ...(branch.region === "Shah Alam" && {
      streetAddress:
        "LOT 45, 46, 57, 58, 59 dan 63, Seksyen 1, Mukim, Kampung Batu Tiga, 40150 Shah Alam, Selangor",
    }),
  },
}));


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "JBR BUNDLE — Gedung Bundle Terbesar Malaysia | Sejak 2007",
      },
      {
        name: "description",
        content:
          "JBR Bundle: syurga thrifting & vintage grails terbesar di Malaysia. Lebih 10 cawangan warehouse di Selangor, Kuala Lumpur & Negeri Sembilan. Buka 7 hari seminggu.",
      },
      {
        property: "og:title",
        content: "JBR BUNDLE — Gedung Bundle Terbesar Malaysia | Sejak 2007",
      },
      {
        property: "og:description",
        content:
          "JBR Bundle: syurga thrifting & vintage grails terbesar di Malaysia. Lebih 10 cawangan warehouse di Selangor, Kuala Lumpur & Negeri Sembilan.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": branchSchemas,
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <Hero />
      <Highlights />
      <BranchDirectory />
      <OperatingHours />
      <SalesSections />
      <WholesaleSection />
      <PaymentMethods />
      <Footer />
    </main>
  );
}
