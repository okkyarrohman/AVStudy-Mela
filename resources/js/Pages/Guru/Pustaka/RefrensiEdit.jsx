import Sidebar from "@/Components/Sidebar/Sidebar";
import BtnPrimary from "@/element/button/BtnPrimary";
import BtnSecondary from "@/element/button/BtnSecondary";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditRefrensi = ({ referensis }) => {
    console.log(referensis)

    const formik = useFormik({
        initialValues: {
            refrensiName: referensis?.judul,
            refrensiSumber: referensis?.sumber,
            refrensiLink: referensis?.link,
        },
        validationSchema: Yup.object({
            refrensiName: Yup.string().required("Nama Refrensi harus diisi"),
            refrensiSumber: Yup.string().required(
                "Sumber Refrensi harus diisi"
            ),
            refrensiLink: Yup.mixed().required(
                "Refrensi Link Refrensi harus diisi"
            ),
        }),
        onSubmit: (values) => {
            const data = {
                judul: values.refrensiName,
                sumber: values.refrensiSumber,
                link: values.refrensiLink,
            };

            console.log(data);
            router.put(`/guru/pustaka/refrensi/${referensis.id}`, data);
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
                        <a href="/guru/pustaka" className="text-gray-400">
                            Pustaka
                        </a>
                        <Icon
                            className="text-xs mx-3 text-gray-400"
                            icon="ep:arrow-right-bold"
                        ></Icon>
                        <a
                            href="/guru/pustaka/refrensi"
                            className="text-gray-400"
                        >
                            Refrensi
                        </a>
                        <Icon
                            className="text-xs mx-3 text-gray-400"
                            icon="ep:arrow-right-bold"
                        ></Icon>
                        <span className="font-bold text-black">
                            Edit Refrensi
                        </span>
                    </div>
                    <div className="my-5">
                        <div className="bg-white w-full shadow-xl border rounded-lg border-gray-300 ">
                            <div className="flex justify-between bg-purple-500 text-white p-4 w-full rounded-t-lg">
                                <h1 className=" font-bold">Edit Refrensi</h1>
                            </div>
                            <div className="flex h-4/5 items-center justify-center">
                                <div className="flex flex-col h-full w-full px-5 py-3 m-3">
                                    <div className="my-2">
                                        <label className="font-bold ">
                                            Judul Refrensi *
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="refrensiName"
                                                className={`w-full rounded border ${
                                                    formik.errors.refrensiName
                                                        ? "border-red-500"
                                                        : "border-gray-400"
                                                } mt-3`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={
                                                    formik.values.refrensiName
                                                }
                                                placeholder="Masukkan Judul Refrensi"
                                            />
                                            {formik.touched.refrensiName &&
                                            formik.errors.refrensiName ? (
                                                <div className="text-red-500">
                                                    {formik.errors.refrensiName}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <label className="font-bold ">
                                            Sumber Refrensi *
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="refrensiSumber"
                                                className={`w-full rounded border ${
                                                    formik.errors.refrensiSumber
                                                        ? "border-red-500"
                                                        : "border-gray-400"
                                                } mt-3`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={
                                                    formik.values.refrensiSumber
                                                }
                                                placeholder="Masukkan Sumber Refrensi"
                                            />
                                            {formik.touched.refrensiSumber &&
                                            formik.errors.refrensiSumber ? (
                                                <div className="text-red-500">
                                                    {
                                                        formik.errors
                                                            .refrensiSumber
                                                    }
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="my-2 mb-5">
                                        <label className="font-bold ">
                                            Link Sumber Refrensi *
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="refrensiLink"
                                                className={`w-full rounded border ${
                                                    formik.errors.refrensiLink
                                                        ? "border-red-500"
                                                        : "border-gray-400"
                                                } mt-3`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={
                                                    formik.values.refrensiLink
                                                }
                                                placeholder="Masukkan Link Sumber Refrensi"
                                            />
                                            {formik.touched.refrensiLink &&
                                            formik.errors.refrensiLink ? (
                                                <div className="text-red-500">
                                                    {formik.errors.refrensiLink}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div className="flex justify-end">
                                        <div className="flex gap-5">
                                            <BtnSecondary
                                                onClick={() =>
                                                    router.visit("/guru/materi")
                                                }
                                                text="Tutup"
                                            />
                                            <BtnPrimary
                                                onClick={() => {
                                                    formik.handleSubmit();
                                                }}
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

export default EditRefrensi;
