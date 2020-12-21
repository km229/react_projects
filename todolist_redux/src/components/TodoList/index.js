import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from '../TodoItem'
import {Component} from "react";

export default class TodoList extends Component {

	static propTypes = {
		filteredTodos: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			completed: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired,
		}).isRequired).isRequired,
		actions: PropTypes.object.isRequired,
	}

	render(){
		let { filteredTodos, actions } = this.props
		return (
			<ul className="todo-list">
				{filteredTodos.map((todo) =>
					<TodoItem key={todo.id} todo={todo} {...actions} />)}
			</ul>
		)
	}
}
