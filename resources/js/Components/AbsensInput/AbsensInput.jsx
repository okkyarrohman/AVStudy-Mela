import ThisDate from "@/Data/ThisDate";
import BtnPrimary from "@/element/button/BtnPrimary";
import BtnSecondary from "@/element/button/BtnSecondary";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import { format } from "date-fns";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const AbsensInput = ({ data }) => {
    const thisdate = ThisDate();
    // const [formLink, setFormLink] = useState(true);
    // const [valueLink, setValueLink] = useState(link);
    // const [valueImg, setValueImg] = useState();
    // const [imgPreview, setImgPreview] = useState(null);

    const formik = useFormik({
        initialValues: {
            link: "",
        },
        onSubmit: (values) => {
            const data = {
                link: values.link,
            };

            console.log(data);
            router.post(route("guru.storeAbsen"), data);
        },
    });

    // const handleImageChange = (file) => {
    //     if (file) {
    //         setValueImg(file);
    //         const preview = URL.createObjectURL(file);
    //         setImgPreview(preview);
    //     }
    // };

    return (
        <>
            <div className="flex flex-col bg-white shadow-xl rounded-md p-3 border border-gray-200">
                <div className="flex justify-between p-3">
                    <h1 className="text-sm font-bold">Absensi</h1>
                    <h1 className="text-sm font-bold text-gray-500">
                        {thisdate}
                    </h1>
                </div>
                <div className="mb-5">
                    {/* {(valueImg || img) && (
                        <img
                            src={imgPreview ? imgPreview : img}
                            className="rounded-md mb-2"
                        />
                    )} */}
                    {data ? (
                        <>
                            <QRCode
                                value={data.link}
                                className="w-48 mx-auto"
                            />
                            <a
                                href={data.link}
                                target="_blank"
                                className="font-semibold text-blue-950 flex items-center justify-center"
                            >
                                <Icon
                                    icon="system-uicons:chain"
                                    className="size-9"
                                ></Icon>
                                <p className="line-clamp-1 ">{data.link}</p>
                            </a>
                            <p className="text-sm text-center">
                                {format(
                                    new Date(data.created_at),
                                    "dd MMMM yyyy"
                                )}
                            </p>
                        </>
                    ) : (
                        <div className="w-full flex flex-col justify-center items-center">
                            <img
                                src="/assets/NotFoundIcon.svg"
                                className="object-contain w-20 mx-auto"
                            />
                            <h1 className="font-semibold text-gray-700">
                                Belum Ada Absensi
                            </h1>
                        </div>
                    )}
                    <div className="grid grid-cols-2 w-full items-center gap-2">
                        {/* <div className="col-span-1">
                            <label class="flex items-center font-bold w-full bg-purple-500 hover:bg-purple-700 py-1 my-1 px-5 text-white rounded-lg">
                                <Icon
                                    icon="tabler:plus"
                                    className="me-2"
                                ></Icon>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) =>
                                        handleImageChange(e.target.files[0])
                                    }
                                />
                                {valueImg ? "Change" : "Add File"}
                            </label>
                        </div> */}
                        {/* <div className="col-span-1">
                            {valueImg && (
                                <BtnSecondary
                                    className="py-2"
                                    onChange={() => ""}
                                    text="Save"
                                />
                            )}
                        </div> */}
                    </div>

                    <div className="flex w-full items-center my-3 gap-2">
                        <div className="w-full">
                            <label className="font-bold mb-3">
                                Tambah Absen Baru
                            </label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    name="link"
                                    className={`w-full rounded border border-gray-400`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.link}
                                    placeholder="Masukkan Link Absensi"
                                />
                                <button
                                    className="bg-purple-600 p-2 rounded-lg text-white"
                                    onClick={() => formik.handleSubmit()}
                                >
                                    <Icon
                                        icon="carbon:send"
                                        className="size-6"
                                    ></Icon>
                                </button>
                            </div>
                        </div>

                        {/* <div className=" flex items-center">
                            {formLink ? (
                                <button
                                    className="bg-purple-600 p-3"
                                    onClick={() => setFormLink(!formLink)}
                                >
                                    <Icon icon="carbon:send"></Icon>
                                </button>
                            ) : (
                                <button onClick={() => setFormLink(!formLink)}>
                                    <Icon icon="uil:edit"></Icon>
                                </button>
                            )}
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AbsensInput;
