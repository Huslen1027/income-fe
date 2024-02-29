import { useEffect } from "react";

const July = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/chart.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const ctx = document.getElementById("july");
      const Utils = {
        months: ({ count }) => {
          const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ];
          return months.slice(0, count);
        },
      };
      const labels = Utils.months({ count: 7 });
      const data = {
        labels: labels,
        datasets: [
          {
            label: "Income",
            backgroundColor: "#84CC16",
            borderColor: "rgba(255,99,132,1)",
            barThickness: 15,
            borderRadius: 20,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [
              3000000, 2200000, 2440000, 1040000, 1500000, 1850000, 2800000,
            ],
          },
          {
            label: "Expense",
            backgroundColor: "#F97316",
            borderColor: "rgba(255,99,132,1)",
            borderRadius: 20,
            barThickness: 15,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [
              2300000, 2100000, 2140000, 940000, 1000000, 1150000, 1800000,
            ],
          },
        ],
      };
      new Chart(ctx, {
        type: "bar",
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-[460px] h-[250px]">
      <canvas id="july"></canvas>
    </div>
  );
};

export default July;
