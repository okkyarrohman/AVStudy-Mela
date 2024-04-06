import BtnPrimary from "@/element/button/BtnPrimary";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";
// Terakhir Sampe Sini
const ListProyek = (props) => {
    const kerjakanHandler = (id, step) => {
        console.log(id);
        router.get(route("proyek.show", { id: id }));
        localStorage.setItem("STEP_PROYEK", step);
    };

    console.log(props.show);

    const userProyekResults = props.show.proyek_result.find(
        (result) =>
            result.user_id == props.auth.user.id &&
            result.proyek_id == props.show.id
    );

    console.log("userProyekResults", userProyekResults);

    const feedbackHandler = (title) => {
        Swal.fire({
            html: `
            <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl mb-3">${title}</h1>
            </div>
            `,
            showCloseButton: false,
            showCancelButton: false,
            confirmButtonColor: "#a855f7",
            focusConfirm: false,
            confirmButtonText: `Tutup`,
        });
    };
    return (
        <div className="flex flex-col gap-3">
            {[...Array(4)].map((item, idx) => {
                const stepKey = `step${idx + 1}`;
                const feedbackKey = `konfirmasi${idx + 1}`;
                const prevFeedbackKey = `konfirmasi${idx}`;

                const isFeedbackReceived = userProyekResults[feedbackKey];
                const isPrevFeedbackReceived =
                    idx === 0 || userProyekResults[prevFeedbackKey];

                console.log("feedback", isFeedbackReceived);

                return (
                    <div className="grid grid-cols-12" key={idx}>
                        <div className="col-span-1 self-center bg-purple-400 rounded-full w-10 h-10 mx-3"></div>
                        <div className="col-span-11 flex items-center gap-3 rounded-xl shadow-xl active:opacity-50 border border-gray-300 py-5">
                            <div className="grid grid-cols-12 w-full items-center justify-between mx-5 gap-3">
                                <div className="col-span-2">
                                    <h1 className="font-bold text-md sm:text-lg">
                                        Langkah {idx + 1}
                                    </h1>
                                </div>
                                <div className="col-span-6">
                                    <p>{props.show[stepKey]}</p>
                                </div>
                                <div className="col-span-2">
                                    <button
                                        onClick={() =>
                                            kerjakanHandler(
                                                props.show.id,
                                                idx + 1
                                            )
                                        }
                                        disabled={!isPrevFeedbackReceived}
                                        className={`w-full bg-purple-500 text-white p-2 rounded-lg ${
                                            !isPrevFeedbackReceived &&
                                            "opacity-50 cursor-not-allowed"
                                        }`}
                                    >
                                        Kerjakan
                                    </button>
                                </div>
                                <div className="col-span-2 text-center">
                                    <button
                                        onClick={() =>
                                            feedbackHandler(
                                                userProyekResults[feedbackKey]
                                                    ? userProyekResults[
                                                          feedbackKey
                                                      ]
                                                    : "Belum Ada Feedback"
                                            )
                                        }
                                        disabled={!isPrevFeedbackReceived}
                                        className={`w-full bg-purple-500 text-white p-2 rounded-lg ${
                                            !isPrevFeedbackReceived &&
                                            "opacity-50 cursor-not-allowed"
                                        }`}
                                    >
                                        Feedback
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListProyek;
