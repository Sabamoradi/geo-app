import { useEffect, useState } from "react";
import FirstStep from "../../components/FirstStep";
import StyledLogin from "./StyledLogin";

const Login = () => {
  return (
    <StyledLogin className="wrapper">
      <FirstStep />
    </StyledLogin>
  );
};

export default Login;
