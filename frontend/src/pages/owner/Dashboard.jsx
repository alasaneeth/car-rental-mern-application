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
        </div>
    )
}

export default Dashboard