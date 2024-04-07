import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head, router, useForm } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import { Icon } from "@iconify/react";
import BtnPrimary from "@/element/button/BtnPrimary";
import { useFormik } from "formik";
import { useState } from "react";

export default function Edit({ auth, users, usersRole }) {
    const [previewPhoto, setPreviewPhoto] = useState(null);

    console.log(users);
    const formik = useFormik({
        initialValues: {
            name: users?.name || "",
            email: users?.email || "",
            foto: users?.foto || null,
            alamat: users?.alamat || "",
            telp: users?.telp || "",
        },
        onSubmit: (values) => {
            const data = {
                _method: "PATCH",
                name: values.name,
                email: values.email,
                foto: values.foto,
                alamat: values.alamat,
                telp: values.telp,
            };

            console.log(data);
            router.post(`/profile/${users.id}`, data);
        },
    });

    return (
        <div className="min-h-screen grid grid-cols-12">
            <div className="col-span-2">
                <Sidebar />
            </div>
            <div className="col-span-10 m-5">
                <div className="relative rounded-xl overflow-hidden bg-gray-100">
                    <div className="w-full bg-purple-600 h-36 relative">
                        <svg
                            width="261"
                            height="63"
                            viewBox="0 0 261 63"
                            fill="none"
                            className="absolute bottom-0 right-36"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="261"
                                height="275.13"
                                rx="130.5"
                                fill="#FB7D5B"
                            />
                        </svg>
                        <svg
                            width="261"
                            height="109"
                            viewBox="0 0 261 109"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute bottom-0 right-10"
                        >
                            <rect
                                y="0.6521"
                                width="261"
                                height="275.13"
                                rx="130.5"
                                fill="#FCC43E"
                            />
                        </svg>
                    </div>
                    <label htmlFor="foto" className="group">
                        <input
                            type="file"
                            id="foto"
                            name="foto"
                            className="hidden"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    let reader = new FileReader();
                                    reader.onload = (event) => {
                                        setPreviewPhoto(event.target.result);
                                    };
                                    reader.readAsDataURL(e.target.files[0]);
                                }
                                formik.setFieldValue("foto", e.target.files[0]);
                            }}
                            onBlur={formik.handleBlur}
                        />
                        <img
                            src={
                                previewPhoto
                                    ? previewPhoto
                                    : users.foto
                                    ? `/storage/profile/${users.foto}`
                                    : `/assets/PhotoProfile.svg`
                            }
                            className="size-32 object-cover rounded-full absolute top-20 left-10 bg-white border-8 border-white"
                        ></img>
                        <div className="group-hover:block hidden absolute top-20 left-10 size-32 rounded-full bg-black bg-opacity-50">
                            <p className="text-white font-semibold text-xl text-center relative top-10">
                                Change <br /> Photo
                            </p>
                        </div>
                    </label>
                    <div className="pt-20 p-12">
                        <p className="text-3xl font-semibold text-blue-950">
                            {users.name}
                        </p>
                        <div className="flex items-center">
                            <div className="w-80 space-y-3">
                                <p className="capitalize text-lg font-semibold text-blue-950">
                                    {usersRole[0]}
                                </p>
                                <p className="text-gray-500 text-lg flex gap-3">
                                    <Icon
                                        className="size-6"
                                        icon="carbon:location"
                                    ></Icon>
                                    {users.alamat ? users.alamat : "---"}
                                </p>
                            </div>
                            <div className="grid grid-cols-2 w-full">
                                <div>
                                    <p className="text-lg text-gray-500">
                                        Phone
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 rounded-full bg-orange-400 w-fit">
                                            <Icon
                                                icon="ic:baseline-phone"
                                                className="size-6 text-white"
                                            ></Icon>
                                        </div>
                                        <p className="text-lg font-semibold text-blue-950">
                                            {users.telp ? users.telp : "---"}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg text-gray-500">
                                        Email
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 rounded-full bg-orange-400 w-fit">
                                            <Icon
                                                icon="ic:baseline-email"
                                                className="size-6 text-white"
                                            ></Icon>
                                        </div>
                                        <p className="text-lg font-semibold text-blue-950">
                                            {users.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-12">
                    <p className="font-semibold text-3xl mb-6">Edit Profil</p>
                    <div className="space-y-4">
                        <div>
                            <label className="font-bold ">Nama</label>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    className={`w-full rounded border border-gray-400 mt-3`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                    placeholder="Masukkan Nama"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-bold ">Email</label>
                            <div>
                                <input
                                    type="text"
                                    name="email"
                                    className={`w-full rounded border border-gray-400 mt-3`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    placeholder="Masukkan Email"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4">
                            <div>
                                <label className="font-bold ">Alamat</label>
                                <div>
                                    <input
                                        type="text"
                                        name="alamat"
                                        className={`w-full rounded border border-gray-400 mt-3`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.alamat}
                                        placeholder="Masukkan Alamat"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="font-bold">No. Telepon</label>
                                <div>
                                    <input
                                        type="text"
                                        name="telp"
                                        className={`w-full rounded border border-gray-400 mt-3`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.telp}
                                        placeholder="Masukkan No. Telepon"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-fit ml-auto">
                            <BtnPrimary
                                onClick={() => formik.handleSubmit()}
                                text="Simpan"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
