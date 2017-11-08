import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://images.moviepilot.com/images/c_limit,q_auto:good,w_600/m5xa5ajsxsflc2gbdy6k/shrek-credit-dreamworks-pictures.jpg', id: 'aa121', title: 'New York', date: new Date(), location: 'New york', description: 'New york city' },
      { imageUrl: 'http://www.nanook-world.com/wp-content/uploads/2011/12/shrek32.jpg', id: 'aa122', title: 'Los angeles', date: new Date(), location: 'Location', description: 'Los angeles city' }

    ],
    user: null
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    createMeetup({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'img1'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    },
    signUserUP({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
    },
    signUserIn({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
    }
  },
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
    },
    user(state) {
      return state.user
    }
  }
})
