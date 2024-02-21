export default function ThisDate() {
    const namaBulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    const tanggalHariIni = new Date();

    const tanggal = tanggalHariIni.getDate();
    const bulanIndex = tanggalHariIni.getMonth();
    const tahun = tanggalHariIni.getFullYear();

    const namaBulanID = namaBulan[bulanIndex];

    const hasilFormat = `${tanggal} ${namaBulanID} ${tahun}`;

    return hasilFormat
}