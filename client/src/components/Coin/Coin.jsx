import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { coinData } from "../../config/api";
import { Typography } from "@material-ui/core";
import Loading from "../Loading/Loading";
import { handleFormatting } from "../Coins/Coins";
import CoinChart from "../CoinChart/CoinChart";
import HTMLReactParser from "react-html-parser";
import Helmet from "react-helmet";
import useStyles from "./Styles";

const Coin = () => {
  const styles = useStyles();
  const [coin, setCoin] = useState();
  const { id } = useParams();

  const fetchCoin = useCallback(async () => {
    const { data } = await axios.get(coinData(id));
    setCoin(data);
  }, [id]);

  useEffect(() => {
    fetchCoin();
  }, [fetchCoin]);

  return (
    <>
      {!coin ? (
        <Loading />
      ) : (
        <article className={styles.container}>
          <Helmet>
            <title>{coin?.name}</title>
            <meta
              name="description"
              content={`Info About Your Favorite Cryptocurrencies`}
            />
          </Helmet>
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
