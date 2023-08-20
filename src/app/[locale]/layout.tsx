'use client'
import StyledComponentsRegistry from '../lib/registry';
import styled, {ThemeProvider} from "styled-components";
import theme from "@/theme";
import React from "react";
import '@/style/global.css';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {openSans} from "@/fonts/OpenSans";
import {Root} from "./Root"



export function generateStaticParams() {
    return [{locale: 'de'}, {locale: 'de'}];
}



export default async function RootLayout({children,  params: {locale}}: {
  children: React.ReactNode,
    params:{locale:string}
}) {
    let messages;
    try {
        messages = (await import(`./../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }


  return (
      <html lang={locale} className = {openSans.className}>
      <head>
          <title>Chess Application</title>
      </head>
      <body  suppressHydrationWarning={true}>
          <StyledComponentsRegistry>
              <ThemeProvider theme={theme}>
                  <NextIntlClientProvider locale={locale} messages={messages}>
                      <Root>{children}</Root>

                  </NextIntlClientProvider>
              </ThemeProvider>
          </StyledComponentsRegistry>
      </body>
      </html>
  )
}


