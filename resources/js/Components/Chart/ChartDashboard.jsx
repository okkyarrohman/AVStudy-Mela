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
import { faker } from "@faker-js/faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    // Title,
    Tooltip
    // Legend
);

const ChartDashboard = ({ data }) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        // plugins: {
        //     legend: {
        //         position: "top",
        //     },
        //     title: {
        //         display: false,
        //         text: "Chart.js Bar Chart",
        //     },
        // },
    };

    // const labels = ["January", "February", "March", "April"];
    const MAX_LABEL_LENGTH = 15; // Atur jumlah maksimum kata yang ingin Anda tampilkan

    const labels = data.map((kuis) => {
        // Memotong label menjadi jumlah kata maksimum
        return kuis.kategori.length > MAX_LABEL_LENGTH
            ? kuis.kategori.slice(0, MAX_LABEL_LENGTH) + "..." // Tambahkan ellipsis (...) jika label terpotong
            : kuis.kategori;
    });

    const datas = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: data.map((item, idx) => {
                    return item.y[0]?.total_points;
                }),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };

    // console.log(datas)
    console.log(data);
    return <Bar options={options} data={datas} />;
};

export default ChartDashboard;
