import { Inter, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const vonique = localFont({
  src: [
    {
      path: "../../public/vonique-64//Vonique64.ttf",
    },
  ],
});
