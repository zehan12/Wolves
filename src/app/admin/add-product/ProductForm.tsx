'use client';
import Color from "@/app/components/Color";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

type Props = {};

const ProductFrom: React.FC<Props> = (props) => {
    const { data: session } = useSession();
    const id = session?.user.id;
    const [formData, setFormData] = useState({
        color:"#fff"
    });

    useEffect(()=>{
        
    })



    return (
        <>
            <div>product
                Add Item to Collection
                <Color setFormData={setFormData} Color={formData.color} />

            </div>
        </>
    )
};

export default ProductFrom;