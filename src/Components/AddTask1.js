import React, {useState} from 'react';
import styles from './Layout.module.css'

const AddTask1 = ({addTask}) =>{
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
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