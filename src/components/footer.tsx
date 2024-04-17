import React from 'react';
import Image from 'next/image';
import { Circle, Facebook, Instagram, Shell, Twitter } from 'lucide-react'

function Footer() {
  return (
    <div className="bg-gray-50 mt-10 pt-8">
      {/* Footer Content */}
      <div className='px-10'>
        <div className="container py-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-10">

            <div className="flex flex-col space-y-4">
              <Image src="/dlogo.png" alt="Logo" width={100} height={100} className="rounded-lg" />
              <h2 className="text-sm ">Please verify your email...</h2>
              <div className='flex gap-2'>
                <Circle color="gray" size={20} className='cursor-pointer' />
                <Twitter color="gray" size={20} className='cursor-pointer'/>
                <Facebook color="gray" size={20} className='cursor-pointer'/>
                <Instagram color="gray" size={20} className='cursor-pointer'/>
                <Shell color="gray" size={20} className='cursor-pointer'/>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <h2 className="font-bold">For designers</h2>
              <ol className='flex flex-col space-y-2 text-gray-600'>
                <li>Go Pro!</li>
                <li>Explore Design work</li>
                <li>Design blog</li>
                <li>Overtime podcast</li>
                <li>Playoffs</li>
                <li>Weekly Warm-Up</li>
                <li>Refer a Friend</li>
                <li>Code of conduct</li>
              </ol>
            </div>

            <div className="flex flex-col space-y-4">
              <h2 className="font-bold">Hire designers</h2>
              <ol className='flex flex-col space-y-2 text-gray-600'>
                <li>Post a job opening</li>
                <li>Post a freelance project</li>
                <li>Search for designers</li>
              </ol>
              <h2 className="font-bold">Brands</h2>
              <ol className='flex flex-col space-y-2 text-gray-600'>
                <li>Advertise with us</li>
              </ol>
            </div>

            <div className="flex flex-col space-y-4">
              <h2 className="font-bold">Company</h2>
              <ol className='flex flex-col space-y-2 text-gray-600'>
                <li>About</li>
                <li>Careers</li>
                <li>Support</li>
                <li>Media kit</li>
                <li>Testimonials</li>
                <li>API</li>
                <li>Terms of service</li>
                <li>Privacy policy</li>
                <li>Cookie policy</li>
              </ol>
            </div>

            <div className="flex flex-col space-y-4">
              <h2 className="font-bold">Directories</h2>
              <ol className='flex flex-col space-y-2 text-gray-600'>
                <li>Design jobs</li>
                <li>Designers for hire</li>
                <li>Freelance designers for hire</li>
                <li>Tags</li>
                <li>Places</li>
              </ol>
              <h2 className="font-bold">Design assets</h2>
              <ol className='flex flex-col space-y-2 text-gray-600'>
                <li>Dribbble Marketplace</li>
                <li>Creative Market</li>
                <li>Fontspring</li>
                <li>Font Squirrel</li>

              </ol>
            </div>

            <div className="flex flex-col space-y-4">
              <h2 className="font-bold">Design Resources</h2>
              <ol className='flex flex-col space-y-2 text-gray-600'>
                <li>Freelancing</li>
                <li>Design Hiring</li>
                <li>Design Portfolio</li>
                <li>Design Education</li>
                <li>Creative Process</li>
                <li>Design Industry Trends</li>
              </ol>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between">
            <div className="pt-2">
              <h2 className="text-sm text-gray-500">© 2023 Dribbble. All rights reserved</h2>
            </div>
            <div className='pt-2 '>
              <ul className='flex  items-center'>
                <li className="text-sm font-bold mr-1">20,501,853</li>
                <li className="text-sm md:ml-auto text-gray-500">shots dribbleed</li>
                <li><img src='/drlogo.png' width={30} height={30} /></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Footer;
