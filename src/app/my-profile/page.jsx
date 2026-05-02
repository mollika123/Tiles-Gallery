"use client"

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { Circles } from 'react-loader-spinner';
import avatar from "../../assets/user.png"
import Image from 'next/image';
import Link from 'next/link';
const MyProfile = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  if(!user) return <Circles></Circles>
  return (
    <div className='max-w-md mx-auto p-9 shadow-xl py-8 my-8'>
      <Image src={user?.image || avatar.src} alt="profile" width={200} height={200} />
      <p className='text-xl font-bold'>{user.name }</p>
      <p>{user.email}</p>
      
    <button className='bg-blue-400 px-3 py-2 mt-2 text-white'><Link href="/register">Update</Link></button>
    </div>
  );
};

export default MyProfile;