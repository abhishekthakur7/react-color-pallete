export default {
    root: {
      width: "20%",
      height: "25%",
      margin: "0 auto",
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      marginBottom: "-4px",
      "&:hover svg": {
        color: "white",
        transform: "scale(1.3)"
      }
    },
    boxContent: {
      position: "absolute",
      width: "100%",
      left: "0px",
      bottom: "0px",
      padding: "10px",
      color: "rgba(0, 0, 0, 0.5)",
      letterSpacing: "1px",
      fontSize: "12px",
      display: "flex",
      justifyContent: "space-between"
    },
    deleteIcon: {
      transition: "all 0.3s ease-in-out"
    }
  };
  