import { makeStyles } from '@material-ui/core';

const Styles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "90%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  aside: {
    width: "30%",
    padding: 20,
    borderRight: "2px solid gray",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      borderRight: "none",
    },
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  marketData: {
    alignSelf: "start",
    padding: 25,
    paddingTop: 10,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      alignItems: "start",
    },
  },
  description: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "85%",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "85%",
    },
  },
}));

export default Styles;