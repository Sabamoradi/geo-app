import styled, { keyframes } from "styled-components";
import { toRem } from "../../styles/functions";
import { colors } from "../../styles/constants";

const showToast = keyframes`
  from {
		transform: translateX(100%);
	}

	to {
		transform: translateX(0);
	}
`;

const ContainerToast = styled.div`
  font-size: ${toRem(14)};
  border-radius: ${toRem(10)};
  position: fixed;
  z-index: 10;
  width: ${toRem(250)};
  bottom: ${toRem(40)};
  right: ${toRem(12)};
  animation: ${showToast} 0.6s ease-in-out;
  height: ${toRem(50)};
  color: ${colors.white};
  text-align: center;

  &.error-bg {
    background-color: ${colors.red};
  }
`;

export { ContainerToast };
