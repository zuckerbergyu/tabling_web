import React, { useEffect, useState } from "react";
import { Container, Typography, Box, useMediaQuery } from "@mui/material";
import ReservationItem from "components/ReservationItem";
import ReservationDetail from "components/ReservationDetail";
import ReservationDetailBottomDrawer from "components/ReservationDetailBottomDrawer";
import { reservation as reservationApi } from "apis";
import { Reservation } from "types";
import { styles } from "./styles";

export default function Home() {
  const { data } = reservationApi.useGetReservations();
  const [reservationData, setReservationData] = useState<Reservation[]>([]);
  const [reservationDetailData, setReservationDetailData] =
    useState<Reservation>(reservationData[0]);

  const [sortOn, setSortOn] = useState(false);
  const isDesktop = useMediaQuery("(min-width:1024px)");

  useEffect(() => {
    if (data) {
      setReservationData(data);
      setReservationDetailData(data[0]);
    }
  }, [data]);

  const toggleSort =
    (open: boolean) => (event?: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setSortOn(open);
    };

  // 퇴석/착석 버튼 클릭
  const handleSubmit = (reservation: Reservation) => {
    if (reservation.status === "seated") {
      const index = reservationData.findIndex(
        (item) => item?.id === reservation.id
      );
      const temp = reservationData.slice();
      temp.splice(index, 1);
      setReservationData(temp);
    } else {
      const index = reservationData.findIndex(
        (item) => item?.id === reservation.id
      );
      const temp = reservationData.slice();
      const selected = temp[index];
      temp.splice(index, 1, { ...selected, status: "seated" });
      setReservationData(temp);
    }
  };

  // 예약 상세
  const handleOnClick = (item: Reservation) => {
    setReservationDetailData(item);
    if (!isDesktop) {
      toggleSort(true)();
    }
  };

  return (
    <Container disableGutters>
      <Box sx={styles.root}>
        <Box sx={styles.headerRoot}>
          <Typography sx={styles.headerTxt}>예약 목록</Typography>
        </Box>
        <Box sx={styles.contentsRoot}>
          <Box sx={styles.reservationItemRoot}>
            {reservationData &&
              reservationData.map(
                (item: Reservation) =>
                  item.status !== "done" && (
                    <ReservationItem
                      data={item}
                      onSubmit={() => handleSubmit(item)}
                      onClick={() => {
                        handleOnClick(item);
                      }}
                    />
                  )
              )}
          </Box>
          {isDesktop && (
            <Box sx={styles.reservationDetailRoot}>
              <ReservationDetail data={reservationDetailData} />
            </Box>
          )}
          <ReservationDetailBottomDrawer
            open={sortOn}
            onClose={toggleSort(false)}
            onOpen={toggleSort(true)}
            data={reservationDetailData}
          />
        </Box>
      </Box>
    </Container>
  );
}
