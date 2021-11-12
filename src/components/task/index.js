import React from 'react';
import classes from "./tasks.module.css";

class Tasks extends React.Component {


    
//actual method :)

 

    render(){
        return(
            <div className={classes.task_holder} onClick={this.props.click}>
                <h1>{this.props.title}</h1>
                <h6>{this.props.time}</h6>
            </div>
        )
    }
}

export default Tasks;