import { useQuery } from "react-query";
import request from "apis/request";

// 예약 목록 조회 api
export const useGetReservations = () =>
  useQuery(["useGetReservations"], async () => {
    const { data } = await request.get("/v1/store/9533/reservations");
    return data.reservations;
  });
