'use client'

import React, { ChangeEvent, useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface FormData {
  location: string;
  profileImage: File | null;
  agree: boolean;
  imagePreview: string;
}

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    location: '',
    profileImage: null,
    agree: false,
    imagePreview: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<string>('');

  const defaultAvatars = [
    './def/1.png',
    './def/2.png',
    './def/3.png',
    './def/4.png',
    './def/5.png',
    './def/6.png',
    './def/7.png',
    './def/8.png',
  ];

  function Data( ) {
    const searchParams = useSearchParams();
    const email = searchParams.get('email'); 

    return <Link href={{
      pathname: '/domain',
      query: {
        profileimage: formData.imagePreview,
        email: email
      }
    }} >
      <button
        type="submit"
        disabled={!isReadyToSubmit}
        className={`w-full ${isReadyToSubmit ? 'hover:bg-pink-400 bg-pink-500 cursor-pointer' : 'cursor-not-allowed bg-pink-200'} text-white font-bold py-2 md:py-3 rounded-md`}
      >
        Next
      </button></Link>
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageSrc = event.target?.result;
        if (typeof imageSrc === 'string') {
          setFormData({
            ...formData,
            profileImage: file,
            imagePreview: imageSrc,
          });
          checkFormCompletion();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    checkFormCompletion();
  };

  const checkFormCompletion = () => {
    const { location, profileImage, imagePreview } = formData;
    // Check if either location is filled and a profileImage is selected,
    // or location is filled and imagePreview (avatar) is selected
    if (location && ((profileImage && imagePreview) || imagePreview)) {
      setIsReadyToSubmit(true);
    } else {
      setIsReadyToSubmit(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(formData);
  };


  const handleButtonClick = () => {
    const fileInput = document.getElementById('imageInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleAvatarSelection = (avatarUrl: string) => {
    setSelectedAvatar(avatarUrl);
    setFormData({
      ...formData,
      imagePreview: avatarUrl, // Set the imagePreview to the selected avatar URL
      profileImage: null, // Reset profileImage since no file is selected
    });
    setIsModalOpen(false);
    checkFormCompletion(); // Re-check form completion status
  };


  const renderImage = () => {
    let imageSource = formData.imagePreview || selectedAvatar || '/defp.png';

    return (
      <div
        className="w-32 h-32 md:w-32 md:h-32 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden"
      >
        <img
          src={imageSource}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  useEffect(() => {
    checkFormCompletion();
  }, [formData]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col min-h-screen items-center">
        <div className="p-8 w-full">
          <Image src="./dlogo.png" alt="Image Alt Text" width={120} height={120} className="rounded-lg" />
        </div>
        <div className="w-full px-4 md:px-0 md:w-3/5 lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome! Let&apos;s create your profile</h2>
          <h4 className="text-sm md:text-base text-gray-500 mb-8">
            Let others get to know you better! You can do these later
          </h4>
          <form onSubmit={handleSubmit} className="space-y-6" onKeyDown={(e) => { if (e.key === 'Enter' && isReadyToSubmit) handleSubmit(e) }}>
            <h3 className="text-lg md:text-xl font-bold mb-4">Add an avatar</h3>
            <div className="flex space-x-6">
              <div className="flex-shrink-0 mb-3">
                {renderImage()}
              </div>
              <div className="flex flex-col mt-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="imageInput"
                />
                <button className='border rounded-md w-1/2 text-[11px] font-bold md:p-2 border-gray' onClick={handleButtonClick}>Choose Image</button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="text-sm text-gray-500 py-2 md:py-3 rounded"
                >
                  {'>'} Or choose one of our defaults
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="location" className="text-lg md:text-xl font-bold mb-2 md:mb-4 block">Add your location</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter a location"
                value={formData.location}
                onChange={handleInputChange}
                className="mt-1 mb-6 -ml-1 w-full p-2 border-b font-bold rounded-md"
                required
              />
            </div>
            <div className='w-[220px] text-center'>
              <Data />
              {isReadyToSubmit && (
                <p className='text-gray-500 mt-2'>or Press Return</p>
              )}
            </div>
          </form>
        </div>

        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-lg md:text-xl font-bold mb-4">Choose a default avatar</h2>
              <div className="flex justify-around flex-wrap">
                {defaultAvatars.map((avatarUrl) => (
                  <img
                    key={avatarUrl}
                    src={avatarUrl}
                    alt="Avatar"
                    className="w-12 h-12 md:w-16 md:h-16 m-2 cursor-pointer border border-gray-300 rounded-full"
                    onClick={() => handleAvatarSelection(avatarUrl)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </Suspense>
  );
};

export default Page;
