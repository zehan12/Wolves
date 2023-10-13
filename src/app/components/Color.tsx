'use client';
import React, { useState, useEffect } from 'react';
import { GrAdd } from "react-icons/gr";
import { SketchPicker } from 'react-color';

interface Props {
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    Color: string;
};

const Color: React.FC<Props> = ({ setFormData, Color }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [sketchColor, setSketchColor] = useState('#fff'); // State for SketchPicker

    const colorArray: string[] = Color.split(',');
    const [selectedColors, setSelectColors] = useState<string[]>(colorArray);
    const [isAlert, setIsAlert] = useState<boolean>(false)

    const handleColorButtonClick = () => {
        if (!sketchColor.length) return;
        if (!Color.includes(sketchColor)) {
            setIsAlert(false);
            setSelectColors((prevSelectedColors) => [...prevSelectedColors, sketchColor]);
            setOpen(false);
        } else {
            setIsAlert(true);
            setTimeout(()=>{
                setIsAlert(false);
            },2000);
        }
    }


    useEffect(() => {
        const handleSelectedColors = () => {
            setFormData((prevFormData: FormData) => ({
                ...prevFormData,
                color: selectedColors.join(",")
            }));
        }
        handleSelectedColors();
    }, [selectedColors, setFormData]);

    const handleDeleteColor = (indexToDelete: number) => {
        setSelectColors((prevSelectedColors) => {
            const updateColors = [...prevSelectedColors];
            updateColors.splice(indexToDelete, 1);
            return updateColors;
        });
    }

    const handleChangeComplete = (color: any) => {
        setSketchColor(color.hex); // Update SketchPicker color
    }

    return (
        <div className='w-full'>
            <div className='w-96 h-22'>
                {
                    isAlert && (<div className='flex items-center'>This color:
                        <div className='w-6 h-4 border-[0.1px] ml-1 mr-2' style={{ background: sketchColor }}></div>
                        is already selected</div>)
                }
            </div>
            <div className='flex items-center justify-between mt-3'>
                <button className='block border-[1px] rounded-lg px-3 text-[14px]'
                    onClick={() => setOpen(!open)}
                >
                    Choose Color
                </button>
                {open && (
                    <SketchPicker color={sketchColor} onChangeComplete={handleChangeComplete} />
                )}
                <button className='flex items-center space-x-1 border-[1px] rounded-lg p-1 px-3 text-[14px]'
                    onClick={handleColorButtonClick}
                >
                    Add<GrAdd className="ml-1" size={16} />
                </button>
            </div>
            <div className='mt-5'>
                {selectedColors.map((selectedColor, index) => (
                    <div key={index} className='flex items-center space-x-4 mb-2'>
                        <div
                            style={{ background: selectedColor }}
                            className={`w-10 h-10 border-[0.1px] rounded-full inline-block`}>
                        </div>
                        <span className='border-[1px] rounded-lg p-1 px-3 text-[14px]'>{selectedColor}</span>
                        <button className='border-[1px] rounded-lg p-1 px-3 text-[14px]' onClick={() => handleDeleteColor(index)}>delete</button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Color;