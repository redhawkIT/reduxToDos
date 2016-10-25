import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Footer from './Footer'

import * as TodoActions from '../actions'

import AddTodo from './AddTodo'
import TodoList from './TodoList'


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}


const App = ({actions, todos}) => (
  <div>
    <AddTodo {...actions} />
    <TodoList {...actions} todos={todos}/>
    <Footer/>
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

// Makes redux state available to App by props
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

//
const mapDispatchToProps = (dispatch) => ({
    // wraps actions creators with dispatch so they can be called directly
    actions: bindActionCreators(TodoActions, dispatch)
})

// connect() will automatically bind dispatch to your actions if they are
// passed in as an object of function names.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
