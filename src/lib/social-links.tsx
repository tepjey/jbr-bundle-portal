import { Facebook, Instagram, Youtube } from "lucide-react";

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/jbrbundleofficial",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/jbrbundle/",
    icon: Instagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@jbrbundle",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-6.93a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@JBRBUNDLECHANNEL",
    icon: Youtube,
  },
];

export const GENERAL_HOTLINE_URL =
  "https://wa.me/60136295755?text=Salam%20JBR%20Bundle,%20saya%20ada%20pertanyaan%20umum";

export const B2B_HQ_URL =
  "https://wa.me/60331915676?text=Salam%20JBR%20Bundle,%20saya%20berminat%20dengan%20B2B%20Borong%20Guni%20/%20Tokol.%20Mahu%20dapatkan%20sebut%20harga%20dan%20maklumat%20lanjut.";
