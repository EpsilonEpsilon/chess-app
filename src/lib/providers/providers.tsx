import React, {ReactNode} from "react";
import {ReduxProvider, Registry, ThemeProvider} from "./index"
import {AbstractIntlMessages} from "use-intl";
import {NextIntlClientProvider} from "next-intl";

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
                    <ReduxProvider>
                        {children}
                    </ReduxProvider>
                </ThemeProvider>
            </Registry>
        </NextIntlClientProvider>
    )
}


export default Providers;
