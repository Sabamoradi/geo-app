import { useState } from "react";
import Input from "../Input";
import { localTexts } from "../../locals/text";
import { IranMobileNumber } from "../../utils/validation";

const FirstStep = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsInvalid(e.target.value !== '' && !IranMobileNumber(e.target.value));
  };

  return (
    <div className="global-box">
      <Input
        placeholder={localTexts.mobileNum}
        value={inputValue}
        type={'tel'}
        onChange={handleInputChange}
        isInvalid={isInvalid}
      />
    </div>
  );
};

export default FirstStep;
