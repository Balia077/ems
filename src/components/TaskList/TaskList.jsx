import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  console.log(data)
  return (
    <div id='tasklist' className='h-[60%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap py-5 mt-10'>
      {data.tasks.map((elem)=>{
        if(elem.active){
          return <AcceptTask />
        }
        if(elem.new){
          return <NewTask />
        }
        if(elem.completed){
          return <CompleteTask />
        }
        if(elem.failed){
          return <FailedTask />
        }
      })}
    </div>
  )
}

export default TaskList
