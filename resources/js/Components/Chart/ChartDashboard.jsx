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

const ChartDashboard = () => {
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

    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: labels.map(() =>
                    faker.datatype.number({ min: 0, max: 1000 })
                ),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };
    return <Bar options={options} data={data} />;
};

export default ChartDashboard;
