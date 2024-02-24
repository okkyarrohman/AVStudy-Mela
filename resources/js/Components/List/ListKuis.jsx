import BtnPrimary from "@/element/button/BtnPrimary";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";

const ListKuis = (props) => {
    const kerjakanHandler = (title,id) => {
        Swal.fire({
            html: `
            <div class="flex flex-col justify-center items-center">
            <img src="/assets/QuizLogo.svg" class="object-contain w-64"/>
            <h1 class="font-bold text-3xl mb-3">${title}</h1>
            <p class="font-bold text-sm text-black">Tantang Pengetahuan Anda! Mari Mulai Kuis Kami dan Uji Kemampuan Anda dalam Berbagai Topik yang Menarik</p>
            </div>
            `,
            showCloseButton: true,
            showCancelButton: false,
            confirmButtonColor:"#a855f7",
            focusConfirm: false,
            confirmButtonText: `Mulai`,

        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id)
                // router.get(`/siswa/kuis/show/${id}`)
                router.get(route('kuis.show',{id:id}))
            }
          });;
    };
    return (
        <>
            <div className="flex items-center gap-3 rounded-xl shadow-xl active:opacity-50 border border-gray-300 py-5">
                <div className="bg-orange-300 rounded-full w-10 h-8 mx-5"></div>
                <div className="grid grid-cols-12 w-full items-center justify-between ml-1 mr-2 sm:ml-5 sm:mr-10">
                    <div className="col-span-7">
                        <h1 className="font-bold text-md sm:text-xl">
                            {props.title}
                        </h1>
                    </div>
                    <div className="col-span-1">
                        <p>{props.qty} Soal</p>
                    </div>
                    <div className="col-span-2">
                        <p>{props.time} Menit</p>
                    </div>
                    <div className="col-span-2">
                        <button
                            onClick={() => kerjakanHandler(props.title,props.id)}
                            className="w-full bg-purple-500 text-white p-2 rounded-lg"
                        >Kerjakan</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListKuis;
