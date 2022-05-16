import React from "react";

import { Pie } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const usestyles = makeStyles((theme) => ({
  chart: {
    width: "50%",
    height: "50%",
    padding: "1%",
    margin: "0% 70%",
  },
}));

const Chart = ({ totalData }) => {
  console.log(totalData);

  const classes = usestyles();

  const dataGlobal = {
    labels: ["Total Confirmed", "Total Recovered", "Total Deaths"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          totalData?.totalConfirmed,
          totalData?.totalRecovered,
          totalData?.totalDeaths,
        ],
        backgroundColor: ["#f7ca3f", "#93f07c", "#ea6060"],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Grid container spacing={3}>
      <>
        <Grid item xs={12} sm={6}>
          <div className={classes.chart}>
            <Pie data={dataGlobal} />
          </div>
        </Grid>
      </>
    </Grid>
  );
};

export default Chart;
