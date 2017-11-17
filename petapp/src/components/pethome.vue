<template>
	<div id="pethome">
		<header>
			<input type="text" placeholder="搜索">
			<div class="question"></div>
		</header>
			<div>
				<mt-navbar v-model="selected">
				  	<mt-tab-item id="1">精选</mt-tab-item>
  					<mt-tab-item id="2">关注</mt-tab-item>
  					<mt-tab-item id="3">宠物资讯</mt-tab-item>
  					<mt-tab-item id="4">剧场</mt-tab-item>
				</mt-navbar>

				<!-- tab-container -->
				<mt-tab-container v-model="selected">
				  	<mt-tab-container-item id="1">
				    	<div class="action">
							<div class="aslide">活动</div>
				    	</div>
				    	<div class="">
				    		<ul>
				    			<li class="hot">推荐</li>
				    			<li class="sign">签到</li>
				    			<li class="list">榜单</li>
				    			<li class="answer">问答</li>
				    			<li class="guru">达人</li>
				    		</ul>
				    	</div>
				    	<section>
				    		<div v-for="item in dataList" >
				    			<div>
				    				<h3>{{item.title}}</h3>
				    				<div class="content">
				    					<img :src="item.img1" alt="" width="30%">
					    				<img :src="item.img2" alt="" width="30%">
					    				<img :src="item.img3" alt="" width="30%">
										<!-- <video :src="item.video" ></video> -->
					    			</div>
				    				<img :src="item.avatar" alt="" class="avatar">
				    				<span class="icon">
				    					<img src="src/assets/attention.png" alt="">
				    					<span>{{item.attention}}</span>
				    					<img src="src/assets/reward.png" alt="">
				    					<span>{{item.reward}}</span>
				    					<img src="src/assets/favourite.png" alt="">
				    					<span>{{item.favourite}}</span>
				    				</span>
				    			</div>
				    		</div>
				    	</section>
					</mt-tab-container-item>
					<mt-tab-container-item id="2">
					    <div>222222</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="3">
					    <div>33333</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="4">
					    <div>444</div>
					</mt-tab-container-item>
				</mt-tab-container>
			</div>
		<div class="blank">
			
		</div>
		<footer>
			<ul>
				<router-link to="/">
					<li>
						<img src="../assets/tab_cq@2x.png" alt="">
						<br>
						<span class="wordcol">宠圈</span>
					</li>
				</router-link>
				<router-link to="/shopping">
					<li>
					<img src="../assets/tab_sc@2x.png" alt="">
					<br>
					<span>商城</span>
				</li>
				</router-link>
				<li>
					<img src="../assets/tab_xj@2x.png" alt="" class="camera">
				</li>
				<router-link to="/service">
					<li>
						<img src="../assets/tab_fw@2x.png" alt="">
						<br>
						<span>服务</span>
					</li>
				</router-link>
				<router-link to="/mycenter">
					<li>
						<img src="../assets/tab_wd@2x.png" alt="">
						<br>
						<span>我的</span>
					</li>
				</router-link>
			</ul>
		</footer>
		
	</div>
</template>
	
<script>
	export default{
		name:"pethome",
		data(){
			return{
				selected:"1",
				dataList:'',
			}
		},
		methods:{
			getData(){
				this.$http.get('./static/pethome.json')
				.then(response=>{
					console.log(response);
					this.dataList = response.data.dataList;
					console.log(this.dataList);
				})
			},
		},
		created(){
			this.getData();
		}
	}
</script>

<style scoped>
	
	header input{
		width: 63%;
		margin-left: 20px;
		min-width: 150px;
		height: 30px;
		background-image: url(../assets/nav_ss@2x.png);
		background-repeat: no-repeat;
		background-size: 18px 18px;
		background-position: 10px 6px;
		padding-left:40px;
		color: rgb(102,102,102);
		font-size: 15px;
		font-weight: bolder;
	}
	header .question{
		width: 15%;
		height: 30px;
		background-image: url(../assets/nav_xx@2x.png);
		background-repeat: no-repeat;
		background-size: 20px 20px;
		background-position: 10px 6px;
		float: right;
		padding-left: 10px;
	}
	.mint-navbar a{
		text-decoration: none;
	}
	.mint-navbar .mint-tab-item{
		font-size: 14px;
		color: rgb(153,153,153);
	}
	.mint-navbar .mint-tab-item.is-selected{
		color: rgb(252,44,44);
		border-bottom: none; 
		margin-bottom: 0;
		position: relative;
	}
	.is-selected:after{
		width: 80%;
		height: 2px;
		position: absolute;
		left: 10%;
		bottom: 0;
		content: '';
		background:rgb(252,44,44);
	}
	.mint-tab-container .mint-tab-container-wrap .action{
		/*width: 100%;*/
		height: 200px;
		/*margin-top: 10px;*/
		background-image: url(../assets/action_img.jpg);
		background-repeat: no-repeat;
		background-size: 100% 200px;
	}
	.mint-tab-container .mint-tab-container-wrap .aslide{
		width: 20%;
		height: 20%;
		color: yellow;
		/*border: 1px solid red;*/
		background: rgba(276,173,95,0.4);
		border-radius: 30% 0 0 30%;
		font-size: 20px;
		font-weight: bolder;
		line-height: 200%;
		margin-top: 40px;
		float: right;
		text-align: center;
	}
	.mint-tab-container .mint-tab-container-wrap li{
		height: 70px;
		width:  19%;
		margin: 0;
		line-height: 110px;
		text-align: center;
	}
	.mint-tab-container .mint-tab-container-wrap .hot{
		background-image: url(../assets/hot.png);
		background-repeat: no-repeat;
		background-size: 35px 35px;
		background-position: 45% 5px;
		color: rgb(249,78,78);
		font-size: 14px;
	}
	.mint-tab-container .mint-tab-container-wrap .sign{
		background-image: url(../assets/sign.png);
		background-repeat: no-repeat;
		background-size:35px 35px;
		background-position: 45% 5px;
		color: #707070;
		font-size: 14px;
	}
	.mint-tab-container .mint-tab-container-wrap .list{
		background-image: url(../assets/list.png);
		background-repeat: no-repeat;
		background-size: 35px 35px;
		background-position: 45% 5px;
		color: rgb(249,78,78);
		font-size: 14px;
	}
	.mint-tab-container .mint-tab-container-wrap .answer{
		background-image: url(../assets/answer.png);
		background-repeat: no-repeat;
		background-size: 35px 35px;
		background-position: 45% 5px;
		color: #707070;
		font-size: 14px;
	}		
	.mint-tab-container .mint-tab-container-wrap .guru{
		background-image: url(../assets/guru.png);
		background-repeat: no-repeat;
		background-size: 35px 35px;
		background-position: 45% 5px;
		color: rgb(249,78,78);
		font-size: 14px;
	}
	section{
		width: 100%;
	}
	section h3{
		text-align: left;
		padding-left: 2%;
		margin: 25px 0 10px 0;
	}
	section .content{
		width: 100%;
		overflow: hidden;
	}
	section .avatar{
		width: 35px;
		border-radius: 50%;
		vertical-align: middle;
		margin: 20px 0 0 10px;
		text-align: left;
	}
	section .icon{
		float: right;
		padding: 22px;
		/*text-align: right;*/
	}
	section .icon img{
		width:  20px;
		margin-top: 5px;
	}
	section .icon span{
		padding-right: 15px;
	}
	.blank{
		height: 80px;
	}
	footer{
		position: fixed;
		width: 100%;
		bottom: 0;
		background: white;
	}
	footer ul{
		width: 100%;
		margin: 0;
		padding: 0;
		text-align: center;
	}
	footer li{
		margin: 0;
		padding: 0;
		width: 19%;
	}
	footer li img{
		width: 50%;
	}
	footer li .wordcol{
		color:#f94e4e
	}
	footer li .camera{
		width: 80%;
	}
	footer span{
		color: rgb(150,150,150);
		/*color:#f94e4e;*/
	}
</style>
<style>
	*{
		margin:0;
		padding: 0;
	}

</style>