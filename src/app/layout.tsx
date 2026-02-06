import { Theme } from "@/providers/Theme";
import type { Metadata } from "next";
import StyledComponentsRegistry from '@/lib/styled-components/registry'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: "Spill",
  description: "A simple feed application where you can share what's new with people.",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <StyledComponentsRegistry>
          <Theme>
            <h1>Public</h1>
            {children}
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
