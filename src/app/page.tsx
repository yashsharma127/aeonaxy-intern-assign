import React from 'react';
import Image from 'next/image';
import SignUpForm from '@/components/SignupForm';

export default function Auth() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">

      <div className="hidden lg:block w-1/2">
        <div className="relative lg:h-full">
          <Image
            src="/bg.jpg"
            alt="Image Alt Text"
            layout="fill"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className=" h-auto lg:w-2/3">
        <SignUpForm />
      </div>

    </section>
  );
}
