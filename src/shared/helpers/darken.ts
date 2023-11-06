import Color from "color";

export const darken = (value:string, ration:number):string =>{
    const color = Color(value);
    return color.darken(ration).hex()
}