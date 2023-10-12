'use client';
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { FC, useEffect } from "react";

type ImageUploadProps = {
    info: any;
    updateInfo: React.Dispatch<React.SetStateAction<any>>;
    imageUrls: string[];
    setImageUrls: React.Dispatch<React.SetStateAction<string[]>>;
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ImageUpload = ({
    info,
    updateInfo,
    imageUrls,
    setImageUrls,
    handleImageChange
}: ImageUploadProps) => {

    const onUpload = (result: any) => {
        updateInfo(result.info.secure_url)
        const newImageUrl = result.info.secure_url
        setImageUrls(preImageUrls => [...preImageUrls, newImageUrl])
        handleImageChange(result)
    }

    const handleDeleteImage = (index: number) => {
        setImageUrls(prevImageUrls => {
            const updateImageUrls = [...prevImageUrls]
            updateImageUrls.splice(index, 1)
            return updateImageUrls
        })
    }

    const getAllMethods = (object: any) => {
        return Object.getOwnPropertyNames(object).filter(function (property) {
            return typeof object[property] == 'function';
        });
    }

    useEffect(() => {
        const componentType = typeof window === 'undefined' ? 'server' : 'client';
        console.log(componentType, "image component");
    }, [])


    return (
        <div>
            <div className='my-3 mb-10 p-4 w-80 flex justify-center bg-blue-100'>
                <CldUploadWidget uploadPreset='ccxtx3t9' onUpload={onUpload}>
                    {({ open }: any) => {
                        function handleOnclick(e: React.MouseEvent<HTMLButtonElement>) {
                            e.preventDefault()
                            open()
                        }
                        return (
                            <button className="p-1 px-2 bg-blue-500 text-white font-medium" onClick={handleOnclick}>
                                Click Here Upload Product Images
                            </button>
                        )
                    }}
                </CldUploadWidget>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                {imageUrls.map((imageUrl, index) => (
                    <div key={index} className='flex flex-col justify-center'>
                            <picture className="hover:bg-red-500 hover:none">
                                <img src={imageUrl} alt="" className='object-cover object-top w-80 h-80' />
                            </picture>
                        <button className='border-[1px]  p-1 px-2 mt-5 bg-red-600 hover:bg-red-700 text-white capitalize' onClick={() => handleDeleteImage(index)}>delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageUpload;