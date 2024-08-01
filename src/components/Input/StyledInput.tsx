import styled from "styled-components";
import { colors } from "../../styles/constants";
import { toRem } from "../../styles/functions";
import { fontFamilyClass } from "../../styles/mixins";

const StyledInput = styled.input`
  &.input_wrapper {
    padding: ${toRem(12)};
    border: ${toRem(1)} solid ${colors.grayEA};
    border-radius: ${toRem(8)};
    text-align: right;
    ${fontFamilyClass};
    font-size: ${toRem(14)};

    &:focus {
      outline: none;
    }

    &.input_error {
      border:${toRem(2)} solid ${colors.red};
    }
  }
`;

const Container = styled.div`
  &.input_container {
    width: 100%;
    position: relative;
    height: inherit;
  }
`;

export { Container, StyledInput };
