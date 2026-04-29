import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export const metadata = {
  title: "Register for LuxeTile",
  description: "Register to continue exploring LuxeTile",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      
      <div className="w-full max-w-md">
        
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-sm text-gray-500 mt-2">
            Join us to discover your perfect aesthetic.
          </p>
        </div>

        <div className="bg-base-100 shadow-xl rounded-2xl p-6">
          
          <form className="space-y-4">
            
            <div>
              <label className="label-text">Full Name</label>
              <input
                type="text"
                placeholder="Swarup Biswas"
                className="input input-bordered w-full mt-1"
                required
              />
            </div>

            <div>
              <label className="label-text">Photo URL</label>
              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered w-full mt-1"
                required
              />
            </div>

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
                placeholder="********"
                className="input input-bordered w-full mt-1"
                required
              />
            </div>

            <button className="btn btn-primary w-full mt-2">
              Register
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
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-medium hover:underline">
                Login
              </Link>
            </p>

          </form>
        </div>

      </div>
    </div>
  );
}