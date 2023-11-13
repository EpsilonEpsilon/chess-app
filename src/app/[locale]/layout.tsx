import React from "react";
import '@/shared/style/global.css';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {openSans} from "@public/assets/fonts/OpenSans";
import {Root} from "./Root"
import favicon from "@public/assets/svg/favicon.svg"
import {Analytics} from '@vercel/analytics/react';
import AuthProvider from "@/model/auth/AuthProvider";
import RequestManager from "@/model/requests/RequestManager";
import Api from "@/api";
import {cookies} from "next/headers";



export function generateStaticParams() {
    return [{locale: 'en'}];
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
    const userProfile = await fetchUserProfile();
  return (
      <html lang={locale} className = {openSans.className}>
      <head>
          <title>Chess Application</title>
          <link rel='icon' href={favicon.src}/>
      </head>
      <body  suppressHydrationWarning={true}>
          <NextIntlClientProvider locale={locale} messages={messages}>
              <Root>
                  <AuthProvider userProfile={userProfile?.data}>
                      {children}
                  </AuthProvider>
              </Root>
              <Analytics mode = {"production"}/>
          </NextIntlClientProvider>
      </body>
      </html>
  )
}

async function fetchUserProfile(){
    const token = cookies().get("token")?.value
    if(!token) return;
    RequestManager.headers = {
        ...RequestManager.headers,
        "Authorization":`Bearer ${token}`,
    }
    const response =  await Api.user.getProfile();
    return response.data;
}


