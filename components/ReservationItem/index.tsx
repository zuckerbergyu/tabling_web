import { useMemo } from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import dateToTime from "libs/dateToTime";
import { Reservation } from "types";
import { styles } from "./styles";

type Props = {
  data: Reservation;
  onSubmit: () => void;
  onClick: () => void;
};
const ReservationItem = (props: Props) => {
  const tables = useMemo(() => {
    if (props.data.tables.length > 0) {
      const tableNames = props.data.tables.map(({ name }) => {
        return name;
      });
      return tableNames.length > 1 ? `[${tableNames.toString()}]` : tableNames;
    }
    return "";
  }, [props.data]);

  const menus = useMemo(() => {
    if (props.data.menus.length > 0) {
      const nemuNames = props.data.menus.map(({ name, qty }) => {
        return `${name}(${qty})`;
      });
      return nemuNames.length > 1 ? `[${nemuNames.toString()}]` : nemuNames;
    }
    return "";
  }, [props.data]);

  return (
    <Box sx={styles.root}>
      <ButtonBase sx={styles.infoBtnRoot} onClick={props.onClick}>
        <Box sx={styles.timeStatusRoot}>
          <Typography sx={styles.timeStatusTxt}>
            {dateToTime(props.data.timeReserved)}
          </Typography>
          <Typography sx={styles.timeStatusTxt}>
            {props.data.status === "seated" ? "착석 중" : "예약"}
          </Typography>
        </Box>
        <Box sx={styles.infoRoot}>
          <Box sx={styles.infoTxtRoot}>
            <Typography sx={styles.infoTxt}>
              {props.data.customer.name} - {tables}
            </Typography>
          </Box>
          <Box sx={styles.infoTxtRoot}>
            <Typography sx={styles.infoTxt}>
              {`성인 ${props.data.customer.adult} 아이 ${props.data.customer.child}`}
            </Typography>
          </Box>
          <Box sx={styles.infoTxtRoot}>
            <Typography sx={styles.infoTxt}>{menus}</Typography>
          </Box>
        </Box>
      </ButtonBase>
      <Box sx={styles.submitBtnRoot}>
        <ButtonBase onClick={props.onSubmit} sx={styles.submitBtn}>
          <Typography sx={styles.submitBtnTxt}>
            {props.data.status === "seated" ? "퇴석" : "착석"}
          </Typography>
        </ButtonBase>
      </Box>
    </Box>
  );
};

export default ReservationItem;
