import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

            <div className="w-full max-w-md">

                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold">Welcome Back</h1>
                    <p className="text-sm text-gray-500 mt-2">
                        Welcome back to LuxeTile. Log in to your account to explore premium tile collections, manage your profile, and save your favorite aesthetics.
                    </p>
                </div>

                <div className="bg-base-100 shadow-xl rounded-2xl p-6">

                    <form className="space-y-4">

                        <div>
                            <label className="label-text">Email</label>
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="input input-bordered w-full mt-1"
                                required
                            />
                        </div>

                        <div>
                            <label className="label-text">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="input input-bordered w-full mt-1"
                                required
                            />
                        </div>

                        <div className="text-right text-sm">
                            <a className="text-primary hover:underline cursor-pointer">
                                Forgot password?
                            </a>
                        </div>

                        <button className="btn btn-primary w-full">
                            Login
                        </button>

                        <div className="divider text-xs">OR CONTINUE WITH</div>

                        <button
                            type="button"
                            className="btn btn-outline w-full flex items-center gap-2"
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