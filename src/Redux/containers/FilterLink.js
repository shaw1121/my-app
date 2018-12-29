import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'
import Link from '../components/Link'

// FilterLink 得到当前过滤器并渲染 Link。
// filter: string 就是当前过滤的状态

// 指定如何把当前 Redux store state 映射到展示组件的 props 中
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
