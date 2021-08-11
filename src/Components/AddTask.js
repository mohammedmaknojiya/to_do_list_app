import React, {Component} from 'react';
import styles from './Layout.module.css'

class AddTask extends Component{
    constructor()
    {
        super();
        this.state=
        {
            all_task:[],
            count:0
        }
    }

   addTask = () => 
   {
        let x = document.getElementById("task").value;
        let count = this.state.count+1;
        let new_task_list=[...this.state.all_task, {id:count,message:x}];
        this.setState(
            {
                all_task:new_task_list,
                count:count
             }
        )
    }

    removeTask = (id) =>
    {
        console.log(id)
        const myArray = this.state.all_task.filter(function( obj ) {
            return obj.id !== id;
          });
        this.setState(
            {
                all_task:myArray
            }
        )
    }

    render(){
        let list_of_task=this.state.all_task;
        const task_List = list_of_task.map( (task,index) => 
            {
                return (
                        <div key={index} className={styles.alignThem} >
                            <div className={styles.taskStyle}>
                                I am with id {task.id} and with message {task.message}
                            </div>
                            <button className={styles.buttonStyle} onClick={()=> this.removeTask(task.id)}>Done!!</button>
                        </div>
                      )
            } ) 
        
        return(
            <div>
                <h1 className={styles.success}>Add Your Task</h1>
                <div>
                <input type="text" className={styles.inputStyle} placeholder="Enter Your Task" id="task"></input>
                <button className={styles.buttonStyle} onClick={this.addTask}>Add Task</button>
                </div>
                <hr/>
                <div>
                <h1 className={styles.success}>All Remaining Tasks</h1>
                {task_List}
                </div>
            </div>
        )
    }
}

export default AddTask;