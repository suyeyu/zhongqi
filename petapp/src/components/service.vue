<template>
	<div id="service">
		<header>
			<div class="address">扬州市邗江区</div>
			<div>
				<input type="text" placeholder="搜索">
			</div>
		</header>
		<section>
			<div>
				<mt-swipe :auto="4000" >
					<mt-swipe-item><img src="../assets/service1.jpg"></mt-swipe-item>
					<mt-swipe-item><img src="../assets/service2.jpg"></mt-swipe-item>
					<mt-swipe-item><img src="../assets/service3.jpg"></mt-swipe-item>
				</mt-swipe>
			</div>
			<div>
				<mt-navbar v-model="selected">
					<mt-tab-item id="1">宠物店</mt-tab-item>
	  				<mt-tab-item id="2">医疗</mt-tab-item>
	  			</mt-navbar>
				<mt-tab-container v-model="selected">
					<mt-tab-container-item id="1">
						<div v-for="item in serviceList" class="list">
							<div class="main">
								<img :src="item.img" alt="">
								<b>{{item.name}}</b><br>
								<div class="address">
									<span>{{item.address}}</span>
									<span class="sale">已售{{item.sale}}</span>
								</div>
							</div>
							<div class="activity">
								{{item.activity}}
							</div>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="2">
						<div>222222</div>
					</mt-tab-container-item>
				</mt-tab-container>
			</div>
			
		</section>
			
		<div class="blank"></div>
		<footer>
			<ul>
				<router-link to="/">
					<li>
						<img src="../assets/111@2x.png" alt="">
						<br>
						<span>宠圈</span>
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
						<img src="../assets/523b568cde4ae5fa3f60d128d7d678ec@2x.png" alt="">
						<br>
						<span class="wordcol">服务</span>
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
		name:"service",
		data(){
			return{
				selected:"1",
				serviceList:[],
			}
		},
		methods:{
			getData(){
				this.$http.get('./static/service.json')
				.then(response=>{
					this.serviceList = response.data.serviceList;

				})
			}
		},
		created(){
			this.getData();
		}
	}
</script>
<style scoped>
	header .address{
		margin: 10px 0 10px 15px;
		font-size: 13px;
		color: rgb(102,102,102);
	}
	header input{
		width: 77%;
		margin-left: 15px;
		margin-bottom: 10px;
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
	.mint-swipe{
		margin-top:20px; 
		height: 250px;
		width: 100%;
		margin: auto;
	}
	.mint-swipe-items-wrap .mint-swipe-item img{
		width: 100%;
		height: 250px
	}
	.mint-tab-container-item section{
		width: 90%;
		margin: auto;
	}
	.mint-navbar{
		width: 40%;
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
	.mint-tab-container-item .list{
		margin: 10px 0 0 10px;
		width: 100%;
		height: 140px;
		border-bottom: 7px solid rgb(202,202,202)
	} 
	.mint-tab-container-item .list .main{
		height: 105px;
		border-bottom: 1px dashed rgb(162,162,162);
	}
	.mint-tab-container-item .list .main img{
		width: 35%;
		float: left;
	}
	.mint-tab-container-item .list .main b{
		margin:10px 0 0 10px;
		color: rgb(52,52,52);
		font-size: 15px;
	}
	.mint-tab-container-item .list .main .address{
		width: 60%;
		float: left;
		margin:55px 0 0 10px;
		color: rgb(102,102,102);
		font-size: 11px;
	}
	.mint-tab-container-item .list .main .address .sale{
		float: right;
		margin-right: 15px;
	}
	.mint-tab-container-item .list .activity{
		height: 40px;
		width: 100%;
		line-height: 30px;
		float: left;
		padding-left: 33px;
		font-size: 15px;
		background-image: url(../assets/discount1.png);
		background-size: 20px;
		background-position: 5px 3px;
		background-repeat: no-repeat;
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
	footer li .camera{
		width: 80%;
	}
	footer li .wordcol{
		color:#f94e4e
	}
	footer span{
		color: rgb(150,150,150);
		/*color:#f94e4e;*/
	}
</style>