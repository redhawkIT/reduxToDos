import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as TodoActions from '../actions'
import { setVisibilityFilter } from '../actions'

import Footer from '../components/Footer'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'


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


const App = ({actions, todos, setVisibilityFilter, active}) => (
  <div>
    <AddTodo {...actions} />
    <TodoList toggleTodo={actions.toggleTodo} todos={todos}/>
    <Footer setVisibilityFilter={setVisibilityFilter} active={active}/>
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

// Makes redux state available to App by props
const mapStateToProps = (state, ownProps) => {
  console.log( state)
  return ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    active: state.visibilityFilter
  })
}

//
const mapDispatchToProps = (dispatch) => ({
    // wraps actions creators with dispatch so they can be called directly
    actions: bindActionCreators(TodoActions, dispatch),
    setVisibilityFilter: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }

})

// connect() will automatically bind dispatch to your actions if they are
// passed in as an object of function names.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
