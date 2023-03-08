import {
  Box,
  Typography,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { Reservation } from "types";
import { styles } from "./styles";
type Props = {
  data: Reservation;
};
const ReservationDetail = (props: Props) => {
  return (
    <Box sx={styles.root}>
      <Box sx={{ margin: "0 auto", width: "100%" }}>
        <Box sx={styles.cellHeaderRoot}>
          <Typography sx={styles.cellHeaderTxt}>예약정보</Typography>
        </Box>

        <TableContainer>
          <Table aria-label="reservation-detail-table">
            <TableBody>
              <TableRow sx={{}}>
                <TableCell sx={styles.cellTitle} scope="row">
                  예약 상태
                </TableCell>
                <TableCell sx={styles.cellInfo}>{props.data?.status}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={styles.cellTitle} scope="row">
                  예약 시간
                </TableCell>
                <TableCell sx={styles.cellInfo}>
                  {props.data?.timeReserved}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={styles.cellTitle} scope="row">
                  접수 시간
                </TableCell>
                <TableCell sx={styles.cellInfo}>
                  {props.data?.timeRegistered}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={styles.cellHeaderRoot}>
          <Typography sx={styles.cellHeaderTxt}>고객정보</Typography>
        </Box>
        <TableContainer>
          <Table aria-label="reservation-detail-table">
            <TableBody>
              <TableRow>
                <TableCell sx={styles.cellTitle} scope="row">
                  고객 성명
                </TableCell>
                <TableCell sx={styles.cellInfo}>
                  {props.data?.customer.name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={styles.cellTitle} scope="row">
                  고객 등급
                </TableCell>
                <TableCell sx={styles.cellInfo}>
                  {props.data?.customer.level}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={styles.cellTitle} scope="row">
                  고객 메모
                </TableCell>
                <TableCell sx={[styles.cellInfo, styles.cellInfoThreeLine]}>
                  <Typography>{props.data?.customer.memo}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer sx={styles.requestTableRoot}>
          <Table aria-label="reservation-detail-table">
            <TableBody>
              <TableRow>
                <TableCell sx={styles.cellTitle} scope="row">
                  요청 사항
                </TableCell>
                <TableCell sx={[styles.cellInfo, styles.cellInfoThreeLine]}>
                  {props.data?.customer.request}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ReservationDetail;
