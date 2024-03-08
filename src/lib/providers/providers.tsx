import React, {ReactNode} from "react";
import {Registry, ThemeProvider} from "./index"
import {AbstractIntlMessages} from "use-intl";
import {NextIntlClientProvider} from "next-intl";
import StoreProvider from "@/lib/providers/store-provider";

interface IProps{
    children:ReactNode,
    messages: AbstractIntlMessages,
    locale:string
}

const Providers:React.FC<IProps> = ({children, messages, locale})=>{
    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            <Registry>
                <ThemeProvider>
                    <StoreProvider>
                        {children}
                    </StoreProvider>
                </ThemeProvider>
            </Registry>
        </NextIntlClientProvider>
    )
}


export default Providers;
