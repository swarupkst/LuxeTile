'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {

    const handleGoogleSignIn = async () => {

        try {

            await authClient.signIn.social({
                provider: "google",
            });

            toast.success("Google login successful");

        } catch (error) {

            toast.error("Google login failed");

        }
    }

    const [isShowPassword, setIsShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const handleLoginFunc = async (data) => {

        try {

            const { data: res, error } = await authClient.signIn.email({
                email: data.email,
                password: data.password,
                callbackURL: "/",
            });

            if (error) {

                toast.error(error.message || "Invalid email or password");
                return;
            }

            toast.success("Login successful");

        } catch (error) {

            toast.error("Something went wrong");
        }
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

            {/* TOASTER */}
            <Toaster position="top-center" reverseOrder={false} />

            <div className="w-full max-w-md">

                <div className="text-center mb-6">

                    <h1 className="text-3xl font-bold">
                        Welcome Back
                    </h1>

                    <p className="text-sm text-gray-500 mt-2">
                        Welcome back to LuxeTile. Log in to your account to explore premium tile collections, manage your profile, and save your favorite aesthetics.
                    </p>

                </div>

                <div className="bg-base-100 shadow-xl rounded-2xl p-6">

                    <form
                        className="space-y-4"
                        onSubmit={handleSubmit(handleLoginFunc)}
                    >

                        <div>

                            <label className="label-text">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="input input-bordered w-full mt-1"
                                {...register("email", {
                                    required: "Email is required"
                                })}
                            />

                            {errors.email && (
                                <p className="text-red-700">
                                    {errors.email.message}
                                </p>
                            )}

                        </div>

                        <div className="relative">

                            <label className="label-text">
                                Password
                            </label>

                            <input
                                type={isShowPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="input input-bordered w-full mt-1 pr-10"
                                {...register("password", {
                                    required: "Password can't be Empty",
                                })}
                            />

                            <span
                                className="absolute right-3 top-11 cursor-pointer"
                                onClick={() =>
                                    setIsShowPassword(!isShowPassword)
                                }
                            >
                                {isShowPassword ? (
                                    <FaEye />
                                ) : (
                                    <FaEyeSlash />
                                )}
                            </span>

                            {errors.password && (
                                <p className="text-red-700">
                                    {errors.password.message}
                                </p>
                            )}

                        </div>

                        <div className="text-right text-sm">

                            <a className="text-primary hover:underline cursor-pointer">
                                Forgot password?
                            </a>

                        </div>

                        <button className="btn bg-[#19815f] text-white w-full">
                            Login
                        </button>

                        <div className="divider text-xs">
                            OR CONTINUE WITH
                        </div>

                        <button
                            type="button"
                            className="btn btn-outline w-full flex items-center gap-2"
                            onClick={handleGoogleSignIn}
                        >

                            <FcGoogle className="text-xl" />

                            Continue with Google

                        </button>

                        <p className="text-center text-sm mt-3">

                            Don't have an account?{" "}

                            <Link
                                href="/register"
                                className="text-primary font-medium hover:underline"
                            >
                                Register
                            </Link>

                        </p>

                    </form>

                </div>

            </div>

        </div>
    );
}