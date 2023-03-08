import moment from "moment";
const dateToTime = (dateString: string) =>
  moment(new Date(dateString)).format("HH:mm");
export default dateToTime;
