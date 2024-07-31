import { createGlobalStyle } from "styled-components";
import { colors } from "./constants";
import { toRem } from "./functions";

const MainStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: IRANSansXFaNum, sans-serif;
    background-color:${colors.grayFA};
  }

  .global-box {
    border:${toRem(1)} solid ${colors.grayEA};
    box-shadow:0 0 0 #CFCFCF14;
    padding:${toRem(42)} ${toRem(16)};
    border-radius:${toRem(16)}
  }

  .mt-24{
    margin-top:${toRem(24)}
  }
`;

export default MainStyles;
