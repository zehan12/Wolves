'use client';
import { useSession } from "next-auth/react";
import { BiLogOut } from "react-icons/bi";
import { FaUserAstronaut } from "react-icons/fa";
import { GiBasketballJersey } from "react-icons/gi";

const SignOut = () => {
    const { data: session } = useSession();
    return (
        <ul className='py-5 px-2 text-neutral-600'>
            {session && session.user ?
                (<>
                    <li className='flex justify-between gap-x-2 hover:bg-gray-100 hover:text-neutral-900 px-5 py-2 cursor-pointer'>
                        <FaUserAstronaut size={15} />
                        <p className="w-20">{session.user.name}</p>
                    </li>
                    <li onClick={() => SignOut()} className='whitespace-nowrap flex justify-between hover:text-red-600 px-5 py-2 cursor-pointer'>
                        <BiLogOut size={15} />
                        <p className="w-20">Sign Out</p>
                    </li>
                    <li className='whitespace-nowrap flex justify-between hover:bg-gray-100 hover:text-neutral-900 px-5 py-2 cursor-pointer'>
                        <GiBasketballJersey size={15} />
                        <a className="w-20" href="/add-product">
                            Add Product
                        </a>
                    </li>
                </>)
                : (<li onClick={() => SignOut()} className='whitespace-nowrap hover:bg-gray-100 hover:text-neutral-900 px-5 py-2 cursor-pointer'>SignIn</li>)
            }
        </ul>
    )
}
export default SignOut;