import card from "../assets/img/card.png";
import ChartTwo from "../components/ChartTwo";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Card() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "",
        data: ["7", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
        borderWidth: 1,
        backgroundColor: ["#0257FF"],
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: false, // Hide x-axis label
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: false, // Hide y-axis label
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };

  const items=[
    {
      title: "  USD Load Volume Today",
      des : "$74,097,895,234"
    },
    {
      title: " Registrations",
      des : "10000"
    },
    {
      title: "CARDS ISSUED",
      des : "105"
    },
    {
      title: "PROFIT TODAY",
      des : "$68,006.42"
    },
    {
      title: "TOKEN REDISTRIBUTED",
      des : "1.22%"
    },
    {
      title: "TOKEN BURNT",
      des : "20"
    },
  
  ]

  return (
    <div className="card  ">
      <div className=" mb-[32px] w-full ">
        <div className="card-content lg:flex items-center gap-10 md:gap-[60px] lg:gap-5 xl:gap-8 2xl:gap-[80px] p-3  lg:p-4 xl:p-8   2xl:p-[50px] w-full bg-[#080B13] rounded-[20px] ">
          <div className="w-full lg:w-[64.33%] xl:w-1/3 mb-6 lg:mb-0">
            <img className="w-full" src={card} alt="" />
          </div>
          <div className="w-full lg:w-2/3 card-content-text">
            <div className="text-body grid grid-cols-2 xl:grid-cols-3 justify-center gap-x-[6.5rem] md:gap-y-[1.5rem] lg:gap-x-14  xl:gap-x-[36px] 2xl:gap-x-[163px] gap-y-8  lg:gap-y-[5px] xl:gap-y-[58px] uppercase ">
              {
                items.map((item,idx)=><div key={idx}>
                <p className="title text-nowrap text-[12px] md:text-base lg:text-[12px] 2xl:text-lg text-[#6B7280] font-medium leading-4 lg:leading-6 mb-2 lg:mb-1 2xl:mb-4">
                  {item.title}
                </p>
                <p className="des text-base leading-[22px] md:text-xl lg:text-6 xl:text-[18px] 2xl:text-[30px] lg:leading-10 font-semibold text-[#D9DCE4]">
                {item.des}
                </p>
              </div>)
              }
            </div>
          </div>
        </div>
        <div className="card-chart lg:flex gap-[10px] md:gap-[20px] lg:gap-[30px] py-[18px] md:mt-3 md:mb-2 md:py-[20px]  lg:py-[15px] w-full">
          <div className=" w-full lg:w-6/12  p-3 md:p-5 lg:p-[30px] bg-[#080B13] rounded-[20px]">
            <div className="line-chart">
              <div className="flex items-center justify-between mb-4 md:mb-5 lg:mb-[28px] ">
                <h4 className="text-base md:text-lg lg:text-[23px] leading-[37px] font-medium text-[#A8ABB3]">
                  Load Volume
                </h4>
                <a href="#">
                  
                  <svg
                    width="29"
                    height="30"
                    viewBox="0 0 29 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8699 6.75737V6.76915M14.8699 15.0001V15.0119M14.8699 23.2429V23.2547M14.8699 7.93491C14.5576 7.93491 14.2581 7.81084 14.0373 7.59001C13.8164 7.36918 13.6924 7.06967 13.6924 6.75737C13.6924 6.44507 13.8164 6.14556 14.0373 5.92473C14.2581 5.7039 14.5576 5.57983 14.8699 5.57983C15.1822 5.57983 15.4817 5.7039 15.7026 5.92473C15.9234 6.14556 16.0475 6.44507 16.0475 6.75737C16.0475 7.06967 15.9234 7.36918 15.7026 7.59001C15.4817 7.81084 15.1822 7.93491 14.8699 7.93491ZM14.8699 16.1777C14.5576 16.1777 14.2581 16.0536 14.0373 15.8328C13.8164 15.6119 13.6924 15.3124 13.6924 15.0001C13.6924 14.6878 13.8164 14.3883 14.0373 14.1675C14.2581 13.9466 14.5576 13.8226 14.8699 13.8226C15.1822 13.8226 15.4817 13.9466 15.7026 14.1675C15.9234 14.3883 16.0475 14.6878 16.0475 15.0001C16.0475 15.3124 15.9234 15.6119 15.7026 15.8328C15.4817 16.0536 15.1822 16.1777 14.8699 16.1777ZM14.8699 24.4204C14.5576 24.4204 14.2581 24.2964 14.0373 24.0755C13.8164 23.8547 13.6924 23.5552 13.6924 23.2429C13.6924 22.9306 13.8164 22.6311 14.0373 22.4102C14.2581 22.1894 14.5576 22.0653 14.8699 22.0653C15.1822 22.0653 15.4817 22.1894 15.7026 22.4102C15.9234 22.6311 16.0475 22.9306 16.0475 23.2429C16.0475 23.5552 15.9234 23.8547 15.7026 24.0755C15.4817 24.2964 15.1822 24.4204 14.8699 24.4204Z"
                      stroke="#3E4558"
                      strokeWidth="2.35507"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <div className="flex justify-center items-center w-full">
                <Bar data={data} options={options} />
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-6/12 p-3 md:p-5 lg:p-[30px] bg-[#080B13] rounded-[20px]">
            <div className="chart-issu-chart h-full flex flex-col">
              <div className="flex items-center justify-between mb-4 md:mb-5 lg:mb-[28px] ">
                <h4 className="text-base md:text-lg lg:text-[23px] leading-[37px] font-medium text-[#A8ABB3]">
                  Card Issued
                </h4>
                <a href="#">
                  
                  <svg
                    width="29"
                    height="30"
                    viewBox="0 0 29 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8699 6.75737V6.76915M14.8699 15.0001V15.0119M14.8699 23.2429V23.2547M14.8699 7.93491C14.5576 7.93491 14.2581 7.81084 14.0373 7.59001C13.8164 7.36918 13.6924 7.06967 13.6924 6.75737C13.6924 6.44507 13.8164 6.14556 14.0373 5.92473C14.2581 5.7039 14.5576 5.57983 14.8699 5.57983C15.1822 5.57983 15.4817 5.7039 15.7026 5.92473C15.9234 6.14556 16.0475 6.44507 16.0475 6.75737C16.0475 7.06967 15.9234 7.36918 15.7026 7.59001C15.4817 7.81084 15.1822 7.93491 14.8699 7.93491ZM14.8699 16.1777C14.5576 16.1777 14.2581 16.0536 14.0373 15.8328C13.8164 15.6119 13.6924 15.3124 13.6924 15.0001C13.6924 14.6878 13.8164 14.3883 14.0373 14.1675C14.2581 13.9466 14.5576 13.8226 14.8699 13.8226C15.1822 13.8226 15.4817 13.9466 15.7026 14.1675C15.9234 14.3883 16.0475 14.6878 16.0475 15.0001C16.0475 15.3124 15.9234 15.6119 15.7026 15.8328C15.4817 16.0536 15.1822 16.1777 14.8699 16.1777ZM14.8699 24.4204C14.5576 24.4204 14.2581 24.2964 14.0373 24.0755C13.8164 23.8547 13.6924 23.5552 13.6924 23.2429C13.6924 22.9306 13.8164 22.6311 14.0373 22.4102C14.2581 22.1894 14.5576 22.0653 14.8699 22.0653C15.1822 22.0653 15.4817 22.1894 15.7026 22.4102C15.9234 22.6311 16.0475 22.9306 16.0475 23.2429C16.0475 23.5552 15.9234 23.8547 15.7026 24.0755C15.4817 24.2964 15.1822 24.4204 14.8699 24.4204Z"
                      stroke="#3E4558"
                      strokeWidth="2.35507"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <ChartTwo />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
