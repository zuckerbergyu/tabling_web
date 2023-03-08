import { KeyboardEvent, MouseEvent } from "react";
import { SwipeableDrawer, ButtonBase, Typography } from "@mui/material";
import ReservationDetail from "components/ReservationDetail";
import { Reservation } from "types";
import { styles } from "./styles";

type Props = {
  open: boolean;
  onClose: (e: KeyboardEvent | MouseEvent) => void;
  onOpen: (e: KeyboardEvent | MouseEvent) => void;
  data: Reservation;
};

const ReservationDetailBottomDrawer = (props: Props) => {
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={props.open}
      onClose={props.onClose}
      onOpen={props.onOpen}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      PaperProps={{
        sx: styles.drawer,
      }}
    >
      <ReservationDetail data={props.data} />
      <ButtonBase sx={styles.closeBtnRoot} onClick={props.onClose}>
        <Typography sx={styles.closeBtnTxt}>닫기</Typography>
      </ButtonBase>
    </SwipeableDrawer>
  );
};
export default ReservationDetailBottomDrawer;
