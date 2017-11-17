<template>
	<div id="userCenter" :style="{backgroundImage:'url('+userInfo.bgpic+')'}">
		<mt-header title="个人中心">
	  		<mt-button icon="back" slot="left" @click="$router.go(-1)">&nbsp;&nbsp;</mt-button>
	  		<router-link to="/" slot="right">
	    		<mt-button icon="settings" class="settings"></mt-button>
	  		</router-link>
		</mt-header>
		<div class="info_box clearfix">
			<div class="fl">
				<img :src="userInfo.avatar" class="avatar" alt="">
			</div>
			<div class="fl">
				<div class="user_name">{{userInfo.userName}}</div>
				<div>
					<span>关注 {{userInfo.follow}}</span>
					<span>粉丝 {{userInfo.fans}}</span>
				</div>
			</div>
		</div>
		<div class="menu_list">
			<ul class="menu_list clearfix">
				<li class="fl">
					<router-link to="/money">
						<div>
							<img src="../assets/subMoney.png" alt="">
						</div>
						<div>我的余额</div>
					</router-link>
				</li>
				<li class="fl">
					<router-link to="/integral">
						<div>
							<img src="../assets/score.png" alt="">
						</div>
						<div>我的积分</div>
					</router-link>
				</li>
				<li class="fl">
					<div>
						<img src="../assets/my_favorite.png" alt="">
					</div>
					<div>我的收藏</div>
				</li>
				<li class="fl">
					<div>
						<img src="../assets/my_msg.png" alt="">
					</div>
					<div>我的消息</div>
				</li>
			</ul>
		</div>
		
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">图片</mt-tab-item>
		  <mt-tab-item id="2">视频</mt-tab-item>
		  <mt-tab-item id="3">文章</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <div class="clearfix" v-for="i of Math.ceil(imageList.length/2)">
		    	<div class="fl w_50 r_10" :style="{height:divHeight+'px',width:divHeight+'px',backgroundImage:'url('+imageList[2*(i-1)].img+')'}">
		    		<span v-if="imageList[2*(i-1)].imgeList.length>0">组图{{imageList[2*(i-1)].imgeList.length}}张</span>
		    		<div class="p_b" v-if="imageList[2*(i-1)].needMoney">收费{{imageList[2*(i-1)].price}}元</div>
		    	</div>
		    	<div v-if="imageList[2*i-1].id != -1" class="fl w_50 l_10" :style="{height:divHeight+'px',width:divHeight+'px',backgroundImage:'url('+imageList[2*i-1].img+')'}">
		    		<span v-if="imageList[2*i-1].imgeList.length>0">组图{{imageList[2*(i-1)].imgeList.length}}张</span>
		    		<div class="p_b" v-if="imageList[2*i-1].needMoney">收费{{imageList[2*i-1].price}}元</div>
		    	</div>
		    </div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <table class="hot_table">
				<tr v-for="i of Math.ceil(videoList.length/2)">
					<td v-for="j of 2-videoList.length%2" @click="gotoDetail(videoList[2*i+j-3])">
						<div v-if="videoList[2*i+j-3].comment!=-1" class="bg_div" :style="{backgroundImage:'url('+videoList[2*i+j-3].pic+')'}">
							<div class="gray_bg">
								<span>{{videoList[2*i+j-3].author}}</span>
								<div class="fr">
									<b>{{videoList[2*i+j-3].comment}}</b>
									<b>{{videoList[2*i+j-3].favorite}}</b>
								</div>
								
							</div>
						</div>
						<div class="hot_title">
							{{videoList[2*i+j-3].title}}
						</div>
						<div class="type_time" v-if="videoList[2*i+j-3].comment!=-1">
							#{{videoList[2*i+j-3].type}}
							<span>
								{{new Date(videoList[2*i+j-3].time).format('MM-dd')}}
							</span>
						</div>
					</td>
				</tr>
			</table>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <section>
				<ul class="list_box">
					<li v-for="img in dataList" class="clearfix" @click="gotoDetail(img.id)">
						<div class="fl img_box">
							<img v-lazy="img.img" alt="">
						</div>
						<div class="fl intro_box">
							<div class="title_label">
								{{img.title}}
							</div>
							<div class="author_label">{{img.author}}</div>
							<div class="des_label">
								{{img.description}}
							</div>
							<div class="info_label">
								#{{img.type}}
								<div class="fr">
									<span class="comment">{{img.comment}}</span>
									<span class="favorite">{{img.favorite}}</span>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</section>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>
<script>
import slider from './sliderComponent.vue'
	export default{
		name:"userCenter",
		data(){
			return{
				selected:"1",
				videoList:[],
				imageList:[],
				dataList:[],
				hotList:[],
				divHeight:0,
			}
		},
		components:{slider},
		computed:{
			// 获取个人信息
			userInfo(){
				return this.$store.getters.getUserInfo;
			}
		},
		methods:{
			getData(){
				this.$http.get('./static/userImgData.json')
				.then(response=>{
					this.imageList = response.data.imgList;
					if (this.imageList.length%2!=0) {
						var obj={
							"id":"-1",
							"img":"static/homeImgs/hot_51.png",
							"title":"经典逆光人像速成技巧",
							"author":"李晓华",
							"description":"昨天借多久哦文件低价位机欧锦都二维",
							"type":"人像",
							"comment":10,
							"favorite":10,
							"needMoney":0,
							"price":0,
							"imgeList":[]
						}
						this.imageList.push(obj)
					}
				}),
				this.$http.get('./static/videoData.json')
				.then(response=>{
					this.videoList=response.data.videoList;
					if (this.videoList.length%2 != 0) {
						var obj = {
							"pic":"",
							"author":"",
							"title":"",
							"type":"",
							"time":"",
							"comment":-1,
							"favorite":-1
						}
						this.videoList.push(obj)
					}
					console.log(this.videoList[0].pic);
				})
			},
			getHomeList(){
				this.$http.get("./static/homeData.json")
				.then(response=>{
					console.log(response);
					this.dataList = response.data.dataList;
					this.hotList = response.data.hotList;
					if (this.hotList.length%2!=0) {
						var obj = {
							"id":"",
							"img":"",
							"title":"",
							"author":"",
							"description":"",
							"type":"",
							"comment":0,
							"favorite":0,
							"imgeList":[]
						}
						this.hotList.push(obj)
					}
				})
			},
			gotoDetail(info){
				this.$store.dispatch('setVideoInfo',info);
				this.$router.push({path:'/imageDetail/video'})
			},
			loadTop(){
				this.pageNo = 1;
				// 下拉刷新方法，重新获取数据
				this.getSliderData();
				this.getHomeList();

				setTimeout(()=>{
					// 恢复刷新控件
					this.$refs.loadmore.onTopLoaded();
				},2000)
				
			},
		},
		mounted(){
			var width = document.querySelector('.mint-tab-container-wrap').clientWidth-60;
			this.divHeight = width/2;
			console.log(this.divHeight)
		},
		created(){
			this.getData();
			this.getHomeList();
		}
	}
</script>
<style scoped>
	#userCenter{
		background-repeat: no-repeat;
		background-size: contain;
		/*padding:0 15px;*/
		/*background-color:#f5f5f5;*/
	}
	#userCenter .mint-header{
		background-color: transparent;
	}
	.settings{
		width: 30px;
		height: 30px;
		background: url(../assets/settings.png) no-repeat center;
	}
	.info_box{
		margin: 50px 0 50px;
		padding: 0 20px;
	}
	.avatar{
		width: 50px;
		border-radius: 50%;
		margin-right: 10px;
	}
	.user_name,.user_name+div{
		color: white;
	}
	.user_name{
		font-size: 18px;
		height: 25px;
		line-height: 25px;
	}
	.user_name+div{
		font-size: 14px;
		height: 25px;
		line-height: 25px;
	}
	div.menu_list{
		padding:0 20px;
	}
	ul.menu_list{
		padding: 20px 0;
		border-bottom: 1px solid #dddddd;
	}
	ul.menu_list li{
		width: 25%;
		padding-top: 20px;
	}
	ul.menu_list li div{
		text-align: center;
		font-size: 13px;
	}
	ul.menu_list li div img{
		width: 50px;
	}
	.mint-tab-item{
		color: #2d2d2d;
		font-size: 13px;
	}
	.mint-navbar .mint-tab-item.is-selected{
		color: rgb(242,150,0);
		border-bottom: none; 
		margin-bottom: 0;
		position: relative;
	}
	.is-selected:after{
		width: 60%;
		height: 2px;
		position: absolute;
		left: 20%;
		bottom: 0;
		content: '';
		background:rgb(242,150,0);
	}
	.mint-tab-container-item>div{
		margin-bottom: 20px;
	}
	.w_50{

		/*border: 1px solid red;*/
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		position: relative;
	}
	.w_50 span{
		position: absolute;
		right: 0;
		top: 5px;
		padding: 5px 5px;
		color: white;
		background-color: rgba(242,150,0,0.4);
		font-size: 10px;
	}
	.r_10{
		margin-right: 10px;
	}
	.l_10{
		margin-left: 10px;
	}
	.p_b{
		width: 100%;
		text-align: right;
		position: absolute;
		left: 0;
		bottom: 0;
		color:white;
		font-size: 11px;
		padding: 0 10px 5px 0;
	}
	.hot_table{
		width: 100%;
		background: rgb(250,250,250);
		border-spacing: 10px;
	}
	.hot_table td{
		width: 50%;
		/*background: rgb(250,250,250);*/
		background: white;
		padding: 0;
		padding-bottom: 5px;
		border:1px solid #f4f4f4;
	}
	.hot_table td>div{
		position: relative;
		width: 100%;
		text-align: left;
		color: #919191;
		background-color: white;
		margin: auto;
		padding: 0 5px;
	}
	.hot_table td div:first-child{
		padding: 0;
		height: 100px;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
	}
	.hot_table td div .gray_bg{
		height: 30px;
		line-height: 30px;
		background-color: rgba(0,0,0,.5);
		position: absolute;
		left: 0;
		bottom: 0;
		color:white;
		font-size: 12px;
		padding: 0 5px;
		width: 100%;
	}
	.list_box,.hot_box{
		width: 100%;
		background: rgb(250,250,250);
		margin-bottom: 0
		/*background: gray;*/
	}
	.list_box>li{
		width: 95%;
		margin: auto;
		margin-top: 10px;
		background: white;
		border:1px solid #f4f4f4;
		position: relative;
	}
	
	.img_box{
		width: 40%;
		position: relative;
		background-color: #bfbfbf;
	}
	.img_box>img{
		width: 100%;
		display: block;
	}
	.img_box:after{
		position: absolute;
		right: -4px;
		top: 5%;
		height: 90%;
		width: 4px;
		content: "";
		background: rgb(242,150,0);
	}
	.intro_box{
		width: 60%;
		padding: 0 15px;
		position: absolute;
    	top: 0px;
    	bottom: 0px;
    	right: 0;	
	}
	li>div.intro_box{
		color: rgb(154,154,154);
		text-align: left;
	}
	li>div.intro_box>div.title_label{
		color: rgb(45,45,45);
		font-size: 13px;
		margin-top: 10px;
	}
	li>div.intro_box>div.author_label{
		font-size: 11px;
		margin-top: 5px;
	}
	li>div.intro_box>div.des_label{
		font-size: 12px;
		margin-top: 10px;
	}
	li>div.intro_box>div.info_label{
		font-size: 11px;
		position: absolute;
		bottom: 5px;
		left: 15px;
		right: 15px;
		/*width:100%;*/
	}
</style>
<style>
	.mint-tab-container-wrap{
		background: #f5f5f5;
		padding: 20px;
	}
</style>