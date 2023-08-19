import Color from "color";

export const lighten = (value:string, ration:number) => {
    const color =  Color(value);

    return color.lighten(ration).hex();
}