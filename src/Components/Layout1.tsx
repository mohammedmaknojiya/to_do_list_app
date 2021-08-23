import React,{useState} from 'react';
import AddTask1 from './AddTask1';
import styles from './Layout.module.css';
import TaskList1 from './TaskList1';


const getLocalItems = () => {
    let list = localStorage.getItem('todolist');
    if (list) {
        const value = JSON.parse(localStorage.getItem('todolist')|| '[]');
        return value
    } else {
        return []
    }
};

    
// interface itemType{
//     allTask: {id:string,message:String}[] | null
// }
const Layout1 = () =>{

   // const items:itemType = { allTask:[]}

    const [todoList,setToDoList] = useState(getLocalItems);
   

    const addTask = (userInput:String) => {
        let copy:{}[] = [...todoList];
        copy = [...copy, { id: todoList.length + 1, message: userInput }];
        setToDoList(copy);
        console.log(copy);
        localStorage.setItem('todolist',JSON.stringify(copy));
      }

    const removeTask = (id:String|number) =>
    {
        console.log(id)
        //console.log(prevList)
        const myArray = todoList.filter((obj:{id:String|number,message:String})=> {
            return obj.id !== id;
          });
          //console.log(myArray,prevList);

        setToDoList(myArray);
        localStorage.setItem('todolist',JSON.stringify(myArray));

        
    }
     
    const task_List = todoList.map( (task:{id:String|number ;message:String},index:number) => <TaskList1 key={index} taskList={task}  removeTask={removeTask}/> );    
    //console.log(task_List)
    return(
        <>
        <div className={styles.layoutBorder}>
            <h1 className={styles.success}>To Do List </h1>
            <hr className={`${styles.success} ${styles.lineStyle}`}/>
            <AddTask1 addTask={addTask}  />
            <div>
                <h1 className={styles.success}>All Remaining Tasks</h1>
                {task_List}
            
            </div>
           
           
        </div>
        </>
    )
}




export default Layout1;