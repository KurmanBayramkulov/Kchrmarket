import React from "react";
import ReactApexChart from "react-apexcharts";

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [67, 33],
      options: {
        chart: {
          type: "donut",
        },
        labels: ['Нет остатков', 'В наличии'],
        colors: ['#4BC37B','#B41616'],
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

export default Products;
