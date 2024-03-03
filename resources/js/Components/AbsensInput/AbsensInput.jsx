import ThisDate from "@/Data/ThisDate";
import BtnPrimary from "@/element/button/BtnPrimary";
import BtnSecondary from "@/element/button/BtnSecondary";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const AbsensInput = ({ img, link }) => {
    const thisdate = ThisDate();
    const [formLink, setFormLink] = useState(true);
    const [valueLink, setValueLink] = useState(link);
    const [valueImg, setValueImg] = useState();
    const [imgPreview, setImgPreview] = useState(null);

    const handleImageChange = (file) => {
        if (file) {
            setValueImg(file);
            const preview = URL.createObjectURL(file);
            setImgPreview(preview);
        }
    };

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
                    {(valueImg || img) && (
                        <img
                            src={imgPreview ? imgPreview : img}
                            className="rounded-md mb-2"
                        />
                    )}
                    <div className="grid grid-cols-2 w-full items-center gap-2">
                        <div className="col-span-1">
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
                               {valueImg?"Change": "Add File"}
                            </label>
                        </div>
                        <div className="col-span-1">
                            {valueImg && (
                                <BtnSecondary className="py-2" onChange={() => ""} text="Save" />
                            )}
                        </div>
                    </div>

                    <div className="flex w-full items-center my-3 gap-2">
                        <div className="max-w-[95%]">
                            <input
                                type="text"
                                className="py-1 rounded text-sm border-0 font-bold w-full"
                                value={valueLink}
                                disabled={formLink}
                                onChange={(e) => setValueLink(e.target.value)}
                            />
                        </div>
                        <div className=" flex items-center">
                            {formLink ? (
                                <button onClick={() => setFormLink(!formLink)}>
                                    <Icon icon="uil:edit"></Icon>
                                </button>
                            ) : (
                                <button onClick={() => setFormLink(!formLink)}>
                                    <Icon icon="carbon:send"></Icon>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AbsensInput;
