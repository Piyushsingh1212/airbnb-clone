import React from 'react'

export default function Card() {
  return (
    <>
    <div className='pt-12  px-8 shadow-lg flex flex-wrap h-screen w-full'
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1702812/pexels-photo-1702812.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "130vh",
        width: "100%",
      }}
    >
    
        <div className='flex  flex-col   rounded-3xl bg-slate-100  h-[650px] w-[550px] lg:w-[800px] lg:h-[600px]'>
            <h1 className='text-2xl pt-4 ml-6  mr-6 my-4 font-bold'>About Airbnb: What it is and how it works</h1>
            <p className='ml-6 mr-6'>Whether you host a home, lead guests on an exciting tour, or provide a service (like professional photography), you can make guest’s stays more memorable almost anywhere around the world.</p>
            <ul>
                
                <li className='text-lg pt-4 ml-8 mb-2  '>Enjoy unique homes, experiences, services, and more</li>
                <li className='text-lg pt-4 ml-8 my-2 '>A platform you can trust</li>
                <li className='text-lg pt-4 ml-8 my-2 '>24/7 support for hosts and guests</li>
                <li className='text-lg pt-4 ml-8 my-2 '>Hosting your home, an experience, or providing a service on Airbnb</li>
            </ul>
        <div className=''>
            <img className=' rounded-lg mx-4 ml-8 my-6 h-40 w-30 ' src= "https://assets.entrepreneur.com/article/1405623476-airbnb-logo-explanation.jpg" />

        </div>
        
        <div className='mt-1 mx-4 ml-8  lg:my-8 lg:ml-20'>
            

        </div>
     </div>

     
    </div>
    </>
  )
}

