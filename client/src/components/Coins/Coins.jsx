import {
  Container,
  createTheme,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
  withStyles,
} from "@material-ui/core";
import { useState } from "react";
import { useSearch } from "../../contexts/searchContext";
import { useCoins } from "../../contexts/coinsContext";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { Pagination } from "@material-ui/lab";
import classes from "./Coins.module.css";

const useStyles = makeStyles(() => ({
  row: {
    backgroundColor: "#1e2124",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#5c5a5a",
    },
  },
}));
const theme = createTheme({
  root: {},
  overrides: {
    MuiPaginationItem: {
      root: {
        color: "#DBA279",
      },
    },
  },
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
  typography: {
    fontFamily: ["Mukta, sans-serif"],
  },
});

const Coins = (props) => {
  let navigate = useNavigate();
  const { search, setSearch } = useSearch();
  const coins = useCoins();
  let [loading, setLoading] = useState(true);
  let [page, setPage] = useState(1);
  const styles = useStyles();

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  const handleFormatting = (value) => {
    if (value > 999 && value < 1000000) {
      return (value / 1000).toFixed(1) + "K";
    } else if (value > 1000000) {
      return (value / 1000000).toFixed(1) + "M";
    } else if (value > 1000000000) {
      return (value / 1000000000).toFixed(1) + "B";
    } else if (value < 999) {
      return value;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{
            color: "white",
            margin: "18px",
          }}
        >
          cryptocurrency prices by coin rank
        </Typography>
        <TextField
          label="Search For a Crypto Currency..."
          variant="outlined"
          style={{ marginBottom: "20px", width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer>
          {!loading ? (
            <Loading />
          ) : (
            <Table>
              <TableHead style={{ backgroundColor: "#DBA279" }}>
                <TableRow className={classes.market}>
                  {["Coin", "Price", "24h Change", "Market Cap"].map(
                    (header) => (
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: 700,
                          fontFamily: "Mukta, sans-serif",
                        }}
                        align={header === "Coin" ? "" : "right"}
                        variant="head"
                        key={header}
                      >
                        {header}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {handleSearch()
                  .splice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((coin) => {
                    const profit = coin.price_change_percentage_24h >= 0;
                    return (
                      <TableRow
                        onClick={() => navigate(`/coin/${coin.id}`)}
                        key={coin.id}
                        className={`${styles.row} ${classes.market_price}`}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ display: "flex", gap: 15 }}
                        >
                          <img
                            height="40px"
                            style={{ marginBottom: 10 }}
                            src={coin?.image}
                            alt={coin.id}
                          />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <span style={{ color: "darkgray" }}>
                              {coin.name}
                            </span>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                                color: "#DBA279",
                              }}
                            >
                              {coin.symbol}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="right">
                          $ {coin.current_price.toFixed(2)}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: profit > 0 ? "green" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {coin.price_change_percentage_24h.toFixed(2)} %
                        </TableCell>
                        <TableCell align="right">
                          {handleFormatting(coin.market_cap)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
        <Pagination
          count={(handleSearch()?.length / 10).toFixed(0)}
          onChange={(e, value) => {
            setPage(value);
            window.scrollTo(0, 450);
          }}
          style={{
            display: "flex",
            width: "100%",
            padding: 20,
            justifyContent: "center",
          }}
          shape="rounded"
        />
      </Container>
    </ThemeProvider>
  );
};

export default withStyles(useStyles)(Coins);
