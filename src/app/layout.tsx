"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./common/header";
import Footer from "./common/footer";
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/lib/query/client";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </QueryClientProvider>
  );
}
