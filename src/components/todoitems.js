import React, { Component } from "react";


class ToDoItems extends Component{
    render(){
        let toDoEntries = this.props.entries;
        let listItem = toDoEntries.map(((item, index) =>(
            <li key={index}>
                <input type='checkbox' checked={item.checked} onClick={() => this.props.checkedBox(index)}/>
                <span className={item.checked ? 'done' : 'notDone'}>{item.text}</span>
                <button onClick={()=> this.props.remove(index)}>Radera</button>
            </li>
        )));

        return(
            <div>
            <ol className={'taskList'}>
                {listItem}
            </ol>
            <button className={'remove'} onClick={()=> this.props.deleteDone()}>Ta bort klara to-dos</button>
            </div>
        );
    }
}

export default ToDoItems;