import { useEffect, useState } from "react";
import { ContainerToast } from "./StyledToast";

export type ToastStatus = "success" | "warning" | "error" | "info";

interface Props {
  toastTitle: string;
  toastType: ToastStatus;
  dismissTime: number;
}

const Toast = (props: Props) => {
  const { toastTitle, toastType, dismissTime } = props;
  const [visible, setVisible] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, dismissTime);
    return () => clearTimeout(timer);
  }, [toastTitle, dismissTime]);

  return (
    <>
      <ContainerToast visible={visible} className={`${toastType}-bg`}>
        <p>{toastTitle}</p>
      </ContainerToast>
    </>
  );
};

export default Toast;
