import { AgChartOptions } from "ag-charts-community";
import { AgChartsReact } from "ag-charts-react";
import styles from "../styles/Chart.module.css";

const Chart = ({ Chartdata }: ChartProps) => {
  const chartOptions: AgChartOptions = {
    data: Chartdata,
    series: [
      {
        type: "area",
        xKey: "month",
        yKey: "ammount",
        fill: "#4c7273",
      },
    ],
    background: {
      fill: "#d0d6d6",
    },
    title: {
      text: "Finanse",
      fontSize: 20,
    },
  };

  return (
    <div className={styles.Chart}>
      <AgChartsReact options={chartOptions} />
    </div>
  );
};

export default Chart;
