import { useState } from "react";
import Input from "../Input";
import { localTexts } from "../../locals/text";
import { IranMobileNumber } from "../../utils/validation";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatch";
import {
  selectSetMobileNumber,
  selectStep_Event,
  set_mobileNumber,
  set_StepEvent,
} from "../../store/general/slice";
const logo = require("../../assets/icons/Logo.svg").default;

const FirstStep = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const dispatch = useAppDispatch();
  const select_step = useAppSelector(selectStep_Event);
  const selectMobileNumber = useAppSelector(selectSetMobileNumber);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(set_mobileNumber(e.target.value));
    setIsInvalid(e.target.value !== "" && !IranMobileNumber(e.target.value));
  };

  const nextStep = () => {
    dispatch(set_StepEvent((Number(select_step) + 1).toString()));
  };

  return (
    <div className="global-box">
      <div className="img_wrapper">
        <img src={logo} />
      </div>
      <div className="text_wrapper mt-32 mb-32">
        <h2>{localTexts.loginTitle}</h2>
        <p>{localTexts.loginDesc}</p>
      </div>
      <Input
        placeholder={localTexts.mobileNum}
        value={selectMobileNumber}
        type={"tel"}
        onChange={handleInputChange}
        isInvalid={isInvalid}
        fullWidth={true}
      />
      <Button
        contentClassName={"mt-24"}
        title={localTexts.sendOtp}
        disabled={isInvalid === true || selectMobileNumber.length === 0}
        onClick={() => nextStep()}
        width={'100%'}
      />

      <div className="text_wrapper mt-32">
        <p>{localTexts.doNotHaveAccount}</p>
      </div>
    </div>
  );
};

export default FirstStep;
