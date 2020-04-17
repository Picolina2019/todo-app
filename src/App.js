import React from 'react';
import './App.css';
import TasksList from './components/TasksList';
import TaskListContextProvider from './context/TaskListContext';
import TaskForm from './components/TaskForm';
import Header from './components/Header';

const App=()=> {
  return (
    <TaskListContextProvider>
      <div className='container'>
        <div className='app-wrapper'>
        <Header/>
          <div className='main'>
          <TaskForm/>
          <TasksList/>
          </div>
         </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
