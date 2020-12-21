import React from 'react'
import PropTypes from 'prop-types'
import './style/index.css'

import Footer from '../Footer'
import VisibleTodoList from '../../containers/VisibleTodoList'
import {Component} from 'react';
import load from './style/loading.png'

export default class MainSection extends Component {

	static propTypes = {
		completedCount: PropTypes.number.isRequired,
		actions: PropTypes.object.isRequired,
	}

	componentDidMount() {
		this.props.actions.fetchTodos()
	}

	completeAllTodos = () => {
		const areAllMarked = this.props.data.todos.every((todo) => todo.completed)
		for(let todo of this.props.data.todos){
			this.props.actions.fetchEditTodo(todo.id, todo.text, !areAllMarked)
		}
	}

	clearCompleted = () => {
		let completedTodos = this.props.data.todos.filter((t) => t.completed)
		for(let {id} of completedTodos) {
		 	this.props.actions.fetchDeleteTodo(id)
		}
	}

	render(){
		let { data, completedCount } = this.props
		let todosCount = data.todos.length
		return (
			<section className="main">
				{
					data.loading
					&& <div className="loading">
						<img id="loading-icon" src={load} alt="Chargement en cours"/>
					</div>
				}
				{
					!!todosCount
					&& <span>
						<input
							className="toggle-all"
							type="checkbox"
							checked={completedCount === todosCount}
							readOnly
						/>
						<label onClick={this.completeAllTodos} />
					</span>
				}
				<VisibleTodoList />
				{
					!!todosCount
					&& <Footer
						completedCount={completedCount}
						activeCount={todosCount - completedCount}
						onClearCompleted={this.clearCompleted}
					/>
				}
			</section>
		)
	}
}
