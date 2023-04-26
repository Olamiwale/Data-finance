import React from 'react'

export default function Newsletter() {
  return (
    <div className='w-full py-16 text-white px-4'>
       <div className='max-w-[90%] m-auto'>

       <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>

        <div className='mt-4'>
          <div className='flex justify-between items-center max-sm:flex-col '>
            <input
              className='w-full rounded-md p-4 text-black'
              type='email'
              placeholder='Example@email.com'
            />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] p-4 ml-8 max-sm:mt-4'>
              Notify Me
            </button>
          </div>
          <p className='pt-2'>
            We care bout the protection of your data. Read our
            <span className='text-[#00df9a] pl-3'>Privacy Policy.</span>
          </p>
        </div>

       </div>

    </div>
  )
}


