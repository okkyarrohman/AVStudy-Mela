import Sidebar from "@/Components/Sidebar/Sidebar";
import BtnPrimary from "@/element/button/BtnPrimary";
import BtnSecondary from "@/element/button/BtnSecondary";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditMateri = ({ proyeks }) => {
    const formik = useFormik({
        initialValues: {
            nama: proyeks?.nama || "",
            tenggat: proyeks?.tenggat || "",
            step1: proyeks?.step1 || "",
            deskripsi1: proyeks?.deskripsi1 || "",
            step2: proyeks?.step2 || "",
            deskripsi2: proyeks?.deskripsi2 || "",
            step3: proyeks?.step3 || "",
            deskripsi3: proyeks?.deskripsi3 || "",
            step4: proyeks?.step4 || "",
            deskripsi4: proyeks?.deskripsi4 || "",
        },
        validationSchema: Yup.object({
            nama: Yup.string().required("Nama proyek harus diisi"),
            tenggat: Yup.string().required("Tenggat proyek harus diisi"),
            step1: Yup.string().required("Langkah 1 proyek harus diisi"),
            deskripsi1: Yup.string().required(
                "Deskripsi langkah 1 proyek harus diisi"
            ),
            step2: Yup.string().required("Langkah 2 proyek harus diisi"),
            deskripsi2: Yup.string().required(
                "Deskripsi langkah 2 proyek harus diisi"
            ),
            step3: Yup.string().required("Langkah 3 proyek harus diisi"),
            deskripsi3: Yup.string().required(
                "Deskripsi langkah 3 proyek harus diisi"
            ),
            step4: Yup.string().required("Langkah 4 proyek harus diisi"),
            deskripsi4: Yup.string().required(
                "Deskripsi langkah 4 proyek harus diisi"
            ),
        }),
        onSubmit: (values) => {
            const data = {
                _method: "PATCH",
                nama: values.nama,
                tenggat: values.tenggat,
                step1: values.step1,
                deskripsi1: values.deskripsi1,
                step2: values.step2,
                deskripsi2: values.deskripsi2,
                step3: values.step3,
                deskripsi3: values.deskripsi3,
                step4: values.step4,
                deskripsi4: values.deskripsi4,
            };

            console.log(data);
            router.post(`/guru/proyek/${proyeks.id}`, data);
        },
    });

    const [step, setStep] = useState(1);
    const handleNext = () => {
        setStep(step + 1);
    };

    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10 m-10">
                    <div className="flex items-center">
                        <a href="/guru/proyek" className="text-gray-400">
                            Proyek
                        </a>
                        <Icon
                            className="text-xs mx-3 text-gray-400"
                            icon="ep:arrow-right-bold"
                        ></Icon>
                        <span className="font-bold text-black">
                            Tambah Proyek
                        </span>
                    </div>
                    <div className="my-5">
                        <div className="bg-white w-full shadow-xl border rounded-lg border-gray-300 ">
                            <div className="flex justify-between bg-purple-500 text-white p-4 w-full rounded-t-lg">
                                <h1 className=" font-bold">Tambah Proyek</h1>
                            </div>
                            <div className="flex h-4/5 items-center justify-center">
                                <div className="flex flex-col h-full w-full px-5 py-3 m-3">
                                    {step == 1 && (
                                        <>
                                            <div className="my-2">
                                                <label className="font-bold ">
                                                    Nama Proyek *
                                                </label>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="nama"
                                                        className={`w-full rounded border ${
                                                            formik.errors.nama
                                                                ? "border-red-500"
                                                                : "border-gray-400"
                                                        } mt-3`}
                                                        onChange={
                                                            formik.handleChange
                                                        }
                                                        onBlur={
                                                            formik.handleBlur
                                                        }
                                                        value={
                                                            formik.values.nama
                                                        }
                                                        placeholder="Masukkan Nama Proyek"
                                                    />
                                                    {formik.touched.nama &&
                                                    formik.errors.nama ? (
                                                        <div className="text-red-500">
                                                            {formik.errors.nama}
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
                                                        name="tenggat"
                                                        className={`w-full rounded border ${
                                                            formik.errors
                                                                .tenggat
                                                                ? "border-red-500"
                                                                : "border-gray-400"
                                                        } mt-3`}
                                                        onChange={
                                                            formik.handleChange
                                                        }
                                                        onBlur={
                                                            formik.handleBlur
                                                        }
                                                        value={
                                                            formik.values
                                                                .tenggat
                                                        }
                                                        placeholder="Masukkan Tenggat Proyek"
                                                    />
                                                    {formik.touched.tenggat &&
                                                    formik.errors.tenggat ? (
                                                        <div className="text-red-500">
                                                            {
                                                                formik.errors
                                                                    .tenggat
                                                            }
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="my-2">
                                                <label className="font-bold ">
                                                    Langkah 1 *
                                                </label>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="step1"
                                                        className={`w-full rounded border ${
                                                            formik.errors.step1
                                                                ? "border-red-500"
                                                                : "border-gray-400"
                                                        } mt-3`}
                                                        onChange={
                                                            formik.handleChange
                                                        }
                                                        onBlur={
                                                            formik.handleBlur
                                                        }
                                                        value={
                                                            formik.values.step1
                                                        }
                                                        placeholder="Masukkan Langkah 1 Proyek"
                                                    />
                                                    {formik.touched.step1 &&
                                                    formik.errors.step1 ? (
                                                        <div className="text-red-500">
                                                            {
                                                                formik.errors
                                                                    .step1
                                                            }
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="my-2">
                                                <label className="font-bold">
                                                    Deskripsi Langkah 1 *
                                                </label>
                                                <div>
                                                    <textarea
                                                        type="text"
                                                        name="deskripsi1"
                                                        className={`w-full rounded border ${
                                                            formik.errors
                                                                .deskripsi1
                                                                ? "border-red-500"
                                                                : "border-gray-400"
                                                        } mt-3`}
                                                        placeholder="Masukkan Deskripsi Langkah 1 Proyek"
                                                        rows={5}
                                                        onChange={
                                                            formik.handleChange
                                                        }
                                                        onBlur={
                                                            formik.handleBlur
                                                        }
                                                        value={
                                                            formik.values
                                                                .deskripsi1
                                                        }
                                                    />
                                                    {formik.touched
                                                        .deskripsi1 &&
                                                    formik.errors.deskripsi1 ? (
                                                        <div className="text-red-500">
                                                            {
                                                                formik.errors
                                                                    .deskripsi1
                                                            }
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {step == 2 && (
                                        <>
                                            <div className="my-2">
                                                <label className="font-bold ">
                                                    Langkah 2 *
                                                </label>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="step2"
                                                        className={`w-full rounded border ${
                                                            formik.errors.step2
                                                                ? "border-red-500"
                                                                : "border-gray-400"
                                                        } mt-3`}
                                                        onChange={
                                                            formik.handleChange
                                                        }
                                                        onBlur={
                                                            formik.handleBlur
                                                        }
                                                        value={
                                                            formik.values.step2
                                                        }
                                                        placeholder="Masukkan Langkah 2 Proyek"
                                                    />
                                                    {formik.touched.step2 &&
                                                    formik.errors.step2 ? (
                                                        <div className="text-red-500">
                                                            {
                                                                formik.errors
                                                                    .step2
                                                            }
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="my-2">
                                                <label className="font-bold">
                                                    Deskripsi Langkah 2 *
                                                </label>
                                                <div>
                                                    <textarea
                                                        type="text"
                                                        name="deskripsi2"
                                                        className={`w-full rounded border ${
                                                            formik.errors
                                                                .deskripsi2
                                                                ? "border-red-500"
                                                                : "border-gray-400"
                                                        } mt-3`}
                                                        placeholder="Masukkan Deskripsi Langkah 2 Proyek"
                                                        rows={5}
                                                        onChange={
                                                            formik.handleChange
                                                        }
                                                        onBlur={
                                                            formik.handleBlur
                                                        }
                                                        value={
                                                            formik.values
                                                                .deskripsi2
                                                        }
                                                    />
                                                    {formik.touched
                                                        .deskripsi2 &&
                                                    formik.errors.deskripsi2 ? (
                                                        <div className="text-red-500">
                                                            {
                                                                formik.errors
                                                                    .deskripsi2
                                                            }
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {step == 3 && (
                                        <>
                                            <div className="my-2">
                                                <label className="font-bold ">
                                                    Langkah 3 *
                                                </label>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="step3"
                                                        className={`w-full rounded border ${
                                                            formik.errors.step3
                                                                ? "border-red-500"
                                                                : "border-gray-400"
                                                        } mt-3`}
                                                        onChange={
                                                            formik.handleChange
                                                        }
                                                        onBlur={
                                                            formik.handleBlur
                                                        }
                                                        value={
                                                            formik.values.step3
                                                        }
                                                        placeholder="Masukkan Langkah 3 Proyek"
                                                    />
                                                    {formik.touched.step3 &&
                                                    formik.errors.step3 ? (
                                                        <div className="text-red-500">
                                                            {
                                                                formik.errors
                                                                    .step3
                                                            }
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="my-2">
                                                <label className="font-bold">
                                                    Deskripsi Langkah 3 *
                                                </label>
                                                <div>
                                                    <textarea
                                                        type="text"
                                                        name="deskripsi3"
                                                        className={`w-full rounded border ${
                                                            formik.errors
                                                                .deskripsi3
                                                                ? "border-red-500"
                                                                : "border-gray-400"
                                                        } mt-3`}
                                                        placeholder="Masukkan Deskripsi Langkah 2 Proyek"
                                                        rows={5}
                                                        onChange={
                                                            formik.handleChange
                                                        }
                                                        onBlur={
                                                            formik.handleBlur
                                                        }
                                                        value={
                                                            formik.values
                                                                .deskripsi3
                                                        }
                                                    />
                                                    {formik.touched
                                                        .deskripsi3 &&
                                                    formik.errors.deskripsi3 ? (
                                                        <div className="text-red-500">
                                                            {
                                                                formik.errors
                                                                    .deskripsi3
                                                            }
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {step == 4 && (
                                        <>
                                            <div className="my-2">
                                                <label className="font-bold ">
                                                    Langkah 4 *
                                                </label>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="step4"
                                                        className={`w-full rounded border ${
                                                            formik.errors.step4
                                                                ? "border-red-500"
                                                                : "border-gray-400"
                                                        } mt-3`}
                                                        onChange={
                                                            formik.handleChange
                                                        }
                                                        onBlur={
                                                            formik.handleBlur
                                                        }
                                                        value={
                                                            formik.values.step4
                                                        }
                                                        placeholder="Masukkan Langkah 2 Proyek"
                                                    />
                                                    {formik.touched.step4 &&
                                                    formik.errors.step4 ? (
                                                        <div className="text-red-500">
                                                            {
                                                                formik.errors
                                                                    .step4
                                                            }
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="my-2">
                                                <label className="font-bold">
                                                    Deskripsi Langkah 4 *
                                                </label>
                                                <div>
                                                    <textarea
                                                        type="text"
                                                        name="deskripsi4"
                                                        className={`w-full rounded border ${
                                                            formik.errors
                                                                .deskripsi4
                                                                ? "border-red-500"
                                                                : "border-gray-400"
                                                        } mt-3`}
                                                        placeholder="Masukkan Deskripsi Langkah 2 Proyek"
                                                        rows={5}
                                                        onChange={
                                                            formik.handleChange
                                                        }
                                                        onBlur={
                                                            formik.handleBlur
                                                        }
                                                        value={
                                                            formik.values
                                                                .deskripsi4
                                                        }
                                                    />
                                                    {formik.touched
                                                        .deskripsi4 &&
                                                    formik.errors.deskripsi4 ? (
                                                        <div className="text-red-500">
                                                            {
                                                                formik.errors
                                                                    .deskripsi4
                                                            }
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    <div className="flex justify-end">
                                        <div className="flex gap-5">
                                            <BtnSecondary
                                                onClick={() =>
                                                    router.visit("/guru/proyek")
                                                }
                                                text="Tutup"
                                            />
                                            <BtnPrimary
                                                onClick={
                                                    step == 4
                                                        ? () =>
                                                              formik.handleSubmit()
                                                        : () => handleNext()
                                                }
                                                className="text-lg"
                                                text={
                                                    step == 4
                                                        ? "Submit"
                                                        : "Next"
                                                }
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

export default EditMateri;
