import {Chart} from 'chart.js/auto';
import { Bar } from "react-chartjs-2";
import ChartjsPluginStacked100 from "chartjs-plugin-stacked100";
import './ChartData.css';

Chart.register(ChartjsPluginStacked100);
Chart.defaults.color = "#fff";

const ChartData = () => {
  return (
    <>
      {
        <div className='App-graph'>
          <Bar
            data={{
              labels: ["January", "February"],
              datasets: [
                { label: "Needs", data: [5, 25], backgroundColor: "#0e9e13" },
                { label: "Wants", data: [15, 10], backgroundColor: "#282828" },
                { label: "Savings", data: [10, 8], backgroundColor: "#a6d59a" },
              ],
            }}
            options={{
              //@ts-ignore
              indexAxis: "y",
              scales:{
                x: {
                    display: false
                },
                y: {
                  grid: {
                      display: false
                 }
              }
              },
              plugins: {
                stacked100: { enable: true },
              },
            }}
          />
        </div>
      }
    </>
  );
};
export default ChartData;