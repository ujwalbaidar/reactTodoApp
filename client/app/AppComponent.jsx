import React from 'react';
import TodoTableRow from './todoTableRow';
import TodoForm from './todoForm';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn
} from 'material-ui/Table';

class AppComponent extends React.Component {
	constructor() {
		super();
		
		this.stateData = {
			todoData: []
		};

		this.submitToDoItem = this.submitToDoItem.bind(this);
		this.deleteToDoItem = this.deleteToDoItem.bind(this);
   	}

	render() {
		let todos = this.stateData.todoData;

		todos = todos.map((todoList, i)=>{
			return (
					<TodoTableRow key={i} data={todoList} index={i} deleteToDoItem={this.deleteToDoItem}/>
				);
			});
		
      	return (
			<div>
				<TodoForm submitToDoItem={this.submitToDoItem}/>
	            <ListHeader/>
	            <Table>
	            	<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
	            		<TableRow>
	            			<TableHeaderColumn>S.No.</TableHeaderColumn>
	            			<TableHeaderColumn>To Do Items</TableHeaderColumn>
	            			<TableHeaderColumn>To Do Time</TableHeaderColumn>
	            			<TableHeaderColumn>Actions</TableHeaderColumn>
            			</TableRow>
	            	</TableHeader>
	            	<TableBody>
	            		{todos}
	            	</TableBody>
	            </Table>
	         </div>
		);
   	}

   	deleteToDoItem(arrayIndx){
   		this.stateData.todoData.splice(arrayIndx,1);
   		this.setState({todoData: this.stateData.todoData});
   	}

   	submitToDoItem(item){
   		this.stateData.todoData.push(item);
   		this.setState({todoData: this.stateData.todoData});
   	}
}

class ListHeader extends React.Component {
	render(){
		return(
			<div>
				<h4>To Do Lists</h4>
			</div>
		);
	}
}


export default AppComponent;