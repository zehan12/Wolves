'use client'
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import arpit from "../../../public/assets/apritHum.webp";

type props = {
    selectedCategories: string[];
    selectedSize: string[];
    price: {
        min: number;
        max: number;
    };
    selectedHexValues: string[];
}

const Items: React.FC<props> = ({ selectedCategories, selectedSize, price, selectedHexValues }) => {

    const [response, setResponse] = useState<any[]>([])

    useEffect(() => {
        const fetchFilterProduct = async () => {
            try {
                const response  = await axios.get('/api/product/filter', {
                    params: {
                        categories: selectedCategories,
                        size: selectedSize,
                        price: {
                            min: price.min,
                            max: price.max
                        },
                        colors: selectedHexValues
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response.data,"filter data")
                setResponse(response.data.data);
                    
            } catch (error) {
                console.log('error', error)
            }
        };
        fetchFilterProduct();
    }, [selectedCategories, selectedSize, selectedHexValues, price]);

    return (
        <div className='px-10'>
            <h1 className='py-3 text-2xl font-medium'>Filtered Clothings</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-12 mt-5'>
                {response.length !== 0 ? response.map((product: any) => (
                    <div key={product.id}>
                        <Link href={`/product/${product.id}`}>
                            <div className='relative rounded-lg'>
                                <Image src={product.images.split(',')[0]} width={250} height={300} className='w-[250px] h-[300px] object-cover object-top rounded-lg' alt="" />
                            </div>
                            <div className='flex items-center justify-between mt-4'>
                                <div>
                                    <h1 className='text-[14px] font-medium max-w-[150px] whitespace-nowrap overflow-hidden' >{product.title}</h1>
                                    <p className='text-[13px] opacity-60'>{product.store}</p>
                                </div>
                                <span className='px-2 font-medium bg-gray-100 rounded-lg'>${product.price}.00</span>
                            </div>
                        </Link>
                    </div>
                )) :
                    (
                        <div className="w-full flex justify-evenly">
                            <div className="text-3xl text-semibold">Response Data</div>
                            <Image src={arpit} width={300} height={300} alt='arpit' />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Items;