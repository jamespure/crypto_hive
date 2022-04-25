import { useNavigate } from "react-router-dom";
import { Card, CardContent, makeStyles } from "@material-ui/core";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import { useTrending } from "../../contexts/trendingContextProvider";

const useStyles = makeStyles(() => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
    color: "white",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Mukta, sans-serif",
    color: "white",
  },
  itemInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Carousel = () => {
  const classes = useStyles();
  const trendingCoin = useTrending();

  const items = trendingCoin.map((coin) => {
    return (
      <Link to={`/coin/${coin.item.id}`} className={classes.item} key={coin.item.id}>
        <img
          src={coin?.item.small}
          alt={coin.item.name}
          height="55px"
          style={{ marginBottom: "10px" }}
        />
        <div className={classes.itemInfo}>
          <span style={{ lineHeight: 1 }}>{coin?.item.symbol}</span>
          <span>₿ {coin?.item.price_btc.toFixed(8)}</span>
        </div>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 3,
    },
    800: {
      items: 4,
    },
  };

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1500}
        animationDuration={1500}
        autoPlay
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        items={items}
      />
    </div>
  );
};

export default Carousel;
