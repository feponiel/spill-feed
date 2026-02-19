import { Header } from "@/components/Header";
import { PrivateLayoutContainer } from "./styles";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrivateLayoutContainer>
      <Header />
    
      {children}
    </PrivateLayoutContainer>
  )
}
