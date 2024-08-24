import React from 'react';
import { GiMuscleUp } from 'react-icons/gi';
import { GrYoga } from 'react-icons/gr';
import { IoIosFitness } from 'react-icons/io';

const Equipment = () => {
    return (
        <div className='container mx-auto font-fontIbm pt-24'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 grid-cols-1 items-center'>
                <div>
                    <h3 className='text-5xl font-extrabold'>What we<br /> offer for you</h3>
                    <p className='text-2xl font-medium pt-3'>
                        It is a long established fact<br /> that a reader readable.
                    </p>
                </div>
                {/* second */}
                <div className='border p-4 bg-slate-200 rounded-lg hover:shadow-lg hover:bg-white'>
                    <div className='space-y-4'>
                        <GrYoga className='text-8xl' />
                        <h3 className='text-4xl font-bold'>Yoga Equipments</h3>
                        <p className='text-2xl font-normal'>It is a long established fact<br /> that a reader readable.</p>
                    </div>
                </div>
                {/* three */}
                <div className='border p-4 bg-slate-200 rounded-lg hover:shadow-lg hover:bg-white'>
                    <div className='space-y-4'>
                        <GiMuscleUp className='text-8xl' />
                        <h3 className='text-4xl font-bold'>Yoga Equipments</h3>
                        <p className='text-2xl font-normal'>It is a long established fact<br /> that a reader readable.</p>
                    </div>
                </div>
                {/* four */}
                <div className='border p-4 bg-slate-200 rounded-lg hover:shadow-lg hover:bg-white'>
                    <div className='space-y-4'>
                        <IoIosFitness className='text-8xl'/>
                        <h3 className='text-4xl font-bold'>Yoga Equipments</h3>
                        <p className='text-2xl font-normal'>It is a long established fact<br /> that a reader readable.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Equipment;