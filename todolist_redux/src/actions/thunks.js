import * as actions from './index'
import * as APIConfig from '../constants/APIConfig'

export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(actions.requestTodos())

        return fetch(
            `${APIConfig.API_URI}/todos`,
            {
                method: 'GET',
                headers: APIConfig.HEADERS,
            },
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error - 404 Not Found')
                }
                return response.json()
            })
            .then((todos) => {
                dispatch(actions.requestTodosSuccess(todos))
            })
            .catch((error) => {
                console.log(error)
                dispatch(actions.requestTodosError(error))
            })
    }
}

export const fetchAddTodo = (text) => {
    return (dispatch) => {
        dispatch(actions.addTodo(text))

        return fetch(
            `${APIConfig.API_URI}/todos`,
            {
                method: 'POST',
                body: JSON.stringify({
                    text: text,
                    completed: false,
                }),
                headers: APIConfig.HEADERS,
            },
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error - 404 Not Found')
                }
                return response.json()
            })
            .then((response) => {
                dispatch(actions.addTodoSuccess(response.data.id, response.data.text))
            })
            .catch((error) => {
                console.log(error)
                dispatch(actions.addTodoError(error))
            })
    }
}

export const fetchEditTodo = (id, text, completed) => {
    return (dispatch) => {
        dispatch(actions.editTodo())
        return fetch(
            `${APIConfig.API_URI}/todos/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify({
                    text: text,
                    completed: completed
                    }),
                headers: APIConfig.HEADERS,
            },
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error - 404 Not Found')
                }
            })
            .then(() => {
                dispatch(actions.editTodoSuccess(id, text, completed))
            })
            .catch((error) => {
                console.log(error)
                dispatch(actions.editTodoError(error))
            })
    }
}

export const fetchDeleteTodo = (id) => {
    return (dispatch) => {
        dispatch(actions.deleteTodo())

        return fetch(
            `${APIConfig.API_URI}/todos/${id}`,
            {
                method: 'DELETE',
                headers: APIConfig.HEADERS,
            },
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error - 404 Not Found')
                }
            })
            .then(() => {
                dispatch(actions.deleteTodoSuccess(id))
            })
            .catch((error) => {
                console.log(error)
                dispatch(actions.deleteTodoError(error))
            })
    }
}
