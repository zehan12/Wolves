import React from "react";
import Navbar from "../components/Navbar";
import ProductFrom from "./ProductForm";
import Breadcrumbs from "../components/Breadcrumbs";

export default function AddProduct() {
    return (
        <>
            <div className='px-5 max-w-[1280px] mx-auto mb-10'>
                <div>
                    <Navbar />
                </div>
                <Breadcrumbs />
                <h1 className='text-3xl font-semibold py-6'>Add your Product to Collections</h1>
                <ProductFrom />
            </div>
        </>
    )
}   