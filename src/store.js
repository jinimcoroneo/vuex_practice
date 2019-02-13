import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "My Custom Title",
    links: [
      'http://google.com',
      'http://facebook.com',
      'http://coolstuff.com'
    ]
  },

  // Define the name of the getter first, then pass in access to the state
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },

  mutations: {

  },
  actions: {

  }
})
