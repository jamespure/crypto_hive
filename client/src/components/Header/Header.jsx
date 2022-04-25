import {
  ThemeProvider,
  createTheme,
  makeStyles,
  AppBar,
  Container,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

const theme = createTheme({
  palette: {
    primary: { main: "#deb952" },
  },
});

const useStyles = makeStyles(() => ({
  header: {
    height: "65px",
    justifyContent: "center",
  },

  logo: {
    fontFamily: "Mukta, sans-serif",
    fontWeight: 700,
    color: "#fff",
    cursor: "pointer",
  },
}));

const Header = () => {
  let navigate = useNavigate();
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="transparent" className={classes.header}>
        <Container>
          <Typography
            variant="h4"
            className={classes.logo}
            onClick={() => navigate("/")}
          >
            Crypto Hive <img src={logo} alt="logo" />
          </Typography>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
