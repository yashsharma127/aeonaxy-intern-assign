import React, { useState } from 'react';

const CenteredContent = ({ imageSrc, textContent, description, setIsCheckboxChecked }: any) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setIsCheckboxChecked(!isChecked);
    };

    return (
        <div className={`bg-white border rounded-2xl ${isChecked ? 'border-pink-500 border-2' : 'border-gray-200'} p-4 w-64 h-60 transition-transform duration-500 transform flex flex-col items-center relative`}>
            <img src={imageSrc} className={`w-35 h-24 object-cover mb- transition-transform ${isChecked ? '-translate-y-14' : ''}`} alt="Profile Image" />
            <div>
                <p className={`text-black text-lg font-bold text-center ${isChecked ? '-translate-y-14' : ''}`}>{textContent}</p>
                {isChecked ?
                    <p className={`${isChecked ? 'text-gray-500 text-sm text-center -translate-y-14' : ''}`}>{description} </p>
                    : ""
                }
            </div>
            {/* Custom Checkbox */}
            <div className={`absolute bottom-4 flex items-center justify-center cursor-pointer w-5 h-5 rounded-full border border-gray-400 ${isChecked ? 'bg-pink-500 border-pink-500' : ''}`} onClick={handleCheckboxChange}>
                {/* Tick SVG icon */}
                {isChecked && (
                    <svg className="w-12 h-12 text-white" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.25 10.75L8.75 13.25L13.25 8.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </div>
        </div>
    );
};

export default CenteredContent;
