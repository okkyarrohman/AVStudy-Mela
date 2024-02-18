import { useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <>
            <Head title="Register" />
            <div className="min-h-screen w-full flex justify-center items-center">
                <div className="h-full w-full grid grid-cols-5">
                    <div className="col-span-3 w-full items-center">
                        <div className="flex justify-center items-center h-full w-full">
                            <div className="w-4/5 lg:w-2/3 xl:w-1/2">
                                <div className="my-8">
                                    <h1 className="font-black text-3xl">
                                        Selamat Datang di AVStudy
                                    </h1>
                                    <p className="text-xl">
                                        Masuk dan Mulai Belajar !
                                    </p>
                                </div>
                                <form onSubmit={submit}>
                                    <div>
                                        <TextInput
                                            id="name"
                                            name="name"
                                            value={data.name}
                                            className="mt-1 block w-full text-md py-3"
                                            autoComplete="name"
                                            isFocused={true}
                                            placeholder="Nama Pengguna"
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            required
                                        />

                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="mt-1 block w-full text-md py-3"
                                            autoComplete="username"
                                            placeholder="Email address"
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            required
                                        />

                                        <InputError
                                            message={errors.email}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <TextInput
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className="mt-1 block w-full text-md py-3"
                                            autoComplete="new-password"
                                            placeholder="Password"
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />

                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="flex text-center items-center justify-center my-4">
                                        <PrimaryButton
                                            className="w-full justify-center bg-purple-600 py-3"
                                            disabled={processing}
                                        >
                                            Daftar
                                        </PrimaryButton>
                                    </div>
                                </form>
                                <div class="relative flex py-5 items-center">
                                    <div class="flex-grow border-t border-gray-400"></div>
                                    <span class="flex-shrink mx-4 text-gray-400">
                                        or
                                    </span>
                                    <div class="flex-grow border-t border-gray-400"></div>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-center">
                                    <p className="pe-2">
                                        Sudah memiliki akun?{" "}
                                    </p>
                                    <a
                                        className="text-purple-600 font-bold"
                                        href="/login"
                                    >
                                        Silahkan Masuk
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 bg-purple-600 py-5 min-h-screen flex flex-col relative ">
                        <div className="grid grid-rows-6 h-full">
                            <div className="ml-3 row-span-1 lg:ml-8">
                                <img
                                    src="/assets/AVLogo.svg"
                                    className="object-contain w-24 lg:w-32"
                                />
                            </div>
                            <div className="flex justify-start items-center -left-4 relative row-span-5 lg:-left-12">
                                <img
                                    src="/assets/LoginImg.svg"
                                    className=" object-contain w-96 lg:w-11/12 xl:w-5/6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
