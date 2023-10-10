'use client'
import React, { useEffect, useMemo, useState } from "react";

interface Props {
    setFormData: React.Dispatch<React.SetStateAction<any>>
};

const Sizes: React.FC<Props> = ({ setFormData }) => {
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

    const sizes: string[] = useMemo(() => {
        return ["sm", "md", "xl", "2xl", "3xl", "4xl"];
    }, []);

    const handleSizeButtonClick = (size: string) => {
        setSelectedSizes((prevSelectedSizes) => {
            if (prevSelectedSizes.includes(size)) {
                return prevSelectedSizes.filter((s) => s !== size);
            } else {
                return [...prevSelectedSizes, size];
            }
        });
    };

    const handleSubmit = () => {
        setFormData((prevFormData: FormData) => ({
            ...prevFormData,
            size: selectedSizes.join(",")
        }));
    }

    useEffect(() => {
        console.log("render", sizes);
    }, [sizes])

    return (
        <div>
            {sizes.map((size) => (
                <button
                    key={size}
                    className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer px-3 mt-4 mb-5 mr-5 
                ${selectedSizes.includes(size) ? "bg-gray-500 text-white" : ""}`}
                    onClick={() => handleSizeButtonClick(size)}>
                    {size}
                </button>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Sizes;