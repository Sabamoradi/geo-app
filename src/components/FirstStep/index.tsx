import { useEffect, useState } from "react";
import MainStyles from "../../styles/mainStyles";
import Input from "../Input";
import { localTexts } from "../../locals/text";

const FirstStep = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="global-box">
      <Input
        placeholder={localTexts.mobileNum}
        value={inputValue}
        type={'tel'}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FirstStep;
