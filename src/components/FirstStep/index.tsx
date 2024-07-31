import { useState } from "react";
import Input from "../Input";
import { localTexts } from "../../locals/text";
import { IranMobileNumber } from "../../utils/validation";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatch";
import { selectStep_Event, set_StepEvent } from "../../store/general/slice";

const FirstStep = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const dispatch = useAppDispatch();
  const select_step = useAppSelector(selectStep_Event);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsInvalid(e.target.value !== "" && !IranMobileNumber(e.target.value));
  };

  const nextStep = () =>{
    dispatch(set_StepEvent((Number(select_step) + 1).toString()));
  }

  return (
    <div className="global-box">
      <Input
        placeholder={localTexts.mobileNum}
        value={inputValue}
        type={"tel"}
        onChange={handleInputChange}
        isInvalid={isInvalid}
      />
      <Button contentClassName={'mt-24'} title={localTexts.sendOtp} onClick={() => nextStep()}/>
    </div>
  );
};

export default FirstStep;
