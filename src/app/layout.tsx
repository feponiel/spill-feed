import { Theme } from "@/providers/Theme";
import type { Metadata } from "next";
import StyledComponentsRegistry from '@/lib/styled-components/registry'
import { Roboto } from 'next/font/google'
import { ReactQueryProvider } from "@/lib/react-query/react-query-provider";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: {
    default: "Spill",
    template: "%s | Spill"
  },
  
  description: "A simple feed application where you can share what's new with people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <ReactQueryProvider>
          <StyledComponentsRegistry>
            <Theme>
              {children}
            </Theme>
          </StyledComponentsRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
