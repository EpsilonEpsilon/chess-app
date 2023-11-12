import styled from "styled-components";

export const Error = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
    margin:10px 0;
    color:${props => props.theme.palette.primary.color.colorDanger};
    height: 20px;
`
