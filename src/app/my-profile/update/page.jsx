"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Circles } from "react-loader-spinner";
import Image from "next/image";
import avatar from "../../../assets/user.png";

const UpdateProfile = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ preload user data
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setImage(user.image || "");
    }
  }, [user]);

  // ⏳ loading state
  if (isPending) return <Circles />;
  if (!user) return <p className="text-center mt-10">Not logged in</p>;

  // ✅ update function
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authClient.updateUser({
        name,
        image,
      });

      alert("Profile updated successfully!");

      // 🔄 go back to profile page
      router.push("/my-profile");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 shadow-xl my-10 rounded-xl text-center">
      
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Update Profile
      </h1>

      {/* 🖼 Image Preview */}
      <Image
        src={image || user.image || avatar}
        alt="profile"
        width={150}
        height={150}
        className="rounded-full mx-auto mb-4 object-cover"
      />

      {/* 📝 Form */}
      <form onSubmit={handleUpdate} className="space-y-4">
        
        {/* Name */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full border p-2 rounded"
        />

        {/* Image URL */}
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter image URL"
          className="w-full border p-2 rounded"
        />

        {/* Email (readonly) */}
        <input
          type="email"
          value={user.email}
          readOnly
          className="w-full border p-2 bg-gray-100 cursor-not-allowed rounded"
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition"
        >
          {loading ? "Updating..." : "Update Information"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;