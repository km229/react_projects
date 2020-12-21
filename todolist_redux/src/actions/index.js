import * as types from '../constants/TodoActionTypes'

// GET /todos
export const requestTodos = () => ({
    type: types.REQUEST_TODOS,
    loading: true,
})
export const requestTodosSuccess = (todos) => ({
    type: types.REQUEST_TODOS_SUCCESS,
    loading: false,
    todos: todos,
})
export const requestTodosError = (error) => ({
    type: types.REQUEST_TODOS_ERROR,
    loading: false,
    error,
})

// POST /todos
export const addTodo = (text) => ({
    type: types.ADD_TODO,
    loading: true,
    text,
})
export const addTodoSuccess = (id, text) => ({
    type: types.ADD_TODO_SUCCESS,
    loading: false,
    id,
    text,
})
export const addTodoError = (error) => ({
    type: types.ADD_TODO_ERROR,
    loading: false,
    error,
})

// PUT /todos/:id
export const editTodo = () => ({
    type: types.EDIT_TODO,
    loading: true,
})
export const editTodoSuccess = (id, text, completed) => ({
    type: types.EDIT_TODO_SUCCESS,
    loading: false,
    id,
    text,
    completed,
})
export const editTodoError = (error) => ({
    type: types.EDIT_TODO_ERROR,
    loading: false,
    error,
})

// DELETE /todos/:id
export const deleteTodo = () => ({
    type: types.DELETE_TODO,
    loading: true,
})
export const deleteTodoSuccess = (id) => ({
    type: types.DELETE_TODO_SUCCESS,
    loading: false,
    id,
})
export const deleteTodoError = (error) => ({
    type: types.DELETE_TODO_ERROR,
    loading: false,
    error,
})

export const setVisibilityFilter = (filter) => ({
    type: types.SET_VISIBILITY_FILTER,
    filter
})

// Without API

// export const addTodo = (text) => ({
//     type: types.ADD_TODO,
//     text
// })
// export const deleteTodo = (id) => ({
//     type: types.DELETE_TODO,
//     id,
// })
// export const editTodo = (id, text) => ({
//     type: types.EDIT_TODO,
//     id,
//     text
// })
// export const completeTodo = (id) => ({
//     type: types.COMPLETE_TODO,
//     id,
// })
// export const completeAllTodos = () => ({
//     type: types.COMPLETE_ALL_TODOS,
// })
// export const clearCompleted = () => ({
//     type: types.CLEAR_COMPLETED,
// })
// export const setVisibilityFilter = (filter) => ({
//     type: types.SET_VISIBILITY_FILTER,
//     filter
// })

