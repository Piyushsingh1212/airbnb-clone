import React from 'react'

function Service() {
  return (
    <>
   <div className='pt-4'>
        <h2 className='text-2xl font-bold'>Services in Delhi</h2>
       </div>
       <div className='flex justify-center align-center mx-4 pt-7 flex-wrap'>
       <div className='transition delay-150 duration-300 ease-linear hover:-translate-y-1 hover:scale-110 hover:bg-white..'>
        <img className='h-40 w-40  hover:opacity-50  mx-5 rounded-xl  border-slate-500' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkMzGfWD6VVHjOVIHyjntHUQGWW0BTWrjlw&s" />
        <h3 className='mx-5'>Photography </h3>
       </div>
        <div className='transition delay-150 duration-300 ease-in hover:-translate-y-1 hover:scale-110 hover:bg-white..'>
        <img  className='h-40 w-40  hover:opacity-50  mx-5 rounded-xl  border-slate-500' src="https://images.pexels.com/photos/4252146/pexels-photo-4252146.jpeg" />
        
        <h3 className='mx-5'>Chefs</h3>
        </div>
        <div className='transition delay-150 duration-300 ease-out hover:scale-110 hover:bg-white..'>
        <img className='h-40 w-40  hover:opacity-50   mx-5 rounded-xl  border-slate-500' src="https://images.pexels.com/photos/1049687/pexels-photo-1049687.jpeg" />
        
        <h3 className='mx-5'>Hair</h3>
        </div>

        <div className='hover:-translate-y-1 hover:scale-110 hover:bg-white..'>
        <img className='h-40 w-40  hover:opacity-50  mx-5 rounded-xl  border-slate-500' src="https://media.istockphoto.com/id/1092670800/photo/sport-training-weight-dumbles-on-wooden-ground.jpg?b=1&s=612x612&w=0&k=20&c=xX1PGw9s9Z3fRXkA9vrgvyKoQR4hJtIxtOLMjVbYdn0=" />
        
        <h3 className='mx-5'>Training</h3>
        </div>

        <div className='hover:-translate-y-1 hover:scale-110 hover:bg-white..'>
        <img className='h-40 w-40  hover:opacity-50  mx-5 rounded-xl  border-slate-500' src="https://images.pexels.com/photos/306059/pexels-photo-306059.jpeg" />
        
        <h3 className='mx-5'>Catering</h3>
        </div>

        <div className=' transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white..'>
          <img className='h-40 w-40  hover:opacity-50  mx-5 rounded-xl  border-slate-500' src="https://images.pexels.com/photos/3865799/pexels-photo-3865799.jpeg" />
          
          <h3 className='mx-5 border-red-400'>Massage</h3>
        </div>
        </div>
        
    </>
  )
}

export default Service
