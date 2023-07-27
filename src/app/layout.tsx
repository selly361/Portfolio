import "./styles/globals.css";

import { Metadata } from "next/types";
import { Space_Grotesk } from "next/font/google";

const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore a collection of my work and projects, showcasing my skills and passions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={SpaceGrotesk.className}>{children}</body>
    </html>
  );
}
