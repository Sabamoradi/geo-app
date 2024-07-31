import styled from "styled-components";
import { colors } from "../../styles/constants";
import { toRem } from "../../styles/functions";
import { fontFamilyClass } from "../../styles/mixins";

const StyledButton = styled.button`
  &.button_wrapper {
    padding: ${toRem(12)};
    border: ${toRem(1)} solid ${colors.grayEA};
    border-radius: ${toRem(16)};
    height: ${toRem(48)};
    width: 100%;
    text-align: center;
    background: linear-gradient(255.96deg, #1043a6 0%, #0c317c 100%);
    color: ${colors.white};
    font-size: ${toRem(16)};
    cursor: pointer;
    ${fontFamilyClass};

    &:focus {
      outline: none;
    }

    &:disabled {
      background: ${colors.disable};
    }
  }
`;

export { StyledButton };
