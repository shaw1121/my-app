import React from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../actions'

// 在一些非常小的组件里可以混用容器和展示

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()

          // 若为空，则返回
          if (!input.value.trim()) {
            return
          }

          // 不为空，分发actions
          dispatch(addToDo(input.value))

          input.value = ''
        }}
      >

        {/* // ref 属性： https://react.docschina.org/docs/refs-and-the-dom.html */}
        <input ref={node => {
            input = node
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

// 只注入 dispatch，不监听 store
// 如果省略 mapDispatchToProps 参数，
// 默认情况下，dispatch 会注入到你的组件 props 中
AddTodo = connect()(AddTodo)

export default AddTodo