import TaskCard from '@/components/TaskCard'
import Task from '@/models/Task'

const HomePage = async () => {
  const tasks = await Task.find()
  
  return (
    <div>
      <h1>Tasks</h1>
      <div className='grid grid-cols-3 gap-2'>
        {tasks.map((task) => (
          <TaskCard task={task}  key={task._id}/>
        ))}
      </div>
    </div>
  )
}

export default HomePage