'use client'
import React, { useState } from 'react'; 
import { TriangleAlert } from 'lucide-react';
import Link from 'next/link';

interface FormData {
    name: string;
    username: string;
    email: string;
    password: string;
    agreestatus: string
    agree: boolean;
}

const SignUpForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        username: '',
        email: '',
        password: '',
        agreestatus: '',
        agree: false,
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});   

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        setFormData({ ...formData, [name]: newValue }); 
        setErrors({ ...errors, [name]: undefined });
    };

    const [shouldNavigate, setShouldNavigate] = useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
 
        const newErrors: Partial<FormData> = {};
        if (!formData.name) {
            newErrors.name = 'Name is required';
        }
        if (!formData.username) {
            newErrors.username = 'Username is required';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        }
        if (!formData.agree) {
            newErrors.agree = true  
            newErrors.agreestatus = 'You must checkbox to agree to the terms'
        }
 
        setErrors(newErrors);
 
        if (Object.keys(newErrors).length === 0) {
            setShouldNavigate(true);
        }
    };

    return (
        <div className="flex flex-col h-screen items-center">
            <div className="flex justify-end p-8 w-full">
                <h2 className="text-sm font-semibold text-gray-800">
                    Already a member?{' '}
                    <a className="text-purple-900 cursor-pointer ml-1">Sign In</a>
                </h2>
            </div>
            <div className="flex flex-col w-full md:w-[28rem] max-w-screen-md p-4 mx-auto my-4">
                <h2 className="text-2xl font-bold mb-4">Sign up to Dribbble</h2>
                <h4 className="p-2 pb-6">
                    {errors.name && <div className="text-[#f04633] text-sm mt-1">*{errors.name}</div>}
                    {errors.username && <div className="text-[#f04633] text-sm mt-1">*{errors.username}</div>}
                    {errors.email && <div className="text-[#f04633] text-sm mt-1">*{errors.email}</div>}
                    {errors.password && <div className="text-[#f04633] text-sm mt-1">*{errors.password}</div>}
                    {errors.agreestatus && <div className="text-[#f04633] text-sm mt-1">*{errors.agreestatus}</div>}

                </h4>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="flex block text-sm font-bold text-black">
                                {errors.name && <div><TriangleAlert color='white' fill="#f04633" size={20} /></div>}
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'bg-[#fff0f0] border-[#fff0f0] text-[#f04633]' : 'bg-gray-100'}`}
                            />
                        </div>
                        <div>
                            <label htmlFor="username" className="flex block text-sm font-bold text-black">
                                {errors.username && <div className="text-[#f04633] text-sm"><TriangleAlert color='white' fill="#f04633" size={20} /></div>}

                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange}
                                className={`mt-1 p-2 w-full border rounded-md ${errors.username ? 'bg-[#fff0f0] border-[#fff0f0] text-[#f04633]' : 'bg-gray-100'}`}

                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="flex block text-sm font-bold text-black">
                            {errors.email && <div className="text-[#f04633] text-sm "><TriangleAlert color='white' fill="#f04633" size={20} /></div>}

                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'bg-[#fff0f0] border-[#fff0f0] text-[#f04633]' : 'bg-gray-100'}`}

                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="flex block text-sm font-bold text-black">
                            {errors.password && <div className="text-[#f04633] text-sm"><TriangleAlert color='white' fill="#f04633" size={20} /></div>}

                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`mt-1 p-2 w-full border rounded-md ${errors.password ? 'bg-[#fff0f0] border-[#fff0f0] text-[#f04633]' : 'bg-gray-100'}`}

                        />
                    </div>
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            id="agree"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                            className="-mt-2 mr-2 h-10 w-10 fill-black"
                        />
                        <label htmlFor="agree" className="text-sm text-gray-500">
                            Creating an account means you&apos;re okay with our{' '}
                            <a className="text-purple-900 cursor-pointer">Terms of Service,</a>
                            <a className="text-purple-900 cursor-pointer ml-1">Privacy Policy,</a> and our default
                            <a className="text-purple-900 cursor-pointer ml-1">Notification Settings.</a>
                        </label>
                    </div>

                    {shouldNavigate ? (
                        <Link href={{
                            pathname: "/prsetup1",
                            query: {
                                email: formData.email, 
                            }
                        }}>
                            <button
                            type="submit"
                            className="w-1/2 bg-pink-500 hover:bg-pink-400 cursor-pointer text-white font-bold mt-4 py-2 rounded-md"
                            disabled={!errors} 
                        >
                            Create Account
                        </button>
                        </Link>
                    ) : (
                        <button
                            type="submit"
                            className="w-1/2 bg-pink-500 hover:bg-pink-400 cursor-pointer text-white font-bold mt-4 py-2 rounded-md"
                            disabled={!errors} 
                        >
                            Create Account
                        </button>
                    )}


                    <div className="text-sm text-gray-500 mt-2 pr-4">
                        This site is protected by reCAPTCHA and the Google
                        <a className="text-purple-900 cursor-pointer"> Privacy Policy,</a> and
                        <a className="text-purple-900 cursor-pointer"> Terms of Service</a> apply
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
