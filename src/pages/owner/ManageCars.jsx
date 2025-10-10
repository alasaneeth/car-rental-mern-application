import React, { useEffect, useState } from 'react'
import { assets, dummyCarData } from '../../assets/assets'
import Title from '../../components/owner/Title'

const ManageCars = () => {
    const [cars,setCars] = useState([])

    const fetchOwnerCars = async ()=> {
        setCars(dummyCarData)
    }

    useEffect(()=> {
        fetchOwnerCars();
    },[])

  return (
    <div className='px-4 pt-10 md:px-10 w-full'>
        <Title title="Manage Cars" subTitle="View all listed cars, Update their details, or remove them from the booking platform "/>

        <div className='max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6'>
            <table className='w-full border-collapse text-left text-sm text-gray-600'>
                <thead className='text-gray-500'>
                    <tr>
                        <td className='p-3 font-medium'>Car</td>
                        <td className='p-3 font-medium max-md:hidden'>Car Category</td>
                        <td className='p-3 font-medium'>Price</td>
                        <td className='p-3 font-medium max-md:hidden'>Status</td>
                        <td className='p-3 font-medium'>Actions</td>                     
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car,index)=> (
                        <tr key={index} className='border-t border-borderColor' >
                            <td className='p-3 flex items-center gap-3 '>
                                <img src={car.image} alt='' className='h-12 w-12 aspect-square rounded-md object-cover'/>
                                <div className='max-hidden'>
                                    <p className='font-medium'>{car.brand} {car.model}</p>
                                    <p className='text-xs text-gray-500'>{car.seating_capicity} {car.Transimission}</p>
                                </div>
                            </td>
                            <td className='p-3 max-md:hidden'>{car.category}</td>
                            <td>{car.pricePerDay}</td>
                            <td className='p-3 max-md:hidden'>
                                <span className={`px-3 py-1 rounded-full text-xs ${car.isAvalable ? 'bg-green-100 text-green-500' :
                                    'bg-red-100 text-red-500'
                                }`}>
                                    {car.isAvalable ? "Available" : "UnAvailable"}
                                </span>

                            </td>
                            <td className='flex items-center p-3'>
                                <img src={car.isAvalable ? assets.eye_close_icon : assets.eye_icon} className='curor-ponitor'/>
                                <img src={assets.delete_icon} className='cursor-pointor'/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ManageCars