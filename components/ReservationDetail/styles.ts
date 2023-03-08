import theme, { Colors } from "constants/theme";
export const styles = {
  root: {
    padding: "15px 20px",
    width: "100%",
    height: "100%",
    background: "white",
    borderRadius: "20px",
  },
  cellHeaderRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0px 20px",
  },
  cellHeaderTxt: { fontSize: "20px", fontWeight: 700 },
  cellTitle: {
    padding: 0,
    fontSize: "18px",
    color: theme.palette.grey[600],
    borderBottom: "none",
    verticalAlign: "top",
    width: "100px",
    "&.MuiTableCell-root": {
      paddingBottom: "10px",
    },
  },
  cellInfo: {
    padding: 0,
    fontSize: "18px",
    color: Colors.black,
    borderBottom: "none",
    verticalAlign: "top",
    "&.MuiTableCell-root": {
      whiteSpace: "pre-wrap",
      display: "-webkit-box",
      overflow: "hidden",
      textOverflow: "ellipsis",
      WebkitLineClamp: "1",
      WebkitBoxOrient: "vertical",
    },
  },
  cellInfoThreeLine: {
    "&.MuiTableCell-root": {
      WebkitLineClamp: "3",
    },
  },
  requestTableRoot: { marginTop: "40px" },
};
