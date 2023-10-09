'use client'
import Link from "next/link";
import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { BsChevronCompactUp } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import SearchBar from "./SearchBar";

const Navbar = () => {
    const [showProfile, setShowProfile] = useState<boolean>(false);
    const [showNav, setShowNav] = useState<boolean>(false);
    return (
        <>
            <div>
                <div className="flex item-center justify-between py-4 relative">
                    <div className="flex item-center md:space-x-10 lg:space-x-20">
                        <div className="font-semibold text-2xl">
                            <a>Wolves</a>
                        </div>
                        <nav className="max-md:hidden">
                            <ul className="flex items-center lg:space-x-10 space-x-7 opacity-70 text-sm">
                                <li><a href="/" className="w-full inline-block py-3">Shop</a></li>
                                <li><a href="filters" className="w-full inline-block py-3">filters</a></li>
                                <li><a href="products" className="w-full inline-block py-3">products</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <SearchBar />
                        <div onClick={() => setShowProfile(!showProfile)} className="relative cursor-pointer">
                            <img src="https://avatars.githubusercontent.com/u/73664886?s=400&u=6824d58ccd07388df2f3cc01f2992d214344a9c4&v=4" className='w-[35px] h-[35px] rounded-full object-cover' alt="" />
                            <div className={`absolute w-10 flex justify-center bg-white  z-[2] rounded-lg shadow-xl  text-[9px] ${showProfile ? "" : "hidden"}`}>
                                <Link href="/">Sign In</Link>
                            </div>
                        </div>
                        <Link href="/cart">
                            <div className="p-2 bg-gray-100 rounded-full">
                                <CiShoppingCart size={20} />
                            </div>
                        </Link>
                        <div onClick={() => setShowNav(!showNav)}
                            className="p-2 bg-gray-100 rounded-full md:hidden"
                        >
                            <BsChevronCompactUp size={20}
                                className={` transition ease-in duration-150 ${showNav ? "rotate-180" : ""}`}
                            />
                        </div>
                    </div>
                </div>
                <div className={`md:hidden ${showNav ? "pb-4 px-5" : "h-0 invisible opacity-0"}`}>
                    <ul className='flex flex-col text-sm opacity-75 px-2'>
                        <li><a href="/shop" className='py-3 inline-block w-full '>Shop</a></li>
                        <li><a href="/filters" className='py-3 inline-block w-full '>Filters</a></li>
                        <li><a href="/myproducts" className='py-3 inline-block w-full '>My Product</a></li>
                    </ul>
                    <div className='flex items-center bg-gray-100 p-2 rounded-lg my-4 py-3'>
                        <input
                            type="text"
                            className='outline-none w-full bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]'
                            placeholder='Search'
                            autoComplete='false'
                        />
                        <button><BiSearch size={20} className='opacity-50' /></button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbar;