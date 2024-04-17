'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import CenteredContent from '@/components/cards/Interestcard'; 
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const Motive = () => {
    const searchParams = useSearchParams();
    const profileImage = searchParams.get('profileimage');  
    const email = searchParams.get('email')

    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);


    return (
        <div className="flex flex-col min-h-screen items-center">
            <div className="flex justify-start p-8 w-full">
                <Image src="/dlogo.png" alt="Image Alt Text" width={100} height={100} className="rounded-lg" />
                <Link href={
                    {
                        pathname: '/prsetup1',
                        query: {
                            email: email
                        }
                    }
                }>
                    <button className="bg-gray-200 rounded-md p-1 h-[40px] px-4 ml-5 text-gray-700">
                        {'<'}
                    </button>
                </Link>
            </div>
            <div className="flex flex-col text-center w-auto p-4">
                <h2 className="text-4xl font-bold mb-2">What brings you to Dribble</h2>
                <h4 className="text-sm text-gray-500 p-2 pb-6">
                    Select the options that best describe you. Don&apos;t worry, you can explore other options later
                </h4>
                <div className="flex gap-8 mt-20">
                    <CenteredContent
                        imageSrc="/gf.png"
                        textContent="I&apos;m a designer looking to share my work"
                        description="With over seven million shots from a vast community of designers"
                        setIsCheckboxChecked={setIsCheckboxChecked}
                    />

                    {/* Second instance of CenteredContent */}
                    <CenteredContent
                        imageSrc="/drlogo.png"
                        textContent="I&apos;m looking to hire a designer"
                        description="With over seven million shots from a vast community of designers"
                        setIsCheckboxChecked={setIsCheckboxChecked}
                    />

                    {/* Third instance of CenteredContent */}
                    <CenteredContent
                        imageSrc="/gm.png"
                        textContent="I&apos;m looking for design inspiration"
                        description="With over seven million shots from a vast community of designers"
                        setIsCheckboxChecked={setIsCheckboxChecked}
                    />
                </div>
            </div>
            {/* Show based on checkbox status */}
            {isCheckboxChecked && (
                <div className="text-sm font-bold mt-2 fixed bottom-44">
                    <p>Anything else? You can select multiple</p>
                </div>
            )}

            <div className="fixed bottom-28">
                <Link href={{
                    pathname: "/dashboard",
                    query: {
                        prImage: profileImage,
                        email: email
                    }
                }} >
                    <button
                        type="submit"
                        className={`w-[200px] ${isCheckboxChecked ? 'bg-pink-500 hover:bg-pink-400' : 'bg-pink-200 text-gray-500 cursor-not-allowed'} text-white font-bold py-2 rounded-md`}
                        disabled={!isCheckboxChecked}
                    >
                        Finish
                    </button></Link>
            </div>
            {/* Show when checkbox is checked */}
            <div className="fixed bottom-20">
                {isCheckboxChecked && (
                    <p className="text-sm text-gray-500 mt-2">or Press RETURN</p>
                )}
            </div>
        </div>
    );
};

export default Motive;