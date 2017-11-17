import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		infoId:''
	},
	mutations:{
		setInfoId(state,id){
			state.infoId = id;
		}
	},
	actions:{
		setInfoId({commit},id){
			commit('setInfoId',id);
		}
	},
	getters:{
		getInfoId(state){
			return state.infoId;
		}
	}
})

export default store;