import React from "react";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Providers} from "@/lib/providers"
import Root from "@/app/[locale]/root";
import {getMessages} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chess application",
  description: "Chess application",
};


export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
    const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
      <Providers messages={messages} locale={locale}>
          <Root>
              {children}
          </Root>
      </Providers>
      </body>
    </html>
  );
}
