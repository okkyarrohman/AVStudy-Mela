import Sidebar from "@/Components/Sidebar/Sidebar";
import BtnPrimary from "@/element/button/BtnPrimary";
import BtnSecondary from "@/element/button/BtnSecondary";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditReferensi = ({ referensis }) => {
    console.log(referensis);

    const formik = useFormik({
        initialValues: {
            referensiName: referensis?.judul,
            referensiSumber: referensis?.sumber,
            referensiLink: referensis?.link,
        },
        validationSchema: Yup.object({
            referensiName: Yup.string().required("Nama Referensi harus diisi"),
            referensiSumber: Yup.string().required(
                "Sumber Referensi harus diisi"
            ),
            referensiLink: Yup.mixed().required(
                "Referensi Link Referensi harus diisi"
            ),
        }),
        onSubmit: (values) => {
            const data = {
                judul: values.referensiName,
                sumber: values.referensiSumber,
                link: values.referensiLink,
            };

            console.log(data);
            router.put(`/guru/pustaka/referensi/${referensis.id}`, data);
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
                            href="/guru/pustaka/referensi"
                            className="text-gray-400"
                        >
                            Referensi
                        </a>
                        <Icon
                            className="text-xs mx-3 text-gray-400"
                            icon="ep:arrow-right-bold"
                        ></Icon>
                        <span className="font-bold text-black">
                            Edit Referensi
                        </span>
                    </div>
                    <div className="my-5">
                        <div className="bg-white w-full shadow-xl border rounded-lg border-gray-300 ">
                            <div className="flex justify-between bg-purple-500 text-white p-4 w-full rounded-t-lg">
                                <h1 className=" font-bold">Edit Referensi</h1>
                            </div>
                            <div className="flex h-4/5 items-center justify-center">
                                <div className="flex flex-col h-full w-full px-5 py-3 m-3">
                                    <div className="my-2">
                                        <label className="font-bold ">
                                            Judul Referensi *
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="referensiName"
                                                className={`w-full rounded border ${
                                                    formik.errors.referensiName
                                                        ? "border-red-500"
                                                        : "border-gray-400"
                                                } mt-3`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={
                                                    formik.values.referensiName
                                                }
                                                placeholder="Masukkan Judul Referensi"
                                            />
                                            {formik.touched.referensiName &&
                                            formik.errors.referensiName ? (
                                                <div className="text-red-500">
                                                    {
                                                        formik.errors
                                                            .referensiName
                                                    }
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <label className="font-bold ">
                                            Sumber Referensi *
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="referensiSumber"
                                                className={`w-full rounded border ${
                                                    formik.errors
                                                        .referensiSumber
                                                        ? "border-red-500"
                                                        : "border-gray-400"
                                                } mt-3`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={
                                                    formik.values
                                                        .referensiSumber
                                                }
                                                placeholder="Masukkan Sumber Referensi"
                                            />
                                            {formik.touched.referensiSumber &&
                                            formik.errors.referensiSumber ? (
                                                <div className="text-red-500">
                                                    {
                                                        formik.errors
                                                            .referensiSumber
                                                    }
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="my-2 mb-5">
                                        <label className="font-bold ">
                                            Link Sumber Referensi *
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="referensiLink"
                                                className={`w-full rounded border ${
                                                    formik.errors.referensiLink
                                                        ? "border-red-500"
                                                        : "border-gray-400"
                                                } mt-3`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={
                                                    formik.values.referensiLink
                                                }
                                                placeholder="Masukkan Link Sumber Referensi"
                                            />
                                            {formik.touched.referensiLink &&
                                            formik.errors.referensiLink ? (
                                                <div className="text-red-500">
                                                    {
                                                        formik.errors
                                                            .referensiLink
                                                    }
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div className="flex justify-end">
                                        <div className="flex gap-5">
                                            <BtnSecondary
                                                onClick={() =>
                                                    router.visit(
                                                        "/guru/pustaka/referensi"
                                                    )
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

export default EditReferensi;
