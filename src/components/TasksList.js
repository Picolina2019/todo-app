import React, {useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext';
import Tasks from './Tasks';

const TasksList =()=>{
    const {tasks} = useContext(TaskListContext);
    return(
        <div>
            { tasks.length ? (<ul className='list'>
              {tasks.map((task) => {
                return <Tasks key = {task.id} task={task}/>
                })}
          </ul>): (
              <div className='no-tasks'> No Tasks</div>
          )}
          
        </div>
    )
}
export default TasksList;