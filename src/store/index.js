import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    text: '',
    score:''
  },
  mutations: {
    setText(state, text){
      state.text = text
    },
    setScore(state,score){
      state.score =score
    }
  },
  actions: {
    setText(context,text){
      context.commit('setText',text)
      console.log(text)
    },
    setScore(context,score){
      context.commit('setScore',score)
      
    }
  },
  modules: {
  }
})
