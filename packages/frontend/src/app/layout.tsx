"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { WagmiProvider } from "wagmi";
import { config } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import {
  rootstockTestnet,
} from "wagmi/chains";
const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

const config1 = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  chains: [rootstockTestnet],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProvider config={config1}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>{children}</RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
