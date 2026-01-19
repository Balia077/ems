import React from 'react'

const CompleteTask = () => {
  return (
    <div className='shrink-0 h-full w-75 p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illum itaque, alias ipsum sunt cum?
        </p>
        <div className='mt-2'>
            <button className='bg-red-500 mt-27 py-1 px-2 font-semibold rounded active:scale-95 text-sm'>Completed</button>
        </div>
      </div>
  )
}

export default CompleteTask
