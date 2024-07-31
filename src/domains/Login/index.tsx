import { useEffect, useState } from "react";
import FirstStep from "../../components/FirstStep";
import StyledLogin from "./StyledLogin";
import { useAppSelector } from "../../hooks/useDispatch";
import { selectStep_Event } from "../../store/general/slice";
import SecondStep from "../../components/SecondStep";

const Login = () => {
  const select_step = useAppSelector(selectStep_Event);
  const renderContainer = () => {
    switch (select_step) {
      case "1":
        return <FirstStep />;
      case "2":
        return <SecondStep/>;
    }
  };
  return <StyledLogin className="wrapper">{renderContainer()}</StyledLogin>;
};

export default Login;
