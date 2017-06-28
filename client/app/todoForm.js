import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';
import GridList from 'material-ui/GridList';

class TodoForm extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			todoTask:'',
			todoTime: {}
		};
		this.onChange = this.onChange.bind(this);
		this.onChangeDateTime = this.onChangeDateTime.bind(this);
	}

	onChange(e){
		this.setState({[e.target.name]:e.target.value});
	}

	onChangeDateTime(e, value){
		this.setState({['todoTime']: value});
	}

	render(){
		return(
		
			<div>
				<form id="todo-form" onSubmit={ this.handleSubmit.bind(this) }  autoComplete="off">
					<div>
						<TextField
							floatingLabelText="Todo Task"
							floatingLabelFixed={true}
							name="todoTask"
							value={this.state.todoTask}
							onChange={this.onChange}
					    />
				    </div>
				    <div>
				    	<TimePicker
					      hintText="Todo time"
					      name="todoTime"
					      value={this.state.todoTime}
					      onChange={this.onChangeDateTime}
					    />
				    </div>
				    <div>
				    	<RaisedButton type="submit" label="Submit" primary={true} />
				    </div>
				</form>
			</div>
		);

	}

	handleSubmit(e){
		e.preventDefault();
		this.props.submitToDoItem(this.state);
	}
}

export default TodoForm;