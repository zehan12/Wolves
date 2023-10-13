'use client';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Sizes from "../components/Sizes";
import Color from "../components/Color";
import Para from "../components/Para";
import ImageUpload from "../components/ImageUpload";
import Price from "../components/Price";

type props = {};

const ProductFrom = (props: props) => {
    const { data: session } = useSession();
    const id = session?.user.id;
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        description: `<div>
        <p>
        Enter your text here ....
        </p>
      </div>`,
        category: '',
        style: '',
        size: '',
        inventory: 0,
        color: '#fe345e',
        price: 0,
        images: '',
        userId: id,
        store: ''
    })

    const [Description, setDescription] = useState<string>('');
    const [info, updateInfo] = useState<any>();
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    const currency: {} = useMemo(() => {
        return {
            'USD': '$', // US Dollar
            'EUR': '€', // Euro
            'CRC': '₡', // Costa Rican Colón
            'GBP': '£', // British Pound Sterling
            'ILS': '₪', // Israeli New Sheqel
            'INR': '₹', // Indian Rupee
            'JPY': '¥', // Japanese Yen
            'KRW': '₩', // South Korean Won
            'NGN': '₦', // Nigerian Naira
            'PHP': '₱', // Philippine Peso
            'PLN': 'zł', // Polish Zloty
            'PYG': '₲', // Paraguayan Guarani
            'THB': '฿', // Thai Baht
            'UAH': '₴', // Ukrainian Hryvnia
            'VND': '₫', // Vietnamese Dong
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.name === "price" ? parseInt(e.target.value) : parseInt(e.target.value)
        const inventory = e.target.name === "inventory" ? parseInt(e.target.value) : parseInt(e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: value,
            [e.target.name]: inventory,
        })
    }

    const handleImageChange = () => {
        const stringImages = JSON.stringify(imageUrls)
        setFormData({
            ...formData,
            images: stringImages,
            description: Description,
            userId: id
        })
    }

    useEffect(() => {
        // console.log(formData.images)
        // console.log(formData)
    }, [formData])

    useEffect(() => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            description: Description,
            images: imageUrls.toString(),
            userId: id
        }))
    }, [imageUrls,Description,id]);


    // useEffect(()=>{
    //     console.log("component render")
    // },[])

    const componentType = typeof window === 'undefined' ? 'server' : 'client';
    console.log(componentType, "product form");

    const postData = async () => {
        // console.log("click submit")
        handleImageChange()
        try {
            const response = await fetch('/api/add-product', {
                method: "post",
                body: JSON.stringify(formData)
            })
            const responseJSON = await response.json();
            router.push('/');
            console.log(responseJSON);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='text-black mt-4'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                    <div>
                        <label htmlFor="title" className='font-medium'>Title</label>
                        <input
                            type="text"
                            className='w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none'
                            name='title'
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="category" className='font-medium'>Category</label>
                        <input
                            type="text"
                            className='w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none'
                            name='category'
                            value={formData.category}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="style" className='font-medium'>Style</label>
                        <input
                            type="text"
                            className='w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none'
                            name='style'
                            value={formData.style}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="store" className='font-medium'>Store</label>
                        <input
                            type="text"
                            className='w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none'
                            name='store'
                            value={formData.store}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="size" className='font-medium'>Size</label>
                        <input
                            type="text"
                            className='w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none'
                            name='size'
                            value={formData.size}
                            onChange={handleChange}
                        />
                        <Sizes setFormData={setFormData} />
                    </div>
                    <div>
                        <label htmlFor="inventory" className='font-medium'>Inventory</label>
                        <input
                            type="number"
                            className='w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none'
                            name='inventory'
                            value={formData.inventory}
                            onChange={handlePriceChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className='font-medium'>Price</label>
                        <input
                            type="number"
                            className='w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none'
                            name='price'
                            value={formData.price}
                            onChange={handlePriceChange}
                        />
                    </div>
                    {/* <Price currency={currency} /> */}

                    <div>
                        <div>
                            <label htmlFor="color" className='font-medium'>Color</label>
                            <input
                                type="text"
                                className='w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none'
                                name='color'
                                value={formData.color}
                                onChange={handleChange}
                            />
                        </div>
                        <Color setFormData={setFormData} Color={formData.color} />
                    </div>
                </div>
                <label htmlFor="" className='mt-10 inline-block font-medium'>Description about your product</label>
                <Para setDescription={setDescription} description={formData.description} />
                <label htmlFor="" className='mt-10 inline-block font-medium'>Upload Images</label>
                <ImageUpload info={info} updateInfo={updateInfo} imageUrls={imageUrls} setImageUrls={setImageUrls} handleImageChange={handleImageChange} />
                <button onClick={postData} className='text-white mt-10 border-[1px] bg-purple-500 px-5 p-2'>Submit</button>
            </div>
        </>
    )
}

export default ProductFrom;