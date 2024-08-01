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
  box-shadow: ${toRem(16)} ${toRem(16)} ${toRem(16)} ${toRem(16)}
    ${colors.grayE6};
  border-radius: ${toRem(16)};
  padding: ${toRem(42)} ${toRem(24)};
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  direction: rtl;
  width: 70%;
  margin-top: ${toRem(32)};
`;

const ErrorTitle = styled.p`
  font-size: ${toRem(12)};
  color: ${colors.red};
`;
const TitleWrapper = styled.div`
  text-align: center;
  h2 {
    margin: 0;
    font-size: ${toRem(20)};
    font-weight: 500;
    color: ${colors.black31};
  }

  p {
    font-size: ${toRem(16)};
    color: ${colors.gray7e};
  }
`;

export { HomeContainer, HomeBox, SearchWrapper, TitleWrapper , ErrorTitle };
