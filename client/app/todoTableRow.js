import React from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ActionDelete from 'material-ui/svg-icons/action/delete';

import {
	TableRowColumn,
	TableRow
} from 'material-ui/Table';


class TodoTableRow extends React.Component {
	render(){
		return(
			<TableRow>
				<TableRowColumn>
					{ this.props.index+1 }
				</TableRowColumn>
				<TableRowColumn>
					{ this.props.data.todoTask }
				</TableRowColumn>
				<TableRowColumn>
					{ new Date(this.props.data.todoTime).toString() }
				</TableRowColumn>
				<TableRowColumn>
					<IconButton tooltip="Delete" onClick={this.handleDelete.bind(this)}>
			      		 <ActionDelete />
					</IconButton>
				</TableRowColumn>
			</TableRow>
		);
	}

	handleDelete(){
		this.props.deleteToDoItem(this.props.index);
	}
}

export default TodoTableRow;
					