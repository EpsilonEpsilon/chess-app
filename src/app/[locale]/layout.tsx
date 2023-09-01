
import React from "react";
import '@/style/global.css';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {openSans} from "@/fonts/OpenSans";
import {Root} from "./Root"
import favicon from "@public/assets/svg/favicon.svg"
import { Analytics } from '@vercel/analytics/react';



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
          <link rel='icon' href={favicon.src}/>
      </head>
      <body  suppressHydrationWarning={true}>
          <NextIntlClientProvider locale={locale} messages={messages}>
              <Root>
                  {children}
              </Root>
              <Analytics mode = {"production"}/>
          </NextIntlClientProvider>
      </body>
      </html>
  )
}


