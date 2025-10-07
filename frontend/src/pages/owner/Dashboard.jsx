import React, { useEffect } from 'react'
import { useState } from 'react'
import { assets, dummyDashboardData } from '../../assets/assets'
import Title from '../../components/owner/Title'

const Dashboard = () => {
    const [data, setData] = useState({
        totalCars: 0,
        totalBookings: 0,
        pendingBooking: 0,
        compeleBooking: 0,
        recenBooking: [],
        monthlyRevenue: 0
    })

    const dashboardCards = [
        { title: "Total Cars", value: data.totalCars, icon: assets.carIcon },
        { title: "Total Bookings", value: data.totalBookings, icon: assets.listIconColored },
        { title: "Pending", value: data.pendingBooking, icon: assets.cautionIconColored },
        { title: "Confimed", value: data.compeleBooking, icon: assets.listIconColored },
    ]

    useEffect(() => {
        setData(dummyDashboardData)
    }, [])

    return (
        <div className='px-4 pt-10 md:px-10 flex-1'>
            <Title 
                title="Admin Dashboard" 
                subTitle="Monitor overall platform performance including total cars, booking, revenue and recent activities"
            />

            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-mxl'>
                {dashboardCards.map((card, index) => {
                    return (
                        <div key={index} className='bg-white p-4 rounded-lg shadow-md flex justify-between items-center'>
                            <div>
                                <h1 className='text-xs text-gray-500'>{card.title}</h1>
                                <p className='text-lg font-semibold'>{card.value}</p>
                            </div>
                            <div className='p-2 bg-gray-100 rounded-full'>
                                <img src={card.icon} alt={card.title} className='h-6 w-6' />
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='flex flex-wrap items-start gap-6 mb-8 w-full'>
                {/* recnt booking */}
                <div className='p-4 md:p-6 border border-borderColor rounded-md max-w-lg'>
                    <h1 className='text-lg font-medium'>Recent Booking</h1>
                    <p className='text-gray-500'>Latest customer bookings</p>
                    {data.recenBooking.map((booking, index)=> (
                      <div key={index} className='mt-4 flex items-center justify-center'>
                        <div className='flex items-center gap-2'>
                            <div className='hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-blue-800'>
                                <img src={assets.listIconColored} alt='' className='h-5 w-5'/>
                            </div>
                        </div>
                        <div>
                            <p>{booking.car.brand} {booking.car.model}</p>
                            <p className='text-sm text-gray-500'>{booking.createdAt.spit('T')[0]}</p>
                        </div>

                        <div className='flex items-center gap-2 font-medium'>
                            <p className='text-sm text-gray-500'>{booking.price}</p>
                            <p className='px-3 py-0.5 border border-borderColor rounded-full text-sm'>{booking.status}</p>
                        </div>
                      </div>  
                      
                    ))}
                </div>
                {/* monthly Revenue */}
                <div></div>
            </div>
        </div>
    )
}

export default Dashboard