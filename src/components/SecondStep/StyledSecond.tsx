import styled from "styled-components";
import { toRem } from "../../styles/functions";
import { colors } from "../../styles/constants";

const Container = styled.div`
  &.box_container {
    display: flex;
    .input_container {
      padding: ${toRem(8)};
      input {
        text-align: center;
      }
    }
  }
`;

const SecondPart = styled.div`
  display: flex;
  padding: ${toRem(16)} ${toRem(8)};
  width: 100%;
`;

const CounterWrapper = styled.div`
  display: flex;
  font-size: ${toRem(14)};
  color: ${colors.primary};
  font-weight: 500;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  direction: rtl;

  p {
    font-size: ${toRem(14)};
    color: ${colors.black31};
  }
`;

const CountItem = styled.div`
  color: ${colors.primary};
  cursor: pointer;
`;

const TopSection = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
  .left_icon {
    position: absolute;
    left: 0;
    cursor: pointer;
  }
`;

export { Container, SecondPart, CounterWrapper, CountItem, TopSection };
