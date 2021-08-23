import React from 'react';
import styles from './Layout.module.css';

const TaskList1 = ({taskList,removeTask}) =>{
    // const [prevList,removeItem] = useState(taskList);
    // console.log(prevList)

    return(
        
        <div key={taskList.id} className={styles.alignThem} >
            <div className={styles.taskStyle}>
                I am with id {taskList.id} and with message {taskList.message}
            </div>
            <button className={styles.buttonStyle} onClick={() => removeTask(taskList.id)}>Done!!</button>
            
        </div>
       
    )
}

export default TaskList1;