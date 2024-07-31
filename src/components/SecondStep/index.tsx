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
} from "./StyledSecond";
import { localTexts } from "../../locals/text";

const SecondStep = () => {
  const [otpValue, setOtpValue] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [counter, setCounter] = useState(10);

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

  return (
    <div className="global-box">
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
          />
        ))}
      </Container>
      <SecondPart>
        <CounterWrapper>
          {counter === 0 ? (
            <CountItem onClick={() => resetCounter()}>
              {localTexts.sendAgain}
            </CountItem>
          ) : (
            `00:${counter}`
          )}
        </CounterWrapper>
      </SecondPart>
    </div>
  );
};

export default SecondStep;
