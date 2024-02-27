// import { useEffect } from "react";

// const July = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://cdn.jsdelivr.net/npm/chart.js";
//     script.async = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//       const ctx = document.getElementById("july");
//       const Utils = {
//         months: ({ count }) => {
//           const months = [
//             "January",
//             "February",
//             "March",
//             "April",
//             "May",
//             "June",
//             "July",
//           ];
//           return months.slice(0, count);
//         },
//       };
//       const labels = Utils.months({ count: 7 });
//       const data = {
//         labels: labels,
//         datasets: [
//           {
//             data: [1000000, 900000, 800000, 700000, 600000, 500000, 400000],
//             backgroundColor: [],
//             borderColor: [
//               "rgb(255, 99, 132)",
//               "rgb(255, 159, 64)",
//               "rgb(255, 205, 86)",
//               "rgb(75, 192, 192)",
//               "rgb(54, 162, 235)",
//               "rgb(153, 102, 255)",
//               "rgb(201, 203, 207)",
//             ],
//             borderWidth: 1,
//           },
//         ],
//       };
//       new Chart(ctx, {
//         type: "bar",
//         data: data,
//         options: {
//           scales: {
//             y: {
//               beginAtZero: true,
//             },
//           },
//         },
//       });
//     };

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="w-[460px] h-[250px]">
//       <canvas id="july"></canvas>
//     </div>
//   );
// };

// export default July;
