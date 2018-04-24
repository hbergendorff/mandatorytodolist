import React, { Component } from "react";
import ToDoItems from "./todoitems";

class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: []
        };
    }
    addItem(e){
        e.preventDefault();

        if (this.inputElement.value.trim() !== ''){
            let newTask ={
                text: this.inputElement.value,
                checked: false

            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newTask)
                };
            });

            this.inputElement.value = '';
        }
    }


    deleteItem(e){
        const eraceItem = this.state.items.filter((item, i) => e !== i);
        this.setState({items: eraceItem});
    }

    checkBox(i){
        const checkedBox = this.state.items.map((item, index) => i === index ? {...item, checked: !item.checked}: item);
        this.setState({items: checkedBox});
    }

    deleted(){
        const eraceItem = this.state.items.filter((item) => {if(item.checked === false)return item});
        this.setState({items: eraceItem});
    }

    render() {
     return(
         <div className={'toDoListContent'}>
             <div className={'heading'}>
                 <h1>Välkommen till din to-do app</h1>
                 <form onSubmit={(e)=>this.addItem(e)}>
                     <input required className={'input'} ref={(a) => this.inputElement = a}
                     placeholder={'Lägg till uppgift'}
                     />
                     <button className={'send'} type={'submit'}>Lägg till</button>
                 </form>
             </div>
                <ToDoItems entries={this.state.items}
                           remove={(e) => this.deleteItem(e)}
                           checkedBox={(index, e) => this.checkBox(index, e)}
                           deleteDone={() => this.deleted()} />

         </div>
     );
    }
}

export default TodoList;