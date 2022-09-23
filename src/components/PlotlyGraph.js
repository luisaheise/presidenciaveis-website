import Plotly from "plotly.js-basic-dist-min";
import React, { useEffect } from "react";
import createPlotlyComponent from "react-plotly.js/factory";
import useWindowSize from "../hooks/useWindowSize";

const Plot = createPlotlyComponent(Plotly);

const PlotlyGraph = ({ data, layout, config }) => {
  const size = useWindowSize();

  useEffect(() => {
    Plotly.Plots.resize("plotlyChart");
    console.log(size)
  }, [size]);

  return (
    <Plot
      divId="plotlyChart"
      data={data}
      layout={{ ...layout, autosize: true, showlegend: false}}
      config={config}
      useResizeHandler
      className="w-full h-full"
    />
  );
};

export default PlotlyGraph;
