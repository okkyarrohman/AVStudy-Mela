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
            proposalName: "",
            cover: null,
            content: null,
        },
        validationSchema: Yup.object({
            proposalName: Yup.string().required("Nama Proposal harus diisi"),
            cover: Yup.mixed().required("Cover Proposal harus diisi"),
            content: Yup.mixed().required("Konten Proposal harus diisi"),
        }),
        onSubmit: (values) => {
            const data = new FormData();
            data.append("judl", values.proposalName);
            data.append("cover", values.cover);
            data.append("konten", values.content);
            console.log(data);
            router.post(`/guru/pustaka/proposal`, data);
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
                            href="/guru/pustaka/proposal"
                            className="text-gray-400"
                        >
                            Proposal
                        </a>
                        <Icon
                            className="text-xs mx-3 text-gray-400"
                            icon="ep:arrow-right-bold"
                        ></Icon>
                        <span className="font-bold text-black">
                            Tambah Proposal
                        </span>
                    </div>
                    <div className="my-5">
                        <div className="bg-white w-full shadow-xl border rounded-lg border-gray-300 ">
                            <div className="flex justify-between bg-purple-500 text-white p-4 w-full rounded-t-lg">
                                <h1 className=" font-bold">Tambah Proposal</h1>
                            </div>
                            <div className="flex h-4/5 items-center justify-center">
                                <div className="flex flex-col h-full w-full px-5 py-3 m-3">
                                    <div className="my-2">
                                        <label className="font-bold ">
                                            Judul Proposal *
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="proposalName"
                                                placeholder="Masukkan Judul Proposal"
                                                className={`w-full rounded border ${
                                                    formik.errors.proposalName
                                                        ? "border-red-500"
                                                        : "border-gray-400"
                                                } mt-3`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={
                                                    formik.values.proposalName
                                                }
                                            />
                                            {formik.touched.proposalName &&
                                            formik.errors.proposalName ? (
                                                <div className="text-red-500">
                                                    {formik.errors.proposalName}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <p className="font-bold mb-3">
                                            Cover (.jpg/png) *
                                        </p>
                                        <label className="w-fit flex items-center font-bold py-2 my-1 px-5 text-black border-black border border-dashed rounded-lg">
                                            <Icon
                                                icon="tabler:plus"
                                                className="me-2"
                                            ></Icon>
                                            <input
                                                name="cover"
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    formik.setFieldValue(
                                                        "cover",
                                                        e.target.files[0]
                                                    );
                                                }}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.values.cover
                                                ? formik.values.cover.name
                                                : "Pilih File"}
                                        </label>
                                        {formik.touched.cover &&
                                        formik.errors.cover ? (
                                            <div className="text-red-500">
                                                {formik.errors.cover}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="">
                                        <p className="font-bold mb-3">
                                            Konten Materi (.pdf) *
                                        </p>
                                        <label className="w-fit flex items-center font-bold py-2 my-1 px-5 text-black border-black border border-dashed rounded-lg">
                                            <Icon
                                                icon="tabler:plus"
                                                className="me-2"
                                            ></Icon>
                                            <input
                                                name="content"
                                                type="file"
                                                accept="pdf/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    formik.setFieldValue(
                                                        "content",
                                                        e.target.files[0]
                                                    );
                                                }}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.values.content
                                                ? formik.values.content.name
                                                : "Pilih File"}
                                        </label>
                                        {formik.touched.content &&
                                        formik.errors.content ? (
                                            <div className="text-red-500">
                                                {formik.errors.content}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="flex justify-end">
                                        <div className="flex gap-5">
                                            <BtnSecondary
                                                onClick={() =>
                                                    router.visit(
                                                        "/guru/pustaka/proposal"
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
