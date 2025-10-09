import React, { useState } from 'react'
import Title from '../../components/owner/Title';
import { assets } from '../../assets/assets';

const AddCar = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }
    const [image,setImage] = useState(null);
    const [car,setCar] = useState({
        brand:'',
        model:'',
        year:'',
        pricePerDay:'',
        category:'',
        transmisson:'',
        fuel_type:'',
        seating_capacity:'',
        location:''
    })
  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
        <Title title="Add New Car" subTitle="Fill in details to list a new car for booking , including , 
        availablity, including price, avalablity and car spacification"/>
       
        <form onSubmit={onSubmitHandler} className='flex flrx-col gap-5 text-gray 500 text-sm mt-5 max-w-xl'>
            {/* Car Image */}
            <div className=''>
                <label htmlFor='car-image'>
                    <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt='' className='h-14 rounded cursor-pointer' />
                </label>
                <input type='file' id="carimage" accept='image/*' hidden onChange={(e)=>setImage(e.target.files[0])}/>
                <p className='text-sm text-gray-500'>
                    Uplad a picture of your car
                </p>
            </div>
        </form>
    </div>
  )
}

export default AddCar