/* eslint-disable */
export default {
  routing: Object,
  auth: {
    user: Object,
    isAuthenticated: Boolean,
    authError: Error
  },
  channels: {
    isLoading: Boolean,
    data: {
      [key]: {
        name: String
      }
    }
  },
  messages: {
    isLoading: Boolean,
    data: {
      [key]: {
        body: String,
        author: {
          name: String,
          avatarUrl: String
        }
      }
    }
  }
};
