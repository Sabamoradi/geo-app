import { useEffect } from "react";
import { ContainerToast } from "./StyledToast";

export type ToastStatus = "success" | "warning" | "error" | "info";

interface Props {
  toastTitle: string;
  toastType: ToastStatus;
  dismissTime: number;
}

const Toast = (props: Props) => {
  const { toastTitle, toastType, dismissTime } = props;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (toastTitle.length) {
      interval = setInterval(() => {
        console.log();
      }, dismissTime);
    }
    return () => {
      clearInterval(interval);
    };
  }, [toastTitle, dismissTime]);

  return (
    <>
      <ContainerToast className={`${toastType}-bg`}>
        <p>{toastTitle}</p>
      </ContainerToast>
    </>
  );
};

export default Toast;
