import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyCarData } from '../assets/assets';
import Loader from '../components/Loader';

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

    const currency = import.meta.env.VITE_CURRENCY;
    
    const handleSubmit = (e) => {
      e.priventDefault;
    }


  useEffect(() => {
    // Add timeout to simulate API call and ensure component renders
    const timer = setTimeout(() => {
      const foundCar = dummyCarData.find(car => car._id == id);
      setCar(foundCar);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [id]);

  if (!car) {
    return <Loader />;
  }

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>
      <button 
        onClick={() => navigate(-1)} 
        className='flex items-center gap-2 mb-6 text-gray-500 cursor-pointer'
      >
        <img src={assets.arrow_icon} alt='' className='rotate-180 opacity-65'/>
        Back To all cars
      </button>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
        {/* Left: car image and details */}
        <div className='lg:col-span-2'>
          <img 
            src={car.image} 
            alt={`${car.brand} ${car.model}`} 
            className='w-full h-auto md:max-h-[500px] object-cover rounded-xl mb-6 shadow-md'
          />
          <div className='space-y-6'> 
            <div>
              <h1 className='text-3xl font-bold'>{car.brand} {car.model}</h1>
              <p className='text-gray-500'>{car.category} • {car.year}</p>
            </div>
            <hr className='border-gray-300 my-6'/>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
              {[
                { icon: assets.users_icon, text: `${car.seating_capacity} Seats` },
                { icon: assets.fuel_icon, text: car.fuel_type }, 
                { icon: assets.car_icon, text: car.transmission }, // Fixed: car_icon instead of carIcon
                { icon: assets.location_icon, text: car.location } 
              ].map(({ icon, text }) => (
                <div key={text} className='flex flex-col items-center p-3 bg-gray-50 rounded-lg'>
                  <img src={icon} alt='' className='h-5 mb-2' />
                  <span className='text-sm text-center'>{text}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h1 className='text-xl font-medium mb-3'>Description</h1>
              <p className='text-gray-600'>{car.description}</p>
            </div>

            {/* Features */}
            <div>
              <h1 className='text-xl font-medium mb-3'>Features</h1>
              <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                {["360 camera", "Bluetooth", "GPS", "Heated Seats", "Rear View mirror"].map((item) => (
                  <li key={item} className='flex items-center text-gray-600'>
                    <img src={assets.check_icon} className='h-4 mr-2' alt=''/>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Booking Form */}
        <form onSubmit={handleSubmit} className='shadow-lg h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500'>
            <p className='flex items-center justify-between text-2xl text-gray-500 font-semibold'>{currency} {car.pricePerDay} 
              <span className='text-gray-400 font-normal'>per day</span> </p>

              <hr className='border-boderColor my-6'/>

               {/* Right: Booking Form */}
        <div className="bg-gray-50 p-6 rounded-xl h-fit sticky top-4">
          <h2 className="text-2xl font-bold mb-4">Book This Car</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Pickup Date</label>
              <input type="date" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Return Date</label>
              <input type="date" className="w-full p-2 border rounded" />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Book Now
            </button>
          </form>
        </div>
        </form>
      </div>
    </div>
  );
}

export default CarDetails;