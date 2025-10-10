import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import apiService from '../services/apiService';

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const currency = import.meta.env.VITE_CURRENCY || '$';

  const fetchBookings = async () => {
      setLoading(true);
      try {
          const response = await apiService.getMyBookings();
          setBookings(response.bookings || response);
      } catch (error) {
          console.error('Failed to fetch bookings:', error);
          // Fallback to empty array if API fails
          setBookings([]);
      } finally {
          setLoading(false);
      }
  }

  const handleCancelBooking = async (bookingId) => {
      if (window.confirm('Are you sure you want to cancel this booking?')) {
          try {
              await apiService.cancelBooking(bookingId);
              // Refresh bookings
              fetchBookings();
          } catch (error) {
              console.error('Failed to cancel booking:', error);
          }
      }
  }

  useEffect(() => {
      fetchBookings();
  }, [])
  
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 text-sm max-w-7xl mx-auto'>
      <Title title="My Booking" subTitle="View and manage your all bookings" align="left"/>
      
      {loading ? (
          <div className="text-center py-8">Loading bookings...</div>
      ) : (
          <div className='space-y-6 mt-8'>
              {bookings.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                      No bookings found.
                  </div>
              ) : (
                  bookings.map((booking, index) => (
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
                                  <p className='px-3 py-1.5 bg-blue-100 text-blue-600 rounded'>Booking #{index + 1}</p>
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

                              {booking.status === "confirmed" && (
                                  <button 
                                      onClick={() => handleCancelBooking(booking._id)}
                                      className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                                  >
                                      Cancel Booking
                                  </button>
                              )}
                          </div>
                          <div className='md:col-span-1 flex flex-col justify-between gap-6'>
                              <div className='text-sm text-gray-500 text-right'>
                                  <p>Total Price</p>
                                  <h1 className='text-2xl font-semibold text-blue-800'>{currency} {booking.price}</h1>
                                  <p>Booked on {booking.createdAt.split('T')[0]}</p>
                              </div>
                          </div>
                      </div>
                  ))
              )}
          </div>
      )}
    </div>
  )
}

export default MyBooking