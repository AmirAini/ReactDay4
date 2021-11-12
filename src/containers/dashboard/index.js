import React from 'react';
import classes from "./dashboard.module.css";
import Tasks from '../../components/task';

class Dashboard extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            items:[],
        }
        this.addNew = this.addNew.bind(this);
    }

    delete(val){
        const filterItem = this.state.items.filter(
            list => list.key !== val);

        //!replace old array
        this.setState({items: filterItem});
    }

    addNew(){
        console.log('hit');
        console.log(this._inputElement.value);
        
        //push value into an array
        if (this._inputElement.value !== "") {
            
            //new item to concat
            const newItem= {
                title: this._inputElement.value,
                key: Date.now()
            }

            //get item and concat the new items
            // this.setState(
            //     //empty 
            //     (pervState)=> {
            //     //return new object 
            //     return {
            //         items: pervState.items.concat(newItem)}
            //     }, 
            // ()=> console.log(this.state.items))

            //! deconstructor to push an array
            this.setState({ items: [...this.state.items, newItem] }, ()=> console.log(this.state.items));
        }
        
        //reset the value
        this._inputElement.value ="";
    }


    render(){
        return(
            <div className={classes.dashboard_holder}>
                <div>
                    <input type="text" placeholder="Tasks" ref={(a)=> this._inputElement = a} />
                    <button onClick={this.addNew}>Submit</button>
                </div>
                

                <div className={classes.dashboard_task}>
                {
                        this.state.items.map(list => (
                        <Tasks 
                        title={list.title}
                        time={list.key}
                        click={()=> this.delete(list.key)}/> 
                    ))
                }
                    
                </div>
            </div>
        )
    }
}


export default Dashboard;