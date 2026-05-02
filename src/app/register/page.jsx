'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Register for LuxeTile",
//   description: "Register to continue exploring LuxeTile",
// };

export default function RegisterPage() {

  const router = useRouter();

  const handleGoogleSignIn = async () => {

    try {

      await authClient.signIn.social({
        provider: "google",
      });

      toast.success("Google signup successful");

    } catch (error) {

      toast.error("Google signup failed");

    }
  }

  const [isShowPassword, setIsShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const handleLoginFunc = async (data) => {

    const { name, email, url, password } = data;

    try {

      const { data: res, error } = await authClient.signUp.email({
        name: name,
        email: email,
        password: password,
        image: url,
        callbackURL: "/",
      })


      if (error) {

        toast.error(error.message || "Signup failed");
        return;
      }

      if (res) {

        toast.success("Signup successful");
        setTimeout(() => {

          router.push("/login");
        },1000);
      }

    } catch (error) {

      toast.error("Something went wrong");
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      {/* TOASTER */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full max-w-md">

        <div className="text-center mb-6">

          <h1 className="text-3xl font-bold">
            Create an Account
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Join us to discover your perfect aesthetic.
          </p>

        </div>

        <div className="bg-base-100 shadow-xl rounded-2xl p-6">

          <form
            className="space-y-4"
            onSubmit={handleSubmit(handleLoginFunc)}
          >

            <div>

              <label className="label-text">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Swarup Biswas"
                className="input input-bordered w-full mt-1"
                {...register("name", {
                  required: "Name is required"
                })}
              />

              {errors.name && (
                <p className="text-red-700">
                  {errors.name.message}
                </p>
              )}

            </div>

            <div>

              <label className="label-text">
                Photo URL
              </label>

              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered w-full mt-1"
                {...register("url", {
                  required: "Photo URL is required"
                })}
              />

              {errors.url && (
                <p className="text-red-700">
                  {errors.url.message}
                </p>
              )}

            </div>

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
                placeholder="********"
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

            <button className="btn bg-[#19815f] w-full mt-2 text-white">

              Register

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

              Already have an account?{" "}

              <Link
                href="/login"
                className="text-primary font-medium hover:underline"
              >
                Login
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
}