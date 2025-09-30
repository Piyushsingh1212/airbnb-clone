import React from 'react'
import { Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        
       <>
       <div className=''>
        <div className=' pt-5   flex justify-center align-center'>
            <div className='flex-col' >
                <ul className="list-none mx-20 pt-4 h-[111px] w-[770px] flex justify-center align-center rounded-[30px] border text-xl shadow-sm">
                <li className='mx-[40px] '>
                    <div className='flex-col'>
                    <label for="city">Where</label>
                     <h6 className='text-slate-500 text-[15px]'>Search Destinations</h6>
                    <select className='rounded-lg'>
                        <option>Delhi</option>
                        <option>Gurugram</option>
                        <option>Noida</option>
                        <option>Gaziabad</option>
                        <option>Mumbai</option>
                        <option>Kolkata</option>
                        <option>Hyderabad</option>
                    </select>
                    </div> 
                </li>

                <div className='flex-col'>
                    <label for="appointment">Check-in</label>
                    <h6 className='text-slate-500 text-[15px]'>Add Dates</h6>
                    <input type="date" className='w-25 h-6 rounded-lg   border-black border-2'
                    ></input>
                </div>
     
                <div className='flex-col mx-6'>   
                <label for="appointment">Check-out</label>
                <h6 className='text-slate-500 text-[15px]'>Add Dates</h6>
                    <input type="date" className='w-25 h-6 rounded-lg  border-black border-2 ' 
                    ></input>
                </div>     
               
                <li className=''>
                    <svg width="30px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    
                
                </li>
                </ul>
            </div>
        </div>
        <div className='pt-4'>
            <h2 className='text-2xl mx-4 font-bold'>Popular homes in Gurgaon District</h2>
        </div>
        <div className='flex justify-center align-center mx-4 pt-7 flex-wrap pb-8'>
        <div className='transition delay-150 duration-300 ease-linear hover:-translate-y-1 hover:scale-110 hover:bg-white..'>
            <img className='h-40 w-40  hover:opacity-50 md:h-60 md:w-60 mx-5 rounded-xl  border-slate-500' src="https://odysseysociety.com/wp-content/uploads/2024/05/rosewood-carlyle-presidential-suite-LUXESUITE0122-0046808a88924e57922d78c7f1d9ca60.jpg" />
            <h3 className='mx-5'>$20 for 2 nights </h3>
        </div>
            <div className='transition delay-150 duration-300 ease-linear hover:-translate-y-1 hover:scale-110 hover:bg-white..'>
            <img  className='h-40 w-40  hover:opacity-50 md:h-60 md:w-60 mx-5 rounded-xl  border-slate-500' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqTpdyjEjh-GdNImV_u6iJ0k6iKZS5DlXZ5g&s" />
            
            <h3 className='mx-5'>$15 for 2 nights</h3>
            </div>
            <div className='transition delay-150 duration-300 ease-linear hover:-translate-y-1 hover:scale-110 hover:bg-white..'>
            <img className='h-40 w-40  hover:opacity-50 md:h-60 md:w-60 mx-5 rounded-xl  border-slate-500' src="https://lovebeverlyhills.com/uploads/cache/Image/BlockFeaturedBlock/id/8189/4887a678b011e6ce4b577d4db08ab0981580da9e.jpg" />
            <h3 className='mx-5'>$30 for 2 nights</h3>
            
            
            </div>
            <div>
                
            <img className='h-40 w-40  hover:opacity-50 md:h-60 md:w-60 mx-5 rounded-xl  border-slate-500' src="https://media.cntraveler.com/photos/685595770556b60be007dced/16:9/w_2580,c_limit/062325-Best-Hotels-LA-W-Hollywood-PR_MG_2125-2-copy.jpg" />
            <h3 className='mx-5'>$20 for 2 nights</h3>
                
            </div>

    </div>        
     </div> 
      
            
                
        </>
    );

}
