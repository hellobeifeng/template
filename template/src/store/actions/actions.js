import notify from '../../components/notification/function'
import bus from '../../util/bus'
import { createError } from '../../util/util'
var createNum = function () {
  return Math.floor(Math.random() * 10)
}

const handleError = () => {
  // handle error
  notify({
    content: '你还得在登陆一下！'
  })
  bus.$emit('auth')
}

const fetchTodoData = [
  {id: 1, content: '101', completed: false},
  {id: 2, content: '102', completed: false}
]

function createTodo () {
  var id = createNum() + '' + createNum() + '' + createNum()
  return {
    id: id,
    content: 'lalal' + createNum(),
    completed: false
  }
}

export default {
  login ({ commit }, { username, password }) {
    commit('startLoading')
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (createNum() > 5) {
          commit('doLogin', {username: 'feng', password: '123'})
          notify({
            content: '登录成功'
          })
          resolve()
        } else {
          handleError(createError(400, 'no data'))
          reject(createError(400, 'no data'))
          commit('endLoading')
        }
      }, 1000)
    })
  },
  fetchTodos ({ commit }) {
    commit('startLoading')
    setTimeout(() => {
      commit('endLoading')
      commit('fillTodos', fetchTodoData)
    }, 1000)
  },
  addTodo ({ commit }, todo) {
    commit('startLoading')
    setTimeout(() => {
      commit('endLoading')
      commit('addTodo', createTodo())
      notify({
        content: '你又多了一件事要做'
      })
    }, 1000)
  },
  updateTodo ({ commit }, { id, todo }) {
    commit('startLoading')
    setTimeout(() => {
      commit('endLoading')
      commit('updateTodo', { id, todo: todo })
    }, 1000)
  },
  deleteTodo ({ commit }, id) {
    commit('startLoading')
    setTimeout(() => {
      commit('endLoading')
      commit('deleteTodo', id)
      notify({
        content: '你又少了一件事要做'
      })
    }, 1000)
  },
  deleteAllCompleted ({ commit, state }) {
    commit('startLoading')
    // const ids = state.todos.filter(t => t.completed).map(t => t.id)
    setTimeout(() => {
      commit('deleteAllCompleted')
      commit('endLoading')
      notify({
        content: '清理一下~~~'
      })
    }, 1000)
  }
}
