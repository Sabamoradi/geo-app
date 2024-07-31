import styled from "styled-components";
import { colors } from "../../styles/constants";
import { toRem } from "../../styles/functions";
import { fontFamilyClass } from "../../styles/mixins";

const StyledInput = styled.input`
  &.input_wrapper {
    padding: ${toRem(12)};
    border: ${toRem(1)} solid ${colors.grayEA};
    border-radius: ${toRem(16)};
    height: ${toRem(48)};
    text-align: right;
    ${fontFamilyClass};

    &:focus {
      outline: none;
    }

    &.input_error {
      border-color: red;
    }
  }
`;

const Container = styled.div`
  &.input_container {
  }
`;

export { Container, StyledInput };
