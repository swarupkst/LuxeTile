"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UpdateProfilePage() {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imgError, setImgError] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImageUrl(session.user.image || "");
    }
  }, [session]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const { data, error } = await authClient.updateUser({
        name: name,
        image: imageUrl,
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      setSuccessMessage("Profile Updated Successfully");

      setTimeout(() => {
        router.push("/my-profile");
        router.refresh();
      }, 1500);

    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Update Profile
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">

          <div>
            <label className="text-sm">Name</label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full mt-1"
              required
            />
          </div>

          <div>
            <label className="text-sm">Profile Image URL</label>

            <input
              type="url"
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value);
                setImgError(false);
              }}
              className="input input-bordered w-full mt-1"
              required
            />
          </div>

          <div className="flex justify-center mt-2">
            {imageUrl && !imgError ? (
              <img
                src={imageUrl}
                alt="preview"
                className="w-20 h-20 rounded-full object-cover ring-2 ring-primary"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-xs">
                No Image
              </div>
            )}
          </div>

          {successMessage && (
            <p className="text-green-600 text-sm text-center font-medium">
              {successMessage}
            </p>
          )}

          {errorMessage && (
            <p className="text-red-600 text-sm text-center font-medium">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="btn bg-[#19815f] w-full text-white"
          >
            {isLoading ? "Updating..." : "Update Profile"}
          </button>

          <Link href="/my-profile" className="btn btn-outline w-full">
            Cancel
          </Link>

        </form>
      </div>
    </div>
  );
}