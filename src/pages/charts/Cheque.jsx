import React from "react";
import ReactApexChart from "react-apexcharts";

class Cheque extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "STOCK ABC",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        labels: [31, 40, 28, 51, 42, 109, 100],
        xaxis: {
          type: "datetime",
        },
        colors: ['#1A8D34'],
        yaxis: {
          opposite: true,
        },
        legend: {
          horizontalAlign: "left",
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}

export default Cheque;
