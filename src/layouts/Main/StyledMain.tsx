import styled, { keyframes } from "styled-components";
import { toRem } from "../../styles/functions";

const MainContainer = styled.div`
  
  @media (max-width: 1199px) {
    max-width: 940px;
    margin: 0 auto;
  }
  @media (max-width: 992px) {
    max-width: 720px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    max-width: 540px;
    margin: 0 auto;
  }
  @media (max-width: 592px) {
    max-width: 100%;
    padding: 0 16px;
  }
  @media (min-width: 1200px) {
    max-width: 1050px;
    margin: 0 auto;
  }
  @media (min-width: 1400px) {
    max-width: 1250px;
    margin: 0 auto;
  }
`;

export { MainContainer };
