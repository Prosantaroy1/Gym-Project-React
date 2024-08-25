import React, { useState } from 'react';
import product from '../../../data/product/product';
import { motion } from "framer-motion";

const Product = () => {
    //
    const [activeTab, setActiveTab] = useState("All");

    const tabs = ["All", "Yoga", "Fitness", "Muscles"];
    // 
    const filteredCards =
        activeTab === "All"
            ? product
            : product.filter((card) => card.category === activeTab);

    return (
        <div className='pt-14 container mx-auto'>
            {/* Tabs button section */}
            <div className="flex space-x-4 mb-4 p-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`py-2 px-4 text-xl rounded ${activeTab === tab
                            ? "bg-primary text-white"
                            : " bg-gray-200 text-gray-700"
                            }`}
                    >
                        {tab}
                    </button>

                ))}
            </div>
            {/* card */}
            {/* Tab Cards section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCards.map((card) => (
                    <motion.div
                        id={card.id}
                        key={card.id}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="p-4 border rounded shadow-sm space-y-2"
                    >
                        <img
                            src={card.image}
                            alt=""
                            className="h-[240px] w-full object-cover"
                        />
                        <p className="text-xl font-semibold">{card.title}</p>
                        <p className="text-gray-500">{card.category}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Product;