import Sidebar from "@/Components/Sidebar/Sidebar";
import BtnPrimary from "@/element/button/BtnPrimary";
import BtnSecondary from "@/element/button/BtnSecondary";
import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { router } from "@inertiajs/react";

const CreateSoal = ({ kategoris }) => {
    const formik = useFormik({
        initialValues: {
            kuisKategori: "",
            kuisPertanyaan: "",
            gambar: null,
        },
        validationSchema: Yup.object({
            kuisKategori: Yup.string().required("Kategori Kuis harus diisi"),
            kuisPertanyaan: Yup.string().required("Pertanyaan Kuis harus diisi"),
        }),
        onSubmit: (values) => {
            const data = new FormData();
            data.append("kategori_kuis_id", values.kuisKategori);
            data.append("soal", values.kuisPertanyaan);
            data.append("gambar", values.gambar);
            console.log(data);
            router.post(`/guru/kuis/soal`, data);
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
                        <a href="/guru/kuis/soal" className="text-gray-400">
                            Soal
                        </a>
                        <Icon
                            className="text-xs mx-3 text-gray-400"
                            icon="ep:arrow-right-bold"
                        ></Icon>
                        <span className="font-bold text-black">
                            Tambah Soal
                        </span>
                    </div>
                    <div className="my-5">
                        <div className="bg-white w-full shadow-xl border rounded-lg border-gray-300 ">
                            <div className="flex justify-between bg-purple-500 text-white p-4 w-full rounded-t-lg">
                                <h1 className=" font-bold">Tambah Soal</h1>
                            </div>
                            <div className="flex h-4/5 items-center justify-center">
                                <div className="flex flex-col h-full w-full px-5 py-3 m-3">
                                    <div className="my-2">
                                        <label className="font-bold ">
                                            Kategori Kuis *
                                        </label>
                                        <div>
                                            <select
                                                name="kuisKategori"
                                                className={`w-full rounded border ${
                                                    formik.errors.kuisKategori
                                                        ? "border-red-500"
                                                        : "border-gray-400"
                                                } mt-3`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={
                                                    formik.values.kuisKategori
                                                }
                                                placeholder="Masukkan Kategori Kuis"
                                            >
                                                <option
                                                    value={""}
                                                    disabled
                                                    selected
                                                    hidden
                                                >
                                                    Pilih Kategori
                                                </option>
                                                {kategoris.map((item, idx) => {
                                                    return (
                                                        <>
                                                            <option
                                                                value={item.id}
                                                            >
                                                                {item.kuis}
                                                            </option>
                                                        </>
                                                    );
                                                })}
                                            </select>
                                            {formik.touched.kuisKategori &&
                                            formik.errors.kuisKategori ? (
                                                <div className="text-red-500">
                                                    {formik.errors.kuisKategori}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <label className="font-bold ">
                                            Pertanyaan *
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="kuisPertanyaan"
                                                className={`w-full rounded border ${
                                                    formik.errors.kuisPertanyaan
                                                        ? "border-red-500"
                                                        : "border-gray-400"
                                                } mt-3`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={
                                                    formik.values.kuisPertanyaan
                                                }
                                                placeholder="Masukkan Pertanyaan"
                                            />
                                            {formik.touched.kuisPertanyaan &&
                                            formik.errors.kuisPertanyaan ? (
                                                <div className="text-red-500">
                                                    {formik.errors.kuisPertanyaan}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <p className="font-bold mb-3">
                                            Gambar (Opsional)
                                        </p>
                                        <label className="w-[15%] flex justify-center items-center font-bold py-2 my-1  text-black border-black border border-dashed rounded-lg">
                                            <Icon
                                                icon="tabler:plus"
                                                className="me-2"
                                            ></Icon>
                                            <input
                                                name="gambar"
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    formik.setFieldValue(
                                                        "gambar",
                                                        e.target.files[0]
                                                    );
                                                }}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.values.gambar
                                                ? formik.values.gambar.name
                                                : "Pilih File"}
                                        </label>
                                        {formik.touched.gambar &&
                                        formik.errors.gambar ? (
                                            <div className="text-red-500">
                                                {formik.errors.gambar}
                                            </div>
                                        ) : null}
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

export default CreateSoal;
