import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ERP Financeiro",
  description: "Sistema de Vendas e Cobranças",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
