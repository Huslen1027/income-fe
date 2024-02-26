import { useEffect } from "react";

const Piechart = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/chart.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const ctx = document.getElementById("piechart");
      const data = {
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(125, 105, 26)",
            ],
            hoverOffset: 4,
          },
        ],
      };
      new Chart(ctx, {
        type: "doughnut",
        data: data,
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <canvas id="piechart"></canvas>
    </div>
  );
};

export default Piechart;
