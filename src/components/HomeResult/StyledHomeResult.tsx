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

    &.result_height {
      min-height: ${toRem(100)};
    }
  }
`;

export { StyledHomeResult };
