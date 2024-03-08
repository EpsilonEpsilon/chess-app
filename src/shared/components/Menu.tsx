import styled from "styled-components";
import {useTranslations} from "use-intl";

type IMenuElement = {label?:Paths<IntlMessages>, $customHeight?:number, $x:number, $y:number, id:number};
const menuElements:IMenuElement[] = [
    {
        id:0,
        $customHeight:37,
        $x:-23,
        $y:0
    },
    {
        id:1,
        $customHeight:46,
        $x:-23,
        $y:-75,
        label:"Home.play"
    },
    {
        id:2,
        $customHeight:46,
        $x:-23,
        $y:-150,
        label:"Home.puzzles"
    },
    {
        id:3,
        $customHeight:46,
        $x:-23,
        $y:-185,
        label:"Home.learn"
    },
    {
        id:4,
        $customHeight:46,
        $x:-23,
        $y:-220,
        label:"Home.watch"
    },
    {
        id:5,
        $customHeight:46,
        $x:-23,
        $y:-255,
        label:"Home.news"
    }

]



const Menu = ()=>{
    const t = useTranslations();
    return(
        <Container>
            {menuElements.map(({id, label, ...rest}) => (
                <MenuItem $isMain = {!label} key = {id} {...rest} children = {<Label children = {label && t(label)}/>} />
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


const MenuItem = styled.div<{$x:number, $y:number, $customHeight?:number, $isMain:boolean}>`
    width: calc(100% - 10px);
    cursor: pointer;
    height: ${props => `${props.$customHeight}px` || "46px"};
    padding-left: 10px;
    padding-top: 5px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
    font-weight:500;
    &:hover{
      background: ${props => props.theme.colors.backgroundSecondary.darken(0.3).toString()}
    }
    &:after{
      content:"";
      display: block;
      width: ${props => props.$isMain ? "100%" : "30px"};
      height: ${props => props.$isMain ? "100%" : "30px"};
      background-image: url("/images/icon-sprites.png");
      background-size: 150px auto;
      background-repeat: no-repeat;
      background-position:${props => `${props.$x}px ${props.$y}px`} ;
    }
`


