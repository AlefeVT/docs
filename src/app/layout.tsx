import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ClientProviders from "./ClientProviders";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DocZone",
  description: "Sistema de gerenciamento de documentos",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ClientProviders>
          <NuqsAdapter>{children}</NuqsAdapter>
        </ClientProviders>
      </body>
    </html>
  );
}
