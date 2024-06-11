/*eslint-disable */
import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    count: 0,
    user_name:'superUser',
    lang:'en',
    theme:'light',
    openVisitModalVar: false,
    openLeadModalVar: false,
    openTaskModalVar: false,

  },
  mutations: {
    increment (state) {
      state.count++
    },
    changeLang(state){
        if(state.lang==='en'){
            state.lang='ar'
            console.log(state.lang)
           
        }else{
            state.lang='en'
            console.log(state.lang)
        }
    },
    changeTheme(state){
        if(state.theme==='light'){
            state.theme='dark'
        }else{
            state.theme='light'
        }
    },
    openVisitModal(state){
      state.openVisitModalVar= !state.openVisitModalVar
    },
    openLeadModal(state){
      state.openLeadModalVar= !state.openLeadModalVar
    },
    openTaskModal(state){
      state.openTaskModalVar= !state.openTaskModalVar
    },
  }
})
