import styled from "styled-components";
import { colors } from "../../styles/constants";
import { toRem } from "../../styles/functions";

const backgroundImage = require("../../assets/img/Backgroundpattern.png");

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: contain;
  background-repeat: repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeBox = styled.div`
  background-color: ${colors.white};
  box-shadow: ${toRem(16)} ${toRem(16)} ${toRem(16)} ${toRem(16)}-5px 9px 23px 0px ${colors.grayCf};
  border-radius: ${toRem(16)};
  padding: ${toRem(42)} ${toRem(16)};
  width: 75%;
`;
export { HomeContainer, HomeBox };
