import BtnPrimary from "@/element/button/BtnPrimary";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import { format, formatDate } from "date-fns";
import { useFormik } from "formik";

const TableProyekDetail = ({ data }) => {
    const formik = useFormik({
        initialValues: {
            konfirmasi1: data?.konfirmasi1 || "",
            konfirmasi2: data?.konfirmasi2 || "",
            konfirmasi3: data?.konfirmasi3 || "",
            konfirmasi4: data?.konfirmasi4 || "",
        },
        onSubmit: (values) => {
            const formData = {
                _method: "PATCH",
                konfirmasi1: values.konfirmasi1,
                konfirmasi2: values.konfirmasi2,
                konfirmasi3: values.konfirmasi3,
                konfirmasi4: values.konfirmasi4,
            };

            console.log(formData);
            router.post(`/guru/proyek/${data.id}/hasil/grade`, formData);
        },
    });

    const date = new Date(data.created_at);
    const formattedDate = format(date, "dd MMMM yyyy");

    return (
        <>
            <div className=" overflow-auto bg-white shadow-xl rounded-lg">
                <table className="w-full table-auto">
                    <thead className="">
                        {/* <div className="bg-sky-400 p-5 w-full"> */}
                        <tr className="text-left bg-purple-300">
                            <th scope="col" className="pe-1 p-4">
                                Langkah
                            </th>
                            <th scope="col" className="pe-3">
                                Tanggal
                            </th>
                            <th scope="col" className="pe-3">
                                Hasil
                            </th>
                            <th scope="col" className="pe-3">
                                Feedback
                            </th>
                        </tr>
                        {/* </div> */}
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row" className="p-3 ps-5">
                                Langkah 1
                            </td>
                            <td>
                                <p className="italic font-bold">
                                    {formattedDate}
                                </p>
                            </td>
                            <td className="py-3">
                                <div className="flex items-center gap-2">
                                    <Icon icon="akar-icons:file"></Icon>
                                    {data.answer1 ? (
                                        <p className="w-36 line-clamp-2">
                                            {data.answer1}
                                        </p>
                                    ) : (
                                        <p className="w-36 line-clamp-2">
                                            Belum Dijawab
                                        </p>
                                    )}
                                </div>
                            </td>
                            <td className="py-3">
                                <div className="flex flex-col items-center gap-2 text-xl">
                                    <textarea
                                        type="text"
                                        name="konfirmasi1"
                                        className={`w-full rounded border ${
                                            formik.errors.konfirmasi1
                                                ? "border-red-500"
                                                : "border-gray-400"
                                        } mt-3`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.konfirmasi1}
                                        placeholder="Masukkan Feedback"
                                        rows={5}
                                    />
                                    <BtnPrimary
                                        className="text-xs"
                                        onClick={() => formik.handleSubmit()}
                                        text="Submit"
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row" className="p-3 ps-5">
                                Langkah 2
                            </td>
                            <td>
                                <p className="italic font-bold">
                                    {formattedDate}
                                </p>
                            </td>
                            <td className="py-3">
                                <div className="flex items-center gap-2">
                                    <Icon icon="akar-icons:file"></Icon>
                                    {data.answer2 ? (
                                        <p className="w-36 line-clamp-2">
                                            {data.answer2}
                                        </p>
                                    ) : (
                                        <p className="w-36 line-clamp-2">
                                            Belum Dijawab
                                        </p>
                                    )}
                                </div>
                            </td>
                            <td className="py-3">
                                <div className="flex flex-col items-center gap-2 text-xl">
                                    <textarea
                                        type="text"
                                        name="konfirmasi2"
                                        className={`w-full rounded border ${
                                            formik.errors.konfirmasi2
                                                ? "border-red-500"
                                                : "border-gray-400"
                                        } mt-3`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.konfirmasi2}
                                        placeholder="Masukkan Feedback"
                                        rows={5}
                                    />
                                    <BtnPrimary
                                        className="text-xs"
                                        onClick={() => formik.handleSubmit()}
                                        text="Submit"
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row" className="p-3 ps-5">
                                Langkah 3
                            </td>
                            <td>
                                <p className="italic font-bold">
                                    {formattedDate}
                                </p>
                            </td>
                            <td className="py-3">
                                <div className="flex items-center gap-2">
                                    <Icon icon="akar-icons:file"></Icon>
                                    {data.answer3 ? (
                                        <p className="w-36 line-clamp-2">
                                            {data.answer3}
                                        </p>
                                    ) : (
                                        <p className="w-36 line-clamp-2">
                                            Belum Dijawab
                                        </p>
                                    )}
                                </div>
                            </td>
                            <td className="py-3">
                                <div className="flex flex-col items-center gap-2 text-xl">
                                    <textarea
                                        type="text"
                                        name="konfirmasi3"
                                        className={`w-full rounded border ${
                                            formik.errors.konfirmasi3
                                                ? "border-red-500"
                                                : "border-gray-400"
                                        } mt-3`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.konfirmasi3}
                                        placeholder="Masukkan Feedback"
                                        rows={5}
                                    />
                                    <BtnPrimary
                                        className="text-xs"
                                        onClick={() => formik.handleSubmit()}
                                        text="Submit"
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row" className="p-3 ps-5">
                                Langkah 4
                            </td>
                            <td>
                                <p className="italic font-bold">
                                    {formattedDate}
                                </p>
                            </td>
                            <td className="py-3">
                                <div className="flex items-center gap-2">
                                    <Icon icon="akar-icons:file"></Icon>
                                    {data.answer_note || data.answer_link ? (
                                        <div>
                                            <p className="w-36 line-clamp-2">
                                                {data.answer_note}
                                            </p>
                                            <p className="w-36 line-clamp-2">
                                                {data.answer_link}
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="w-36 line-clamp-2">
                                            Belum Dijawab
                                        </p>
                                    )}
                                </div>
                            </td>
                            <td className="py-3">
                                <div className="flex flex-col items-center gap-2 text-xl">
                                    <textarea
                                        type="text"
                                        name="konfirmasi4"
                                        className={`w-full rounded border ${
                                            formik.errors.konfirmasi4
                                                ? "border-red-500"
                                                : "border-gray-400"
                                        } mt-3`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.konfirmasi4}
                                        placeholder="Masukkan Feedback"
                                        rows={5}
                                    />
                                    <BtnPrimary
                                        className="text-xs"
                                        onClick={() => formik.handleSubmit()}
                                        text="Submit"
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TableProyekDetail;
