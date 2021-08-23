import styles from './Layout.module.css';


interface TaskListProps{
    taskList:{
        id: String| number;
        message: String
    },
    removeTask: (id:String|number) => void
}

const TaskList1 = ({taskList,removeTask}:TaskListProps):JSX.Element =>{
    // const [prevList,removeItem] = useState(taskList);
    // console.log(prevList)

    return(
        
        <div className={styles.alignThem} >
            <div className={styles.taskStyle}>
                I am with id {taskList.id} and with message {taskList.message}
            </div>
            <button className={styles.buttonStyle} onClick={() => removeTask(taskList.id)}>Done!!</button>
            
        </div>
       
    )
}

export default TaskList1;