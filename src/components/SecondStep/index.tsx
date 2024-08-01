import React, {
  ChangeEvent,
  useRef,
  useState,
  KeyboardEvent,
  useEffect,
} from "react";
import Input from "../Input";
import {
  Container,
  CounterWrapper,
  CountItem,
  SecondPart,
  TopSection,
} from "./StyledSecond";
import { localTexts } from "../../locals/text";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatch";
import {
  selectSetMobileNumber,
  set_StepEvent,
} from "../../store/general/slice";

const logo = require("../../assets/icons/Logo.svg").default;
const back = require("../../assets/icons/arrow-left.svg").default;

const SecondStep = () => {
  const [otpValue, setOtpValue] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [counter, setCounter] = useState(10);
  const [inValid, setInValid] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mobileNumber = useAppSelector(selectSetMobileNumber);

  const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (value.length <= 1) {
      const newOtp = [...otpValue];
      newOtp[index] = value;
      setOtpValue(newOtp);

      if (value.length === 1 && index < otpValue.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && index > 0 && otpValue[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const resetCounter = () => {
    setCounter(10);
  };

  useEffect(() => {
    if (counter > 0) {
      const interval = setInterval(() => {
        setCounter((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [counter]);

  const nextStep = () => {
    const otpString = "1111";
    if (otpString === otpValue.join("") && counter > 0) {
      navigate("/home");
      dispatch(set_StepEvent((1).toString()));
    } else {
      setInValid(true);
    }
  };

  return (
    <div className="global-box">
      <TopSection>
        <div
          className="left_icon"
          onClick={() => dispatch(set_StepEvent((1).toString()))}
        >
          <img src={back} alt="back" />
        </div>
        <div className="img_wrapper">
          <img src={logo} alt="logo" />
        </div>
      </TopSection>
      <div className="text_wrapper mt-32 mb-32">
        <h2>{localTexts.fillOtp}</h2>
        <p>کد تایید برای شماره {mobileNumber} پیامک شد</p>
      </div>
      <Container className="box_container">
        {otpValue.map((value, index) => (
          <Input
            key={index}
            width={"48"}
            height={"auto"}
            type="text"
            maxLength={1}
            value={value}
            onChange={(e) =>
              handleInput(e as ChangeEvent<HTMLInputElement>, index)
            }
            onFocus={(e) => e.currentTarget.select()}
            onKeyUp={(e) => handleKeyUp(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            isInvalid={inValid}
          />
        ))}
      </Container>
      <SecondPart>
        <CounterWrapper>
          <p>{localTexts.doNotGetOtp}</p>
          {counter === 0 ? (
            <CountItem onClick={() => resetCounter()}>
              {localTexts.sendAgain}
            </CountItem>
          ) : (
            `00:${counter}`
          )}
        </CounterWrapper>
      </SecondPart>
      <Button
        contentClassName={"mt-24"}
        title={localTexts.confirm}
        onClick={() => nextStep()}
        disabled={otpValue.join("").length === 4 && counter > 0 ? false : true}
        width={"100%"}
      />
    </div>
  );
};

export default SecondStep;
