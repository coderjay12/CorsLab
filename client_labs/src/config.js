export const apiDomain = 'http://localhost:8000/'
export const loginUrl = apiDomain + 'oauth/token'
export const userUrl = apiDomain + 'api/user'
export const userListUrl = apiDomain + 'api/v1/user-list'
export const getUserConversationUrl = apiDomain + 'api/v1/get-user-conversation'
export const saveChatMessageUrl = apiDomain + 'api/v1/chat-save'
export const getUserPrivateMessages = apiDomain + 'api/v1/get-private-messages'
export const getUserPrivateMessagesSent = apiDomain + 'api/v1/get-private-messages-sent'
export const getPrivateMessageById = apiDomain + 'api/v1/get-private-message'
export const sendPrivateMessage = apiDomain + 'api/v1/send-private-message'

export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
  const headers = {
    'accept': 'application/json',
    'Authorization': 'Bearer ' + tokenData.access_token
  }

  return headers
}
