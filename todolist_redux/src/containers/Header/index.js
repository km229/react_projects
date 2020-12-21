import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import TodoTextInput from '../../components/TodoTextInput/'
import { fetchAddTodo } from '../../actions/thunks'

export const Header = ({ fetchAddTodo }) => (
	<header className="header">
		<h1>
			TodoList
		</h1>
		<TodoTextInput
			newTodo
			onSave={(text) => {
				if (text.length !== 0) {
					fetchAddTodo(text)
				}
			}}
			placeholder="Que faut-il faire ?"
		/>
	</header>
)

Header.propTypes = {
	fetchAddTodo: PropTypes.func.isRequired,
}

export default connect(null, { fetchAddTodo })(Header)
