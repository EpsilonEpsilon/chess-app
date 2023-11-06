import {ReadonlyHeaders} from "next/dist/server/web/spec-extension/adapters/headers";

export const detectIsMobile = (headersList:ReadonlyHeaders)=>{
    const userAgent = headersList.get('user-agent');
    return !!userAgent!.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    );
}