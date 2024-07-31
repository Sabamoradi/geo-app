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
`;

const CounterWrapper = styled.div`
  display: flex;
  font-size: ${toRem(14)};
  color: ${colors.primary};
  font-weight: 500;
`;

const CountItem = styled.div`
  color: ${colors.primary};
  cursor: pointer;
`;

export { Container, SecondPart, CounterWrapper,CountItem };
