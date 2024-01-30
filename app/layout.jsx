import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'],  variable: "--font-montserrat" });

import '@styles/globals.css';

export const metadata = {
  title: "Enveus of Creation",
  description: "Enveus guild is one of the largest oce guilds playing a large variety of games with focus on MMorpg, arpg and survival genres"
};
 
export default function RootLayout({ children }) {
 return (
    <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/assets/favicon/site.webmanifest"/>
      </head>
      <body className="bg-enveus-primary bg-main bg-cover bg-no-repeat text-white">
        {children}
      </body>
    </html>
  )
}
