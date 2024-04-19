// Assuming this is your updated code
'use client';
import React, { Suspense } from 'react';
import Image from 'next/image';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { useSearchParams } from 'next/navigation';

function NavData() {
  const searchParams = useSearchParams();
  const profileImage = searchParams.get('prImage');

  return <Navbar profileImage={profileImage} />
}

function ImageData() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  return <h4 className="font-sm text-black p-2 pb-6 font-bold">{email}</h4>
}

const Main = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col h-screen items-center">
        <div className="w-full">
          <NavData />
        </div>
        <div className="flex flex-col justify-content items-center text-center lg:w-1/2 sm:w-3/5 h-full mt-14 p-4">
          <h2 className="text-4xl font-bold mb-4">Please verify your email...</h2>
          <Image src="/gm.png" alt="alt" width={330} height={330} />
          <h4 className="font-sm text-gray-500 p-2 pb-6">
            Please verify your email address. We&apos;ve sent a confirmation email to:
          </h4>
          <ImageData />
          <h4 className="font-sm text-gray-500 p-2 pb-6">
            Click the confirmation link in that email to begin using Dribble.
          </h4>
          <h4 className="font-sm text-gray-500 p-2 pb-6">
            Didn&apos;t receive the email? Check your spam folder, it may have been caught by a filter.
            If you still don&apos;t see it, you can <a className="text-pink-500 font-bold cursor-pointer">resend the confirmation email</a>
          </h4>
          <h4 className="font-sm text-gray-500 p-2 pb-6">
            Wrong email address? <a className="text-pink-500 font-bold cursor-pointer">Change it.</a>
          </h4>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default Main;
