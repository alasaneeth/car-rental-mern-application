import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
     <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-8 pb-6 border-borderColor border-b'>
                <div >
                    <img src={assets.logo} alt="logo" className='h-8 md:h-9' />
                    <p className='max-w-80 mt-3'>
                        Premium car rental service with a wide selection of luxury and eveveryday vehicles for all your driving needs
                    </p>
                    <div className='flex items-center gap-3 mt-6'>
                       <a href='' className='w-5 h-5'><img src={assets.facebook_logo}/></a>
                       <a href='' className='w-5 h-5'><img src={assets.instagram_logo}/></a>
                       <a href='' className='w-5 h-5'><img src={assets.twitter_logo}/></a>
                       <a href='' className='w-5 h-5'><img src={assets.gmail_logo}/></a>
                    </div>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>QUICK LONKS</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 text-sm'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Brows Cars</a></li>
                        <li><a href="#">List Your Cars</a></li>
                        <li><a href="#">List Your Car</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
                     <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Resourses</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy and policy</a></li>
                        <li><a href="#">Insurance</a></li>
                    </ul>
                </div>


                  <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Contacts</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 text-sm'>
                        <li><a href="#">12345 Luxury Drive</a></li>
                        <li><a href="#">Colombo sri lanaka</a></li>
                        <li><a href="#">0779003074</a></li>
                        <li><a href="#">info@gmail.com</a></li>
                    </ul>
                </div>

            </div>

            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com">PrebuiltUI</a>. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li>|</li>
                    <li><a href="#">Terms</a></li>
                    <li>|</li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer