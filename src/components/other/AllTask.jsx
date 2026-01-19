import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const authData = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-50'>
      <div className=' mb-2 py-2 text-center px-4 flex justify-between rounded'>
          <h2 className='w-1/5 text-white text-lg font-bold'>Employee Name</h2>
          <h3 className='w-1/5 text-white text-lg font-bold'>New Task</h3>
          <h5 className='w-1/5 text-white text-lg font-bold'>Active Task</h5>
          <h5 className='w-1/5 text-white text-lg font-bold'>Completed Task</h5>
          <h5 className='w-1/5 text-white text-lg font-bold'>Failed Task</h5>
        </div>
      <div className='h-[80%] overflow-auto'>
        {authData.employees.map((elem,idx) => {
        return <div key={idx} className='mb-2 border-2 border-emerald-500 text-center py-2 px-4 flex justify-between rounded'>
          <h2 className='w-1/5 font-bold text-white'>{elem.firstName}</h2>
          <h3 className='w-1/5 font-bold text-blue-400'>{elem.taskNumbers.new}</h3>
          <h5 className='w-1/5 font-bold text-yellow-500'>{elem.taskNumbers.active}</h5>
          <h5 className='w-1/5 font-bold text-green-500'>{elem.taskNumbers.completed}</h5>
          <h5 className='w-1/5 font-bold text-red-500'>{elem.taskNumbers.failed}</h5>
        </div>
      })}
      </div>

    </div>
  )
}

export default AllTask
