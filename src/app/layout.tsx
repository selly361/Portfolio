import "./globals.css";

import { Metadata } from "next/types";
import { Space_Grotesk } from "next/font/google";

const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore a collection of my work and projects, showcasing my skills and passions.",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={SpaceGrotesk.className}>{children}</body>
    </html>
  );
}
