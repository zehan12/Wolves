import React from 'react'
import { getServerSession } from 'next-auth'
import { options } from "@/app/api/auth/[...nextauth]/options"
import Navbar from '../components/Navbar'
import AllCartProduct from '@/app/components/AllCartProduct'
import AllPurchased from '@/app/components/AllPurchased';


type Props = {}

const Cart = async (props: Props) => {
    const session = await getServerSession(options)
    return (
        <>
            <div className='max-w-[1280px] mx-auto px-5'>
                <Navbar />
                <AllCartProduct userId={session?.user?.id} />
                <hr className='mt-10 mb-10' />
                <AllPurchased userId={session?.user?.id} />
            </div>
        </>
    )
}

export default Cart;