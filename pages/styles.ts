import theme from "constants/theme";

export const styles = {
  root: {
    background: "#CED8E4",
    minHeight: "100vh",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  headerRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "150px",
  },
  headerTxt: { fontSize: "42px", fontWeight: 700 },
  contentsRoot: { display: "flex", padding: "0px 8px 10px" },
  reservationItemRoot: {
    [theme.breakpoints.up("desktop")]: {
      padding: "0px 20px 0px 0px",
    },
  },
  reservationDetailRoot: {
    minWidth: "400px",
    width: "400px",
    borderRadius: "20px",
  },
};
