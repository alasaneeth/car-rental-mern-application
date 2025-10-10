import React, { useEffect, useState } from 'react'
import { assets, dummyMyBookingsData } from '../assets/assets';
import Title from '../components/Title';

const MyBooking = () => {
  const [bookings, setBooking] = useState([]);
    const currency = import.meta.env.VITE_CURRENCY;


  const fetchBooking = async () => {
      setBooking(dummyMyBookingsData);
  }

  useEffect(()=> {
    fetchBooking();
  },[])
  
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 text-sm max-w-7xl mx-auto'>
      <Title title="My Booking" subTitle="View and manage your all bookings" align="left"/>
      
      <div className='space-y-6 mt-8'>
        {bookings.map((booking,index) => (
          <div key={booking._id} className='grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200'>
            
            {/* Car Image + Basic Info */}
            <div className='md:col-span-1'>
              <div className='rounded-md overflow-hidden mb-3'>
                <img 
                  src={booking.car.image} 
                  alt={`${booking.car.brand} ${booking.car.model}`} 
                  className='w-full h-auto aspect-video object-cover transition-transform duration-300 hover:scale-105'
                />
              </div>
              <p className='text-lg font-semibold text-gray-900'>{booking.car.brand} {booking.car.model}</p>
              <p className='text-gray-500 text-sm mt-1'>{booking.car.year} · {booking.car.category} · {booking.car.location}</p>
            </div>

            <div className='md:col-span-2'>
              <div className='flex items-center gap-2'>
                <p className='px-3 py-1.5 bg-blend-lighten rounded'>Booking #{index + 1}</p>
                <p className={`px-3 py-1 text-xs rounded-full ${booking.status === "confirmed" ? 'bg-green-400/15 text-green-600'  : 'bg-red-400/15 text-red-600'
                }`}>{booking.status}</p>
              </div>

              <div className='flex items-start gap-2 mt-3'>
                <img src={assets.calendar_icon_colored} alt='' className='w-4 h-4 mt-1'/>
                <div>
                  <p className='text-gray-500'>Rental Period</p>
                  <p>{booking.pickupDate.split('T')[0]} To {booking.returnDate.split('T')[0]}</p>
                </div>
              </div>

             
            </div>
             <div className='md:col-span-1 flex flex-col justify-between gap-6'>
                <div className='text-sm text-gray-500 text-right'>
                  <p>Total Price</p>
                  <h1 className='text-2xl font-semibold text-blue-800'>{currency} {booking.price}</h1>
                  <p>Booked on {booking.createdAt.split('T')[0]}</p>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyBooking