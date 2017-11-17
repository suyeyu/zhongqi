<template>
	<div id="newsList">
		<mt-header title="资讯杂谈">
	  		<mt-button icon="back" slot="left" @click="$router.go(-1)">&nbsp;&nbsp;</mt-button>
	  		<router-link to="/" slot="right">
	    		<mt-button icon="search" class="search"></mt-button>
	  		</router-link>
		</mt-header>
		<slider type="news"></slider>
		<div style="height:38px;overflow-y:hidden">
			<div class="fl menu_box">
				<!-- <ul class="clearfix segment" :style="{width:70*typeList.length+'px'}">
					<li class="fl segment_item" v-for="(item,index) in typeList" :class="{active:selected==index}" @click="selected=index">{{item}}</li>
				</ul> -->
				<mt-navbar v-model="selected">
				  	<mt-tab-item id="1">热门</mt-tab-item>
  					<mt-tab-item id="2">人文</mt-tab-item>
  					<mt-tab-item id="3">科技</mt-tab-item>
  					<mt-tab-item id="4">军事</mt-tab-item>
  					<mt-tab-item id="5">娱乐</mt-tab-item>
				</mt-navbar>
			</div>
			
		</div>
		<section>
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<ul class="list_box">
						<li v-for="news in dataList" class="clearfix" @click="gotoDetail(news)">
							<div class="fl img_box">
								<img v-lazy="news.img" alt="">
							</div>
							<div class="fl intro_box">
								<div class="title_label">
									{{news.title}}
								</div>
								<div class="author_label">{{news.author}}</div>
								<div class="info_label">
									#{{news.type}}
									<div class="fr">
										<span class="comment">{{news.comment}}</span>
										<span class="favorite">{{news.favorite}}</span>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<ul class="list_box">
						<li v-for="news in humanityList" class="clearfix" @click="gotohumanity(news)">
							<div class="fl img_box">
								<img v-lazy="news.img" alt="">
							</div>
							<div class="fl intro_box">
								<div class="title_label">
									{{news.title}}
								</div>
								<div class="author_label">{{news.author}}</div>
								<div class="info_label">
									#{{news.type}}
									<div class="fr">
										<span class="comment">{{news.comment}}</span>
										<span class="favorite">{{news.favorite}}</span>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<ul class="list_box">
						<li v-for="news in scienceList" class="clearfix" @click="gotoscience(news)">
							<div class="fl img_box">
								<img v-lazy="news.img" alt="">
							</div>
							<div class="fl intro_box">
								<div class="title_label">
									{{news.title}}
								</div>
								<div class="author_label">{{news.author}}</div>
								<div class="info_label">
									#{{news.type}}
									<div class="fr">
										<span class="comment">{{news.comment}}</span>
										<span class="favorite">{{news.favorite}}</span>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="4">
					<ul class="list_box">
						<li v-for="news in militaryList" class="clearfix" @click="gotomilitary(news)">
							<div class="fl img_box">
								<img v-lazy="news.img" alt="">
							</div>
							<div class="fl intro_box">
								<div class="title_label">
									{{news.title}}
								</div>
								<div class="author_label">{{news.author}}</div>
								<div class="info_label">
									#{{news.type}}
									<div class="fr">
										<span class="comment">{{news.comment}}</span>
										<span class="favorite">{{news.favorite}}</span>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="5">
					<ul class="list_box">
						<li v-for="news in entertainmentList" class="clearfix" @click="gotoentertainment(news)">
							<div class="fl img_box">
								<img v-lazy="news.img" alt="">
							</div>
							<div class="fl intro_box">
								<div class="title_label">
									{{news.title}}
								</div>
								<div class="author_label">{{news.author}}</div>
								<div class="info_label">
									#{{news.type}}
									<div class="fr">
										<span class="comment">{{news.comment}}</span>
										<span class="favorite">{{news.favorite}}</span>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</mt-tab-container-item>
			</mt-tab-container>
		</section>
	</div>
</template>
<script>
	import slider from './sliderComponent.vue'
	export default{
		name:"newsList",
		data(){
			return{
				selected:"1",
				dataList:[],
				humanityList:[],
				scienceList:[],
				militaryList:[],
				entertainmentList:[]
			}
		},
		components:{slider},
		methods:{
			getData(){
				this.$http.get("./static/newsList.json")
				.then(response=>{
					console.log(response);
					this.dataList = response.data.data.newsList;
					this.humanityList= response.data.data.humanityList;
					this.scienceList = response.data.data.scienceList;
					this.militaryList= response.data.data.militaryList;
					this.entertainmentList = response.data.data.entertainmentList;
				})
			},
			gotoDetail(info){
				// this.$store.dispatch('setInfoId',infoId);
				this.$store.dispatch('setNewsInfo',info);
				this.$router.push({path:'/imageDetail/news'})
			},
			gotohumanity(info){
				this.$store.dispatch('setNewsInfo',info);
				this.$router.push({path:'/imageDetail/news'})
			},
			gotoscience(info){
				this.$store.dispatch('setNewsInfo',info);
				this.$router.push({path:'/imageDetail/news'})
			},
			gotomilitary(info){
				this.$store.dispatch('setNewsInfo',info);
				this.$router.push({path:'/imageDetail/news'})
			},
			gotoentertainment(info){
				this.$store.dispatch('setNewsInfo',info);
				this.$router.push({path:'/imageDetail/news'})
			}
		},
		created(){
			this.getData();
		}
	}
</script>
<style scoped="">
	.menu_box{
		width: 100%;
		height: 55px;
		overflow-x: auto;
		margin: 0;
	}
	.segment_item{
		width: 70px;
		text-align: center;
		font-size: 13px;
		color: #2d2d2d;
		padding: 10px 0;
		position: relative;
	}
	.mint-navbar .is-selected{
		color: rgb(252,44,44);
	}
	.mint-tab-item .mint-tab-item-label{
		text-align: center;
	}
	.active:after{
		width: 80%;
		height: 1px;
		position: absolute;
		left: 10%;
		bottom: 0;
		content: '';
		background:rgb(242,150,0);
	}
	.right_arrow{
		width: 10%;
		margin: 0;
		height: 37px;
		background: url(../assets/arrow_right.png) no-repeat center;
		background-size: 20px;
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
	.comment{
		padding-left: 20px;
		background: url(../assets/comment.png) no-repeat left center; 
		background-size: 20px 20px;
	}
	.favorite{
		padding-left: 20px;
		background: url(../assets/favorite.png) no-repeat left center;
		background-size: 20px 20px;
	}
</style> 