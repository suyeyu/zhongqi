import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建store
const store = new Vuex.Store({
	state:{
		infoId:'',
		loginStatus:false,
		userInfo:{
			userId:"001",
			userName:"萧华",
			follow:10,
			fans:20,
			canUseMoney:121233.90,
			coldMoney:1212,
			bgpic:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508919335&di=5299f0c8fcd4be7c9127766a66657e2b&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd52a2834349b033b148a32f71ece36d3d539bd99.jpg",
			avatar:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2770691011,100164542&fm=27&gp=0.jpg"
		},
		newsInfo:{},//新闻对象
		videoInfo:{},
		imgInfo:{},
		IntegralInfo:{},
		goodsInfo:{},
		finshInfo:{}
	},
	mutations:{
		setInfoId(state,id){
			state.infoId = id;
			console.log(id);
		},
		setLoginStatus(state,status){
			state.loginStatus = status;
		},
		setUserInfo(state,info){
			state.userInfo = info;
		},
		setImgInfo(state,info){
			state.imgInfo = info;
		},
		setNewsInfo(state,info){
			state.newsInfo = info;
		},
		setVideoInfo(state,info){
			state.videoInfo = info;
		},
		setIntegralInfo(state,info){
			state.IntegralInfo = info;
		},
		setgoodsInfo(state,info){
			state.goodsInfo = info;
		},
		setfinshInfo(state,info){
			state.finshInfo = info;
		}
	},
	actions:{
		setInfoId({commit},id){
			commit('setInfoId',id);
		},
		setLoginStatus({commit},status){
			commit('setLoginStatus',status)
		},
		setUserInfo({commit},info){
			commit('setUserInfo',info)
		},
		setImgInfo({commit},info){
			commit('setImgInfo',info)
		},
		setNewsInfo({commit},info){
			commit('setNewsInfo',info)
		},
		setVideoInfo({commit},info){
			commit('setVideoInfo',info)
		},
		setIntegralInfo({commit},info){
			commit('setIntegralInfo',info)
		},
		setgoodsInfo({commit},info){
			commit('setgoodsInfo',info)
		},
		setfinshInfo({commit},info){
			commit('setfinshInfo',info)
		}
	},
	getters:{
		getInfoId(state){
			return state.infoId;
		},
		getLoginStatus(state){
			return state.loginStatus;
		},
		getUserInfo(state){
			return state.userInfo;
		},
		getImgInfo(state){
			return state.imgInfo;
		},
		getNewsInfo(state){
			return state.newsInfo;
		},
		getVideoInfo(state){
			return state.videoInfo;
		},
		getIntegralInfo(state){
			return state.IntegralInfo;
		},
		getgoodsInfo(state){
			return state.goodsInfo;
		},
		getfinshInfo(state){
			return state.finshInfo;
		}
	}	
})

export default store