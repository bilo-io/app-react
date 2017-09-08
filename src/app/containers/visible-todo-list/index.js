import { connect } from 'react-redux'
import { TodoList } from '../../components/todo/todo-list'

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList