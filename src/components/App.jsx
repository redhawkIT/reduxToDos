import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Footer from './Footer'

import * as TodoActions from '../actions'

import AddTodo from './AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = ({actions}) => (
  <div>
    <AddTodo {...actions} />
    <VisibleTodoList/>
    <Footer/>
  </div>
)

// App.propTypes = {
//   todos: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// }

// Makes redux state available to App by props
const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  active: ownProps.filter === state.visibilityFilter
})

//
const mapDispatchToProps = (dispatch, ownProps) => ({
    // wraps actions creators with dispatch so they can be called directly
    actions: bindActionCreators(TodoActions, dispatch)
})

// connect() will automatically bind dispatch to your actions if they are
// passed in as an object of function names.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
