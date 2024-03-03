import {theme} from "@/lib/theme";

type CustomTheme = typeof theme

declare module "styled-components"{
    interface DefaultTheme extends CustomTheme {}
}
