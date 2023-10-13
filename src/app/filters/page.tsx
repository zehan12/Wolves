'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Filter from './Filter'
import Items from './Items'

type Props = {}

const Page = (props: Props) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [selectedSize, setSelectedSize] = useState<string[]>([])
    const [allHexValues, setAllHexValues] = useState<string[]>([])
    const [selectedHexValues, setSelectedHexValues] = useState<string[]>([])
    const [price, setPrice] = useState({
        min: 0,
        max: 10,
    })

    return (
        <div className='px-5 max-w-[1280px] mx-auto'>
            <div>
                <Navbar />
            </div>
            <hr />
            <div className='flex'>
                <div>
                    <Filter
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                        allHexValues={allHexValues}
                        setAllHexValues={setAllHexValues}
                        selectedHexValues={selectedHexValues}
                        setSelectedAllHexValues={setSelectedHexValues}
                        price={price}
                        setPrice={setPrice}
                    />
                </div>
                <Items
                     selectedCategories={selectedCategories}
                     selectedSize={selectedSize}
                     price={price}
                     selectedHexValues={selectedHexValues}
                />
            </div>
        </div>
    )
}

export default Page