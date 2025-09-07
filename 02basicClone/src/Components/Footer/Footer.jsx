import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-y pt-10"
        >
            
               <div className='font-bold text-2xl mx-4 '
               >
                <h2 className='pb-4'>Inspiration for future getaways</h2>
               </div>
             <div className='md:flex '>  
               <div className='pt-3 mx-7'>
                <ul className='pt-8 pr-40 '>
                    <li className='font-semibold my-2 '>
                        Support
                    </li>
                    <li className='my-2'>Help Centre</li>
                    <li className='my-2'>Air Cover</li>
                    <li className='my-2'>Anti-Discrimination</li>
                    <li className='my-2'>Disability Support</li>
                </ul>
               </div>

                <div className='pt-4 mx-7'>
                <ul className='pt-8 pr-40'>
                    <li className='font-semibold'>
                        Hosting
                    </li>
                    <li className='my-2'>Airbnb your home </li>
                    <li className='my-2'>Airbnb your experience</li>
                    <li className='my-2'>Airbnb your service</li>
                    <li className='my-2'>Hosting Resources</li>
                </ul>
               </div>
               <div className='pt-4 mx-7'>
                <ul className='pt-8'>
                    <li className='font-semibold'>
                        Airbnb
                    </li>
                    <li className='my-2'>2025 Summer Release</li>
                    <li className='my-2'>NewsRoom</li>
                    <li className='my-2'>Careers</li>
                    <li className='my-2'>Investors</li>
                </ul>
               </div>
            </div>

        <div className='pt-20 mx-8 '>
            <h3>© 2025 Airbnb, Inc.·PrivacyTermsSitemapCompany details</h3>
        </div>


            
        </footer>
    );
}