import React,{useState} from 'react';
import AddTask1 from './AddTask1';
import styles from './Layout.module.css';
import TaskList1 from './TaskList1';


const getLocalItems = () => {
    let list = localStorage.getItem('todolist');
    if (list) {
        return JSON.parse(localStorage.getItem('todolist'));
    } else {
        return []
    }
};

const Layout1 = () =>{

    const items = { allTask:[]}

    const [todoList,setToDoList] = useState(getLocalItems);

    const addTask = (userInput) => {
        let copy = [...todoList];
        copy = [...copy, { id: todoList.length + 1, message: userInput }];
        setToDoList(copy);
        console.log(copy);
        localStorage.setItem('todolist',JSON.stringify(copy));
      }

    const removeTask = (id) =>
    {
        console.log(id)
        //console.log(prevList)
        const myArray = todoList.filter((obj)=> {
            return obj.id !== id;
          });
          //console.log(myArray,prevList);

        setToDoList(myArray);
        localStorage.setItem('todolist',JSON.stringify(myArray));

        
    }
     
    const task_List = todoList.map( (task,index) => <TaskList1 key={index} taskList={task}  removeTask={removeTask}/> );    
    //console.log(task_List)
    return(
        <>
        <div className={styles.layoutBorder}>
            <h1 className={styles.success}>To Do List </h1>
            <hr className={`${styles.success} ${styles.lineStyle}`}/>
            <AddTask1 addTask={addTask} listTask={items.allTask} />
            <div>
                <h1 className={styles.success}>All Remaining Tasks</h1>
                {task_List}
            
            </div>
           
           
        </div>
        </>
    )
}

export default Layout1;