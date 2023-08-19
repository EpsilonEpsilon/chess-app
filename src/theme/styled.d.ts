// styled.d.ts
import 'styled-components';
import theme from "@/theme/index";
interface IPalette {
    main: string
    contrastText: string
}
declare module 'styled-components' {
    export interface DefaultTheme {
        palette: typeof theme.palette
    }
}


