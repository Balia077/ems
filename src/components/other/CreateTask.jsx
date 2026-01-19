import React from 'react'

const CreateTask = () => {
  return (
    <div className='mt-7 p-5 bg-[#1c1c1c] rounded'>
                <form className='flex w-full flex-wrap items-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-gray-300 text-sm mb-0.5'>Task Title</h3>
                            <input className='border outline-none border-gray-400 rounded px-2 py-1 w-4/5 mb-4' type="text" placeholder='Make a ui design' />
                        </div>
                        <div>
                            <h3 className='text-gray-300 text-sm mb-0.5'>Date</h3>
                            <input className='border outline-none border-gray-400 rounded px-2 py-1 w-4/5 mb-4' type="date" />
                        </div>
                        <div>
                            <h3 className='text-gray-300 text-sm mb-0.5'>Asign to</h3>
                            <input className='border outline-none border-gray-400 rounded px-2 py-1 w-4/5 mb-4' type="text" placeholder='employee name' />
                        </div>
                        <div>
                            <h3 className='text-gray-300 text-sm mb-0.5'>Catagory</h3>
                            <input className='border outline-none border-gray-400 rounded px-2 py-1 w-4/5 mb-4' type="text" placeholder='design, dev, etc.' />
                        </div>
                    </div>
                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-gray-300 text-sm mb-0.5'>Drscription</h3>
                        <textarea className='w-full h-49 text-sm py-2 px-4 outline-none border border-gray-400 rounded' name="" id=""></textarea>
                        <button className='bg-emerald-500 py-3 active:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                    </div>
                </form>
            </div>
  )
}

export default CreateTask
