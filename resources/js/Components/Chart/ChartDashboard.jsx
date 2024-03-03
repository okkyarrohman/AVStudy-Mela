import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {faker} from "@faker-js/faker"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ChartDashboard = ({data}) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: false,
                text: "Chart.js Bar Chart",
            },
        },
    };

    const labels = [
        "January",
        "February",
        "March",
        "April",
    ];

    const datas = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: data.map((item,idx)=>{
                    return item.y[0]?.total_points
                }),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };

    console.log(datas)
    return <Bar options={options} data={datas} />;
};

export default ChartDashboard;
