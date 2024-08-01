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

  * {
    box-sizing: border-box !important;
    -webkit-tap-highlight-color: transparent;
  }
  .d-flex{
    display:flex;
  }

  .global-box {
    border:${toRem(1)} solid ${colors.grayEA};
    box-shadow:0 0 0 #CFCFCF14;
    padding:${toRem(42)} ${toRem(16)};
    border-radius:${toRem(16)};
    display: flex;
    flex-direction: column;
    align-items: center;
    width:${toRem(375)};
    background: ${colors.white};

    .text_wrapper{
      text-align:center;
      direction:rtl;
      h2 {
        font-size:${toRem(16)};
        color:${colors.black31}
      }
      p {
        font-size:${toRem(14)};
        color:${colors.gray7e}
      }
      .link{
        color: ${colors.primary};
        font-weight:bold;
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  

  .mt-24{
    margin-top:${toRem(24)}
  }
  .mt-32{
    margin-top:${toRem(32)}
  }
  .mb-32{
    margin-bottom:${toRem(32)}
  }

  .border-right{
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
  }
  .border-left{
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
  }
`;

export default MainStyles;
