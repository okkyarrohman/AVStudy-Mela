import Sidebar from "@/Components/Sidebar/Sidebar";
import BtnPrimary from "@/element/button/BtnPrimary";
import BtnSecondary from "@/element/button/BtnSecondary";
import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { router } from "@inertiajs/react";

const CreateProposal = () => {
    const formik = useFormik({
        initialValues: {
            kategoriName: "",
            kategoriTenggat: "",
            kategoriWaktu: "",
        },
        validationSchema: Yup.object({
            kategoriName: Yup.string().required("Nama kategori harus diisi"),
            kategoriTenggat: Yup.string().required(
                "Tenggat kategori harus diisi"
            ),
            kategoriWaktu: Yup.number().required("Waktu kategori harus diisi"),
        }),
        onSubmit: (values) => {
            const data = new FormData();
            data.append("kuis", values.kategoriName);
            data.append("tenggat", values.kategoriTenggat);
            data.append("waktu", values.kategoriWaktu);
            console.log(data);
            router.post(`/guru/kuis/kategori`, data);
        },
    });
    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10 mx-5 my-10">
                    <div className="flex items-center mb-5">
                        <span className="text-gray-400">Kuis</span>
                        <Icon
                            className="text-xs mx-3 text-gray-400"
                            icon="ep:arrow-right-bold"
                        ></Icon>
                        <a href="/guru/kuis/kategori" className="text-gray-400">
                            Kategori
                        </a>
                        <Icon
                            className="text-xs mx-3 text-gray-400"
                            icon="ep:arrow-right-bold"
                        ></Icon>
                        <span className="font-bold text-black">
                            Tambah Kategori
                        </span>
                    </div>
                    <div className="my-5">
                        <div className="bg-white w-full shadow-xl border rounded-lg border-gray-300 ">
                            <div className="flex justify-between bg-purple-500 text-white p-4 w-full rounded-t-lg">
                                <h1 className=" font-bold">Tambah Kategori</h1>
                            </div>
                            <div className="flex h-4/5 items-center justify-center">
                                <div className="flex flex-col h-full w-full px-5 py-3 m-3">
                                    <div className="my-2">
                                        <label className="font-bold ">
                                            Kategori Kuis *
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="kategoriName"
                                                className={`w-full rounded border ${
                                                    formik.errors.kategoriName
                                                        ? "border-red-500"
                                                        : "border-gray-400"
                                                } mt-3`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={
                                                    formik.values.kategoriName
                                                }
                                                placeholder="Masukkan Kategori Kuis"
                                            />
                                            {formik.touched.kategoriName &&
                                            formik.errors.kategoriName ? (
                                                <div className="text-red-500">
                                                    {formik.errors.kategoriName}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <label className="font-bold ">
                                            Tenggat *
                                        </label>
                                        <div>
                                            <input
                                                type="date"
                                                name="kategoriTenggat"
                                                className={`w-full rounded border ${
                                                    formik.errors
                                                        .kategoriTenggat
                                                        ? "border-red-500"
                                                        : "border-gray-400"
                                                } mt-3`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={
                                                    formik.values
                                                        .kategoriTenggat
                                                }
                                                placeholder="Masukkan Tenggat"
                                            />
                                            {formik.touched.kategoriTenggat &&
                                            formik.errors.kategoriTenggat ? (
                                                <div className="text-red-500">
                                                    {
                                                        formik.errors
                                                            .kategoriTenggat
                                                    }
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <label className="font-bold ">
                                            Waktu *
                                        </label>
                                        <div>
                                            <input
                                                type="number"
                                                name="kategoriWaktu"
                                                className={`w-full rounded border ${
                                                    formik.errors.kategoriWaktu
                                                        ? "border-red-500"
                                                        : "border-gray-400"
                                                } mt-3`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={
                                                    formik.values.kategoriWaktu
                                                }
                                                placeholder="Masukkan Waktu (Menit)"
                                            />
                                            {formik.touched.kategoriWaktu &&
                                            formik.errors.kategoriWaktu ? (
                                                <div className="text-red-500">
                                                    {
                                                        formik.errors
                                                            .kategoriWaktu
                                                    }
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div className="flex justify-end mt-5">
                                        <div className="flex gap-5">
                                            <BtnSecondary
                                                onClick={() =>
                                                    router.visit(
                                                        "/guru/kuis/kategori"
                                                    )
                                                }
                                                text="Tutup"
                                            />
                                            <BtnPrimary
                                                onClick={() =>
                                                    formik.handleSubmit()
                                                }
                                                type="submit"
                                                className="text-lg"
                                                text="Simpan"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateProposal;
