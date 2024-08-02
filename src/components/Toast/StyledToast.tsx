import styled, { keyframes } from "styled-components";
import { toRem } from "../../styles/functions";
import { colors } from "../../styles/constants";

const showToast = keyframes`
  from {
		transform: translateX(100%);
    opacity: 0;
	}

	to {
		transform: translateX(0);
    opacity: 1;
	}
`;
const hideToast = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const ContainerToast = styled.div<{ visible: boolean }>`
  font-size: ${toRem(14)};
  border-radius: ${toRem(10)};
  position: fixed;
  z-index: 10;
  width: ${toRem(250)};
  bottom: ${toRem(40)};
  right: ${toRem(12)};
  animation: ${({ visible }) => (visible ? showToast : hideToast)} 0.6s forwards;
  height: ${toRem(50)};
  color: ${colors.white};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &.error-bg {
    background-color: ${colors.red};
  }
`;

export { ContainerToast };
