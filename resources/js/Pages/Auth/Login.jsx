import { useEffect, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import BtnShowPassword from "@/element/button/BtnShowPassword";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const [showPassword, setShowPassword] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

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
                                    <div className="text-xl">
                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="mt-1 block w-full text-md py-3"
                                            autoComplete="username"
                                            placeholder="Email address"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />

                                        <InputError
                                            message={errors.email}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="relative mt-4">
                                        <TextInput
                                            id="password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password"
                                            value={data.password}
                                            className="mt-1 block w-full text-md py-3"
                                            autoComplete="current-password"
                                            placeholder="Password"
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <BtnShowPassword
                                            className="text-xl text-gray-400 absolute inset-y-0 right-4 flex items-center"
                                            isShow={showPassword}
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        />

                                    </div>
                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />

                                    <div className="flex text-center items-center justify-center my-4">
                                        <PrimaryButton
                                            className="w-full justify-center bg-purple-600 py-3"
                                            disabled={processing}
                                        >
                                            Masuk
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
                                    <p className="pe-2">Belum memiliki akun? </p>
                                    <a className="text-purple-600 font-bold" href="/register">
                                        Silahkan Daftar
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
            {/* <div className="grid grid-cols-3 justify-center items-center">
                        <div className="col-span-2">
                            <h1>Login</h1>
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel htmlFor="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="password"
                                        value="Password"
                                    />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="block mt-4">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData(
                                                    "remember",
                                                    e.target.checked
                                                )
                                            }
                                        />
                                        <span className="ms-2 text-sm text-gray-600">
                                            Remember me
                                        </span>
                                    </label>
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    {canResetPassword && (
                                        <Link
                                            href={route("password.request")}
                                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Forgot your password?
                                        </Link>
                                    )}

                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                    >
                                        Log in
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                        <div className="col-span-1 bg-sky-700">ahfhafhah</div>
                    </div> */}
            {/* </div> */}
        </>
    );
}
