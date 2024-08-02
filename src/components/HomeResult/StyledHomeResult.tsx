import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/constants";
import { toRem } from "../../styles/functions";

const StyledHomeResult = styled.div`
  &.result_wrapper {
    background-color: ${colors.grayF6};
    width: 100%;
    min-height: 0;
    transition: all 0.3s;
    overflow: hidden;
    border-radius: ${toRem(12)};
    display: flex;
    justify-content: space-between;

    @media (max-width: 992px) {
      flex-direction: column;
    }

    &.result_height {
      padding: ${toRem(16)};
      min-height: ${toRem(100)};
    }
  }
`;

const StyledLeftSection = styled.div`
  ul{
    list-style:none;
    li{
      display:flex;
      @media (max-width: 768px) {
          flex-direction: column;
      }
    }
  }

  .item_wrapper{
      display:flex;
      font-size:${toRem(16)};
      padding-right:${toRem(32)};
      padding-bottom:${toRem(12)};
      @media (max-width: 592px) {
        flex-direction: column;
      }
      
      .title{
        color:${colors.gray7e};
      }
      .text{
        color:${colors.black31};
        font-weight:500;
        padding-left:${toRem(8)};
      }
  }
}
`;

export { StyledHomeResult, StyledLeftSection };
