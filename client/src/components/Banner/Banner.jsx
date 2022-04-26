import React from 'react';
import { Container, makeStyles, Typography } from "@material-ui/core";
import classes from "./banner.module.css";
import Carousel from "./Carousel";
import logo from "../../assets/logo.svg";

const useStyles = makeStyles(() => ({
  tagline: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignText: "center",
    height: "40%",
    fontFamily: "Mukta, sans-serif",
  },
  bannerContent: {
    height: "400px",
    paddingTop: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
}));

const Banner = () => {
  const styles = useStyles();

  return (
    <section className={classes.banner}>
      <Container className={styles.bannerContent}>
        <div className={styles.tagline}>
          <Typography
            variant="h2"
            style={{
              fontFamily: "Mukta, sans-serif",
              fontWeight: "bold",
              marginBottom: "15px",
              color: "#fff",
            }}
          >
            Crypto Hive <img src={logo} alt="logo" className={classes.logo} />
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              fontFamily: "Mukta, sans-serif",
              textTransform: "capitalize",
              color: "#fff",
            }}
          >
            get all the info about your favorite cryptocurrency in one place
          </Typography>
        </div>
        <Carousel />
      </Container>
    </section>
  );
};

export default Banner;
