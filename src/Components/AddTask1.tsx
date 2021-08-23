import React, {useState} from 'react';
import styles from './Layout.module.css'

interface AddTaskProps{
    addTask : (userInput:String) => void
}

const AddTask1 = ({addTask}:AddTaskProps) =>{
    const [userInput, setUserInput] = useState('');

    const handleChange:React.ChangeEventHandler<HTMLInputElement> | undefined = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
  
    return(
        <div>
            <div>
                <h1 className={styles.success}>Add Your Task</h1>
                
                <form onSubmit={handleSubmit}>
                    <input type="text" className={styles.inputStyle} placeholder="Enter Your Task" value={userInput} onChange={handleChange}></input>
                    <button className={styles.buttonStyle} >Add Task</button>
                </form>
                <hr/>
            </div>

        </div>
    )
}

export default AddTask1;