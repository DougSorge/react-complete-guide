import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

export default function Chart(props) {
  // Take value property from the dataPoints prop and add them to a new array for use in the Math.max method.
  // in the Math.max method we use the spread operator because the parameter must be a list of comma separated numbers, therefore an array will not work.
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
}
