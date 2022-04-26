import { makeStyles } from "@material-ui/core";
import React from "react";

const ChartButton = ({ children, onClick, selected }) => {
  const useStyles = makeStyles({
    chartButton: {
      border: "1px solid #dba279",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      cursor: "pointer",
      fontFamily: "Mukta, sans-serif",
      backgroundColor: selected ? "#dba279" : "#111826",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "#dba279",
        color: "#111826",
      },
      textAlign: "center",
    },
  });
  const styles = useStyles();

  return (
    <span onClick={onClick} className={styles.chartButton}>
      {children}
    </span>
  );
};

export default ChartButton;
