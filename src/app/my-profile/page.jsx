"use client";

import { authClient } from '@/lib/auth-client';
import React, { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import avatar from "../../assets/user.png";
import Image from 'next/image';

const MyProfile = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ preload previous data
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setImage(user.image || "");
    }
  }, [user]);

  if (isPending) return <Circles />;
  if (!user) return <p>Not logged in</p>;

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authClient.updateUser({
        name,
        image,
      });

      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='max-w-md mx-auto p-9 shadow-xl py-8 my-8 text-center'>
      
      {/* ✅ Live preview */}
      <Image
        src={image || avatar}
        alt="profile"
        width={200}
        height={200}
        className="rounded-full mx-auto"
      />

      <form onSubmit={handleUpdate} className="mt-4 space-y-3">
        
        {/* Name */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2"
          placeholder="Name"
        />

        {/* Image URL */}
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border p-2"
          placeholder="Image URL"
        />

        {/* Email (readonly) */}
        <input
          type="email"
          value={user.email}
          readOnly
          className="w-full border p-2 bg-gray-100 cursor-not-allowed"
        />

        <button
          type="submit"
          disabled={loading}
          className='bg-blue-500 px-3 py-2 text-white w-full'
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default MyProfile;