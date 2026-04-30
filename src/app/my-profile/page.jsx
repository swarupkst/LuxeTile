import Link from "next/link";

export default function MyProfilePage() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    image:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    role: "User",
    joined: "April 2026",
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">

      <div className="w-full max-w-lg bg-base-100 shadow-xl rounded-2xl p-8">

        <div className="flex flex-col items-center text-center">

          <div className="avatar mb-4">
            <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.image} alt={user.name} />
            </div>
          </div>

          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>

          <div className="flex gap-2 mt-3">
            <span className="badge badge-primary">{user.role}</span>
            <span className="badge badge-outline">Joined {user.joined}</span>
          </div>
        </div>

        <div className="divider my-6"></div>

        <div className="space-y-3 text-sm">

          <div className="flex justify-between">
            <span className="text-gray-500">Full Name</span>
            <span className="font-medium">{user.name}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Email</span>
            <span className="font-medium">{user.email}</span>
          </div>


        </div>

        <div className="mt-6 space-y-3">

          <Link href="/my-profile/update" className="btn bg-[#19815f] text-white w-full">
            Update Profile Info
          </Link>

          <Link href="/" className="btn btn-outline  w-full">
            Back To Home
          </Link>


        </div>

      </div>
    </div>
  );
}