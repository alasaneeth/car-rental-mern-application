import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import Title from '../../components/owner/Title'
import apiService from '../../services/apiService'

const ManageCars = () => {
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchOwnerCars = async () => {
        setLoading(true);
        try {
            const response = await apiService.getOwnerCars();
            setCars(response.cars || response);
        } catch (error) {
            console.error('Failed to fetch cars:', error);
            // Fallback to dummy data if API fails
            setCars([]);
        } finally {
            setLoading(false);
        }
    }

    const handleToggleAvailability = async (carId) => {
        try {
            await apiService.toggleCarAvailability(carId);
            // Refresh the list
            fetchOwnerCars();
        } catch (error) {
            console.error('Failed to toggle availability:', error);
        }
    }

    const handleDeleteCar = async (carId) => {
        if (window.confirm('Are you sure you want to delete this car?')) {
            try {
                await apiService.deleteCar(carId);
                // Refresh the list
                fetchOwnerCars();
            } catch (error) {
                console.error('Failed to delete car:', error);
            }
        }
    }

    useEffect(() => {
        fetchOwnerCars();
    }, [])

    return (
        <div className='px-4 pt-10 md:px-10 w-full'>
            <Title title="Manage Cars" subTitle="View all listed cars, Update their details, or remove them from the booking platform" />

            {loading ? (
                <div className="text-center py-8">Loading cars...</div>
            ) : (
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
                            {cars.map((car, index) => (
                                <tr key={car._id || index} className='border-t border-borderColor' >
                                    <td className='p-3 flex items-center gap-3 '>
                                        <img src={car.image} alt='' className='h-12 w-12 aspect-square rounded-md object-cover'/>
                                        <div className='max-hidden'>
                                            <p className='font-medium'>{car.brand} {car.model}</p>
                                            <p className='text-xs text-gray-500'>{car.seating_capacity} seats · {car.transmission}</p>
                                        </div>
                                    </td>
                                    <td className='p-3 max-md:hidden'>{car.category}</td>
                                    <td className='p-3'>${car.pricePerDay}/day</td>
                                    <td className='p-3 max-md:hidden'>
                                        <span className={`px-3 py-1 rounded-full text-xs ${car.isAvailable ? 'bg-green-100 text-green-500' :
                                            'bg-red-100 text-red-500'
                                        }`}>
                                            {car.isAvailable ? "Available" : "Unavailable"}
                                        </span>
                                    </td>
                                    <td className='flex items-center gap-2 p-3'>
                                        <img 
                                            src={car.isAvailable ? assets.eye_close_icon : assets.eye_icon} 
                                            className='cursor-pointer' 
                                            onClick={() => handleToggleAvailability(car._id)}
                                            alt={car.isAvailable ? "Make unavailable" : "Make available"}
                                        />
                                        <img 
                                            src={assets.delete_icon} 
                                            className='cursor-pointer' 
                                            onClick={() => handleDeleteCar(car._id)}
                                            alt="Delete car"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default ManageCars