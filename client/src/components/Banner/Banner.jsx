import React from 'react';
import { Container, Typography } from "@material-ui/core";
import classes from "./Banner.module.css";
import Carousel from "./Carousel";
import logo from "../../assets/logo.svg";


const Banner = () => {

  return (
    <section className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
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
