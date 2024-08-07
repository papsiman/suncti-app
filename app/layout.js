import { Roboto } from "next/font/google";
import "./globals.css";
import COMP_NAVBAR from "@/components/navbar";
import FOOTER from "@/components/footer";

//Fontawesom setting
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

const roboto = Roboto({
  weight: ['100','300','400','500','700','900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "SunCTI",
  description: "Microsoft Team Phone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <FOOTER/>
        </body>
    </html>
  );
}
