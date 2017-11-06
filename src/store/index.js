import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfwmmfH8xtrnKOZVOzHCNORPhJyolNMEoZ9Dyf_-bKxbRaS_a', id: 'aa121', title: 'New York', date: '2017-07-17' },
      { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzWGs3FsToRxhxBELl6ircByi6HP8nJzE2XyyFpkqTr3N5yot4Pw', id: 'aa122', title: 'Los angeles', date: '2017-07-17' }

    ],
    user: {
      id: 'aaa111',
      registeredMeetups: ['aa122']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },

    loadedMeetup(state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
