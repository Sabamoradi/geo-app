import { ReactNode } from "react";
import { MainContainer } from "./StyledMain";
import Toast from "../../components/Toast";
import { useAppSelector } from "../../hooks/useDispatch";
import { selectNotificationTitle, selectShowNotification } from "../../store/general/slice";

interface Props {
  children: ReactNode;
}

function MainLayout(props: Props) {
  const { children } = props;
  const showNotification = useAppSelector(selectShowNotification);
  const showNotificationTitle = useAppSelector(selectNotificationTitle);

  return (
    <MainContainer>
      {children}

      {showNotification && (
        <Toast toastTitle={showNotificationTitle} dismissTime={4000} toastType={"error"} />
      )}
    </MainContainer>
  );
}

export default MainLayout;
