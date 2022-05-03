import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { historicalData } from "../../config/api";
import Loading from "../Loading/Loading";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useStyles from "./Styles";
import ChartButton from "../ChartButton/ChartButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinChart = ({ id }) => {
  const [coinHistory, setCoinHistory] = useState([]);
  const [day, setDay] = useState(1);
  const styles = useStyles();

  const fetchCoinHistory = useCallback(async () => {
    const { data } = await axios.get(historicalData(id, day));

    setCoinHistory(data.prices);
  }, [id, day]);

  useEffect(() => {
    fetchCoinHistory();
  }, [fetchCoinHistory]);

  const chartButtons = [
    {
      text: "24 Hours",
      value: 1,
    },
    {
      text: "30 Days",
      value: 30,
    },
    {
      text: "3 Months",
      value: 90,
    },
    {
      text: "6 Months",
      value: 180,
    },
    {
      text: "1 Year",
      value: 365,
    },
  ];

  const options = {
    responsive: true,
    elements: {
      point: {
        radius: 1,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const labels = coinHistory.map((price) => {
    let date = new Date(price[0]);
    let time =
      date.getHours() > 12
        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
        : `${date.getHours()}:${date.getMinutes()} AM`;

    return day === 1 ? time : date.toDateString();
  });

  const data = {
    labels,
    datasets: [
      {
        label: `Price ( Past ${day} Days ) In USD`,
        data: coinHistory.map((price) => price[1].toFixed(2)),
        borderColor: "#dba279",
        backgroundColor: "#111826",
      },
    ],
  };

  return (
    <div className={styles.container}>
      {!coinHistory ? (
        <Loading />
      ) : (
        <>
          <Line options={options} data={data} />
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              marginTop: 20,
            }}
          >
            {chartButtons.map((data) => (
              <ChartButton
                key={data.value}
                onClick={() => setDay(data.value)}
                selected={data.value === day}
              >
                {data.text}
              </ChartButton>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CoinChart;
