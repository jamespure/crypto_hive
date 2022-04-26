import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Coin.css";
import { coinData } from "../../config/api";
import {
  Typography,
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";
import Loading from "../Loading/Loading";
import { handleFormatting } from "../Coins/Coins";
import CoinChart from "../CoinChart/CoinChart";
import HTMLReactParser from "react-html-parser";

const useStyles = makeStyles((theme) => ({
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
      maxWidth: '85%'
    }
  },
}));

const Coin = () => {
  const [coin, setCoin] = useState();
  const { id } = useParams();

  const fetchCoin = useCallback(async () => {
    const { data } = await axios.get(coinData(id));
    setCoin(data);
  }, [id]);

  useEffect(() => {
    fetchCoin();
  }, [fetchCoin]);

  console.log(coin);
  const styles = useStyles();

  return (
    <>
      {!coin ? (
        <Loading />
      ) : (
        <article className={styles.container}>
          <aside className={styles.aside}>
            <img src={coin?.image.large} alt={id} />
            <Typography variant="h3" className={styles.heading}>
              {coin?.name}
            </Typography>
            <Typography
              color="secondary"
              variant="subtitle1"
              className={styles.description}
            >
              {HTMLReactParser(coin?.description.en.split(". ")[0])}.
            </Typography>
            <div className={styles.marketData}>
              <span style={{ display: "flex", gap: 10 }}>
                <Typography
                  variant="h5"
                  color="primary"
                  className={styles.heading}
                >
                  Rank:
                </Typography>
                <Typography variant="h5">{coin.market_cap_rank}</Typography>
              </span>
              <span style={{ display: "flex", gap: 10 }}>
                <Typography
                  variant="h5"
                  color="primary"
                  className={styles.heading}
                >
                  Current Price:
                </Typography>
                <Typography variant="h5">
                  $ {coin.market_data.current_price.usd.toFixed(2)}
                </Typography>
              </span>
              <span style={{ display: "flex", gap: 10 }}>
                <Typography
                  variant="h5"
                  color="primary"
                  className={styles.heading}
                >
                  Market Cap:
                </Typography>
                <Typography variant="h5">
                  {handleFormatting(coin.market_data.market_cap.usd)}
                </Typography>
              </span>
            </div>
          </aside>
          <CoinChart id={id} />
        </article>
      )}
    </>
  );
};

export default Coin;
