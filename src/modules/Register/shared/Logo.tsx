import styled from "styled-components";
import Link from "next/link";
import logo from "@public/assets/svg/logo.svg"
export const Logo = styled(Link)`
  display: block;
  width: 165px;
  height: 45px;
  background: url(${logo.src}) no-repeat;
`
