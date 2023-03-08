export const styles = {
  root: {
    borderRadius: "10px",
    background: "white",
    marginBottom: "10px",
    padding: "5px",
    display: "flex",
    "&:last-child": {
      marginBottom: "0px",
    },
  },
  infoBtnRoot: { display: "flex", justifyContent: "start", flex: 1 },
  timeStatusRoot: {
    margin: "0px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  timeStatusTxt: {
    fontSize: "14px",
    fontWeight: 500,
  },
  infoRoot: { flex: 1 },
  infoTxtRoot: { display: "flex" },
  infoTxt: {
    fontSize: "14px",
    whiteSpace: "pre-wrap",
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical",
  },
  submitBtnRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 10px",
  },

  submitBtn: {
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#162149",
    width: "50px",
    borderRadius: "4px",
    height: "30px",
  },
  submitBtnTxt: { color: "white", fontSize: "14px", fontWeight: "500" },
};
