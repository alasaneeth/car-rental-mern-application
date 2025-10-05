import React from 'react'
import { assets } from '../assets/assets';

const CarCard = ({car}) => {
    const currency = import.meta.env.VITE_CURRENCY;
  return (
    <div className='group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 
    transition-all duration-500 cursor-pointer'>
        <div className='relative h-48 overflow-hidden'>
            <img src={car.image} alt='car image' className='w-full h-full object-cover 
            transition-transform duration-500 group-hover:scale-105'/>
            {car.isAvailable && <p className='absolute top-4 left-4 bg-blue-800/90 
            text-white text-xs px-2.5 py-1 rounded-full'> Avalable Now</p>}

            <div className='absalute bottom-4 right-4 bg-black/80 backround-blur-sm text-white px-3 py-2 rounded-lg'>
                <span className='font-semibold'>{currency}{car.pricePerDay}</span>
                <span className='text-sm text-white/80'>/ day</span>
            </div>
        </div>
        <div className='p-4 sm:p-5'>
            <div className='flex justify-between items-start mb-2'>
                <div>
                    <h3 className='text-lg font-medium'>{car.brand}{car.model}</h3>
                    <p className='text-muted-foregound text-sm'>{car.category} . {car.year}</p>
                </div>
            </div>

            <div className='mt-4 grid grid-cols-2 gap-2 text-gray-600'>
                <div>
                    <img src={assets.users_icon} alt='' className='h-4 mr-2'/> 
                    <span>{car.seating_capacity} Seats </span>
                </div>
                 <div>
                    <img src={assets.fuel_icon} alt='' className='h-4 mr-2'/> 
                    <span>{car.fuel_type} </span>
                </div>
                  <div>
                    <img src={assets.car_icon} alt='' className='h-4 mr-2'/> 
                    <span>{car.transmission} </span>
                </div>
                 <div>
                    <img src={assets.location_icon} alt='' className='h-4 mr-2'/> 
                    <span>{car.location} </span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CarCard