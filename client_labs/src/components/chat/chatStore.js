import Vue from 'vue'// so as to make HTTP calls in the method of actions
import {userListUrl, getHeader, getUserConversationUrl} from './../../config'// getHeader is imported so as to call http requests.
const state = {
  userList: {},
  currentChatUser: null,
  conversation: null
}

const mutations = {
  SET_USER_LIST (state, userList) {
    state.userList = userList
  },
  SET_CURRENT_CHAT_USER (state, user) {
    state.currentChatUser = user
  },
  SET_CONVERSATION (state, conversation) {
    console.log('here from mmutator', conversation)
    state.conversation = conversation
  }
}

const actions = {
  setUserList: ({commit}, userList) => {
    return Vue.http.get(userListUrl, {headers: getHeader()})// so as to
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          commit('SET_USER_LIST', response.body.data)
          return response.body.data
        }
      })
  },
  setCurrentChatUser: ({commit}, user) => {
    commit('SET_CURRENT_CHAT_USER', user)
    console.log('tstinfrom set current user')
    let postData = {id: user.id}
    return Vue.http.post(getUserConversationUrl, postData, {headers: getHeader()})
      .then(response => {
        console.log('from here')
        console.log(response.data)
        commit('SET_CURRENT_CHAT_USER', user)
        commit('SET_CONVERSATION', response.data)
      })
  }
}

export default {
  state, actions, mutations
}
