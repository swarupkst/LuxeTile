"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UpdateProfilePage() {
  const router = useRouter();

  const [name, setName] = useState("John Doe");
  const [imageUrl, setImageUrl] = useState(
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((r) => setTimeout(r, 1000));

      router.push("/my-profile");
      router.refresh();
    } catch (error) {
      console.error(error);
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
            {!imgError ? (
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

          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary w-full"
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