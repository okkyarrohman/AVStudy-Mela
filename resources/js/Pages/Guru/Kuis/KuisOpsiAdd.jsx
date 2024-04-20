import Sidebar from "@/Components/Sidebar/Sidebar";
import BtnPrimary from "@/element/button/BtnPrimary";
import BtnSecondary from "@/element/button/BtnSecondary";
import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { router } from "@inertiajs/react";

const CreateProposal = ({ soals }) => {
    const formik = useFormik({
        initialValues: {
            kuisPertanyaan: "",
            kuisOpsi: "",
            kuisPoin: null,
        },
        validationSchema: Yup.object({
            kuisPertanyaan: Yup.string().required(
                "Pertanyaan kuis harus diisi"
            ),
            kuisOpsi: Yup.string().required("Opsi kuis harus diisi"),
            kuisPoin: Yup.number().required("Poin kuis harus diisi"),
        }),
        onSubmit: (values) => {
            const data = new FormData();
            data.append("soal_id", values.kuisPertanyaan);
            data.append("opsi", values.kuisOpsi);
            data.append("point", values.kuisPoin);
            console.log(data);
            router.post(`/guru/kuis/opsi`, data);
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
                        <a href="/guru/kuis/opsi" className="text-gray-400">
                            Opsi
                        </a>
                        <Icon
                            className="text-xs mx-3 text-gray-400"
                            icon="ep:arrow-right-bold"
                        ></Icon>
                        <span className="font-bold text-black">
                            Tambah Opsi
                        </span>
                    </div>
                    <div className="my-5">
                        <div className="bg-white w-full shadow-xl border rounded-lg border-gray-300 ">
                            <div className="flex justify-between bg-purple-500 text-white p-4 w-full rounded-t-lg">
                                <h1 className=" font-bold">Tambah Opsi</h1>
                            </div>
                            <div className="flex h-4/5 items-center justify-center">
                                <div className="flex flex-col h-full w-full px-5 py-3 m-3">
                                    <div className="my-2">
                                        <label className="font-bold ">
                                            Pertanyaan *
                                        </label>
                                        <div>
                                            <select
                                                name="kuisPertanyaan"
                                                className={`w-full rounded border ${
                                                    formik.errors.kuisPertanyaan
                                                        ? "border-red-500"
                                                        : "border-gray-400"
                                                } mt-3`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.kuisPertanyaan}
                                                placeholder="Masukkan Kategori Kuis"
                                            >
                                                <option
                                                    value={""}
                                                    disabled
                                                    selected
                                                    hidden
                                                >
                                                    Pilih Pertanyaan
                                                </option>
                                                {soals.map((item, idx) => {
                                                    return (
                                                        <option value={item.id}>
                                                            {item.soal}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                            {formik.touched.kuisPertanyaan &&
                                            formik.errors.kuisPertanyaan ? (
                                                <div className="text-red-500">
                                                    {formik.errors.kuisPertanyaan}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <label className="font-bold ">
                                            Opsi Jawaban *
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="kuisOpsi"
                                                className={`w-full rounded border ${
                                                    formik.errors.kuisOpsi
                                                        ? "border-red-500"
                                                        : "border-gray-400"
                                                } mt-3`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.kuisOpsi}
                                                F
                                                placeholder="Masukkan Opsi Jawaban"
                                            />
                                            {formik.touched.kuisOpsi &&
                                            formik.errors.kuisOpsi ? (
                                                <div className="text-red-500">
                                                    {formik.errors.kuisOpsi}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <label className="font-bold ">
                                            Poin *
                                        </label>
                                        <div>
                                            <input
                                                type="number"
                                                name="kuisPoin"
                                                className={`w-full rounded border ${
                                                    formik.errors.kuisPoin
                                                        ? "border-red-500"
                                                        : "border-gray-400"
                                                } mt-3`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.kuisPoin}
                                                placeholder="Masukkan Poin Jawaban"
                                            />
                                            {formik.touched.kuisPoin &&
                                            formik.errors.kuisPoin ? (
                                                <div className="text-red-500">
                                                    {formik.errors.kuisPoin}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div className="flex justify-end mt-5">
                                        <div className="flex gap-5">
                                            <BtnSecondary
                                                onClick={() =>
                                                    router.visit(
                                                        "/guru/kuis/opsi"
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
