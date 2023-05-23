import React from "react";
import ReactApexChart from "react-apexcharts";

class Photos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [67, 33],
      options: {
        chart: {
          type: "donut",
        },
        labels: ['С фотографиями', 'Без фотографий'],
        colors: ['#FFD482','#16B455'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
              
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
        />
      </div>
    );
  }
}

export default Photos;
