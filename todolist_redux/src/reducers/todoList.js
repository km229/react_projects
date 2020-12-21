
import * as type from '../constants/TodoActionTypes'

const initialState = {
	todos: [],
	loading: false,
}

export default function todoList (state = initialState, action) {
	switch (action.type) {

		case type.REQUEST_TODOS:
			return {
				...state,
				loading: action.loading,
			}
		case type.REQUEST_TODOS_SUCCESS:
			return {
				...state,
				loading: action.loading,
				todos: action.todos,
			}
		case type.REQUEST_TODOS_ERROR:
			return {
				...state,
				loading: action.loading,
				error: action.error
			}

		case type.ADD_TODO:
			return {
				...state,
				loading: action.loading,
			}
		case type.ADD_TODO_SUCCESS:
			return {
				...state,
				loading: action.loading,
				todos: state.todos.concat([{
					id: action.id,
					completed: false,
					text: action.text,
				}]),
			}
		case type.ADD_TODO_ERROR:
			return {
				...state,
				loading: action.loading,
				error: action.error
			}

		case type.EDIT_TODO:
			return {
				...state,
				loading: action.loading,
			}
		case type.EDIT_TODO_SUCCESS:
			return {
				...state,
				loading: action.loading,
				todos: state.todos.map((todo) => {
					return todo.id === action.id ? {
						...todo,
						text: action.text,
						completed: action.completed,
					} : todo
				})
			}
		case type.EDIT_TODO_ERROR:
			return {
				...state,
				loading: action.loading,
				error: action.error
			}

		case type.DELETE_TODO:
			return {
				...state,
				loading: action.loading,
			}
		case type.DELETE_TODO_SUCCESS:
			return {
				...state,
				loading: action.loading,
				todos: state.todos.filter((todo) => todo.id !== action.id)
			}
		case type.DELETE_TODO_ERROR:
			return {
				...state,
				loading: action.loading,
				error: action.error
			}

		case type.COMPLETE_TODO:
			return state.map((todo) => {
				return todo.id === action.id ? {
					...todo,
					completed: !todo.completed,
				} : todo
			})

		case type.COMPLETE_ALL_TODOS: {
			const areAllMarked = state.every((todo) => todo.completed)

			return state.map((todo) => ({
				...todo,
				completed: !areAllMarked,
			}))
		}

		case type.CLEAR_COMPLETED:
			return state.filter((todo) => todo.completed === false)

		default:
			return state
	}
}