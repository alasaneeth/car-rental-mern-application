import React, { useState } from 'react'
import Title from '../../components/owner/Title';
import { assets } from '../../assets/assets';
import apiService from '../../services/apiService';

const AddCar = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(null);
    const [car, setCar] = useState({
        brand: '',
        model: '',
        year: '',
        pricePerDay: '',
        category: '',
        transmission: '',
        fuel_type: '',
        seating_capacity: '',
        location: '',
        description: ''
    })

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await apiService.addCar(car, image);
            console.log('Car added successfully:', response);
            setMessage('Car listed successfully!');
            
            // Reset form
            setCar({
                brand: '',
                model: '',
                year: '',
                pricePerDay: '',
                category: '',
                transmission: '',
                fuel_type: '',
                seating_capacity: '',
                location: '',
                description: ''
            });
            setImage(null);
        } catch (error) {
            setMessage(error.message || 'Failed to add car');
            console.error('Add car error:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='px-4 py-10 md:px-10 flex-1'>
            <Title title="Add New Car" subTitle="Fill in details to list a new car for booking , including , 
            availablity, including price, avalablity and car spacification"/>
           
            {message && (
                <div className={`p-3 rounded-md mb-4 ${message.includes('successfully') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {message}
                </div>
            )}

            <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-5 max-w-xl'>
                {/* Car Image */}
                <div className=''>
                    <label htmlFor='car-image'>
                        <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt='' className='h-14 rounded cursor-pointer' />
                    </label>
                    <input type='file' id="car-image" accept='image/*' hidden onChange={(e) => setImage(e.target.files[0])} />
                    <p className='text-sm text-gray-500'>
                        Upload a picture of your car
                    </p>
                </div>
                {/* Car Brand & Model */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col w-full'>
                        <label>Brand</label>
                        <input type='text' placeholder='e.g: BMW, Mercedes, Audi...' required 
                        className='px-3 py-2 mt-1 border border-borderColor rounded-md 
                        outline-none' value={car.brand} onChange={e => setCar({ ...car, brand: e.target.value })}
                        />
                    </div>

                    <div className='flex flex-col w-full'>
                        <label>Model</label>
                        <input type='text' placeholder='e.g: X5, E-Class, M4' required 
                        className='px-3 py-2 mt-1 border border-borderColor rounded-md 
                        outline-none' value={car.model} onChange={e => setCar({ ...car, model: e.target.value })}
                        />
                    </div>
                </div>
                {/* Car Year, Price, Category */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    <div className='flex flex-col w-full'>
                        <label>Year</label>
                        <input type='number' placeholder='2025' required 
                        className='px-3 py-2 mt-1 border border-borderColor rounded-md 
                        outline-none' value={car.year} onChange={e => setCar({ ...car, year: e.target.value })}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Daily price</label>
                        <input type='number' placeholder='e.g: 50' required 
                        className='px-3 py-2 mt-1 border border-borderColor rounded-md 
                        outline-none' value={car.pricePerDay} onChange={e => setCar({ ...car, pricePerDay: e.target.value })}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Category</label>
                        <select onChange={e => setCar({ ...car, category: e.target.value })} value={car.category} 
                          className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'  
                            >
                            <option value="">Select a category</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Van">Van</option>
                        </select>
                    </div>
                </div>

                {/* car Transmission,Fuel Type, Seating Capacity */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    <div className='flex flex-col w-full'>
                        <label>Transmission</label>
                        <select onChange={e => setCar({ ...car, transmission: e.target.value })} value={car.transmission} 
                          className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'  
                            >
                            <option value="">Select a Transmission</option>
                            <option value="automatic">Automatic</option>
                            <option value="manual">Manual</option>
                            <option value="semi-automatic">Semi-Automatic</option>
                        </select>
                    </div>

                    <div className='flex flex-col w-full'>
                        <label>Fuel Type</label>
                        <select onChange={e => setCar({ ...car, fuel_type: e.target.value })} value={car.fuel_type} 
                          className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'  
                            >
                            <option value="">Select a fuel type</option>
                            <option value="petrol">Petrol</option>
                            <option value="diesel">Diesel</option>
                            <option value="electric">Electric</option>
                            <option value="hybrid">Hybrid</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Seating Capacity</label>
                        <input type='number' placeholder='4' required 
                        className='px-3 py-2 mt-1 border border-borderColor rounded-md 
                        outline-none' value={car.seating_capacity} onChange={e => setCar({ ...car, seating_capacity: e.target.value })}
                        />
                    </div>
                </div>

                {/* Car Location */}
                <div className='flex flex-col w-full'>
                         <label>Location</label>
                        <select onChange={e => setCar({ ...car, location: e.target.value })} value={car.location} 
                          className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'  
                            >
                            <option value="">Select Locations</option>
                            <option value="New York">New York</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="Houston">Houston</option>
                            <option value="Chicago">Chicago</option>
                        </select>
                </div>

                {/* Car Description */}
                <div className='flex flex-col w-full'>
                    <label>Description</label>
                    <textarea rows={5}
                    placeholder='e.g: A luxurious SUV with a spacious interior and a powerful engine..'
                    required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
                    value={car.description}
                    onChange={e => setCar({ ...car, description: e.target.value })}
                    />
                </div>  
                <button 
                    type="submit"
                    disabled={loading}
                    className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-blue-800 text-white rounded-md font-medium w-max cursor-pointer disabled:bg-blue-400 disabled:cursor-not-allowed'
                >
                    <img src={assets.tick_icon} alt='' />
                    {loading ? 'Listing...' : 'List your car'}
                </button>    
            </form>
        </div>
    )
}

export default AddCar