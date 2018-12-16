import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

// connect 的第二个参数是 mapDispatchToProps，它的功能是，将 action 作为 props 绑定到组件上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
      }
    }
  }
  
  // 连接React组件与 Redux store
  const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Link)
  
export default FilterLink
