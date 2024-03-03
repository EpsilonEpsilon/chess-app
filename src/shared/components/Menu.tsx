import styled from "styled-components";
import {useTranslations} from "use-intl";

type IMenuElement = {label?:string, $customHeight?:number, $x:number, $y:number, id:number};
const menuElements:IMenuElement[] = [
    {
        id:0,
        $customHeight:37,
        $x:-23,
        $y:0
    },
]


const Menu = ()=>{
    const t = useTranslations();
    return(
        <Container>
            {menuElements.map(({id, label, ...rest}) => (
                <MenuItem key = {id} {...rest} children = {<Label children = {label}/>} />
            ))}
        </Container>
    )
}

export default Menu;


const Container = styled.aside`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 145px;
  height: 100vh;
  background: ${props => props.theme.colors.backgroundSecondary.toString()};
`

const Label = styled.label`
`


const MenuItem = styled.div<{$x:number, $y:number, $customHeight?:number}>`
    width: calc(100% - 5px);
    cursor: pointer;
    height: ${props => `${props.$customHeight}px` || "46px"};
    padding-left: 5px;
    padding-top: 5px;
    &:hover{
      background: ${props => props.theme.colors.backgroundSecondary.darken(0.3).toString()}
    }
    &:after{
      content:"";
      display: block;
      width: 100%;
      height: 100%;
      background-image: url("/images/icon-sprites.png");
      background-size: 150px auto;
      background-repeat: no-repeat;
      background-position:${props => `${props.$x}px ${props.$y}px`} ;
    }
`


