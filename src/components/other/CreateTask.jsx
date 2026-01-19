import React, { useState } from 'react'

const CreateTask = () => {

    const [taskInput, setTaskInput] = useState('')
    const [dateInput, setDateInput] = useState('')
    const [asignInput, setAsignInput] = useState('')
    const [categoryInput, setCategoryInput] = useState('')
    const [descriptionInput, setDescriptionInput] = useState('')

    const [task, setTask] = useState({})

    const submitHandler = (e)=>{
        e.preventDefault()

        setTask({taskInput,dateInput,asignInput,categoryInput,descriptionInput,active:false,new:true,failed:false,completed:false})
        const data = JSON.parse(localStorage.getItem('employees'))
        // setTaskInput('')
        // setDateInput('')
        // setAsignInput('')
        // setCategoryInput('')
        // setDescriptionInput('')
    }

  return (
    <div className='mt-7 text-white p-5 bg-[#1c1c1c] rounded'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} className='flex w-full flex-wrap items-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-gray-300 text-sm mb-0.5'>Task Title</h3>
                            <input
                            onChange={(elem)=>{
                                setTaskInput(elem.target.value)
                            }}
                            value={taskInput}
                            className='border outline-none border-gray-400 rounded px-2 py-1 w-4/5 mb-4' type="text" placeholder='Make a ui design' 
                            />
                        </div>
                        <div>
                            <h3 className='text-gray-300 text-sm mb-0.5'>Date</h3>
                            <input
                            value={dateInput}
                            onChange={(elem)=>{
                                setDateInput(elem.target.value)
                            }}
                            className='border outline-none border-gray-400 rounded px-2 py-1 w-4/5 mb-4' type="date" 
                            />
                        </div>
                        <div>
                            <h3 className='text-gray-300 text-sm mb-0.5'>Asign to</h3>
                            <input
                            value={asignInput}
                            onChange={(elem)=>{
                                setAsignInput(elem.target.value)
                            }}
                            className='border outline-none border-gray-400 rounded px-2 py-1 w-4/5 mb-4' type="text" placeholder='employee name' 
                            />
                        </div>
                        <div>
                            <h3 className='text-gray-300 text-sm mb-0.5'>Catagory</h3>
                            <input
                            value={categoryInput}
                            onChange={(elem)=>{
                                setCategoryInput(elem.target.value)
                            }}
                            className='border outline-none border-gray-400 rounded px-2 py-1 w-4/5 mb-4' type="text" placeholder='design, dev, etc.' 
                            />
                        </div>
                    </div>
                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-gray-300 text-sm mb-0.5'>Drscription</h3>
                        <textarea
                        value={descriptionInput}
                        onChange={(elem)=>{
                            setDescriptionInput(elem.target.value)
                        }}
                        className='w-full h-49 text-sm py-2 px-4 outline-none border border-gray-400 rounded' name="" id="">
                        </textarea>
                        <button className='bg-emerald-500 py-3 font-semibold active:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                    </div>
                </form>
            </div>
  )
}

export default CreateTask
