<template>
	<div id="integralshop">
		<mt-header title="积分商城">
	  		<mt-button icon="back" slot="left" @click="gotohome()">&nbsp;&nbsp;</mt-button>
	  		<router-link to="/" slot="right">
	    		<mt-button icon="search" class="search"></mt-button>
	  		</router-link>
		</mt-header>
		<mt-swipe :auto="4000" >
			<mt-swipe-item><img src="../assets/score_bg.png"></mt-swipe-item>
			<mt-swipe-item><img src="../assets/money_bg.png"></mt-swipe-item>
			<mt-swipe-item><img src="../assets/husky3.jpg"></mt-swipe-item>
		</mt-swipe>
		<nav>
			<ul>
				<li>
					<router-link to="/costume">
						<img src="../assets/costume.png" alt="">
						<br>服装箱包
					</router-link>
				</li>
				<li>
					<router-link to="/makeup">
						<img src="../assets/makeup.png" alt="">
						<br>美妆洗护
					</router-link>
				</li>
				<li>
					<router-link to="/office">
						<img src="../assets/office.png" alt="">
						<br>办公配件
					</router-link>
				</li>
				<li>
					<router-link to="/numeral">
						<img src="../assets/numeral.png" alt="">
						<br>数码家居
					</router-link>
				</li>
				<li>
					<router-link to="/doll">
						<img src="../assets/doll.png" alt="">
						<br>玩偶饰品
					</router-link>
					
				</li>
				<li>
					<router-link to="/record">
						<img src="../assets/record.png" alt="">
						<br>兑换记录
					</router-link>
				</li>
			</ul>
		</nav>
		<section>
			<h4>精品推荐</h4>
			<div class="list">
				<ul>
					<li v-for="item in dataList" @click="gotoDetail(item)">
						<img   v-lazy="item.pic" alt="">
						<h5>{{item.title}}</h5>
						<div class="integral">{{item.integral}}积分</div>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>
<script>
	export default{
		name:"integralshop",
		data(){
			return{
			dataList:[],
			}
		},
		methods:{
			gotohome(){
				this.$router.push({path:'/homepage'})
			},
			getData(){
				this.$http.get('./static/integralshop.json')
				.then(response=>{
					this.dataList = response.data.dataList;
				})
			},
			gotoDetail(info){
				this.$store.dispatch('setIntegralInfo',info);
				// console.log(info);
				this.$router.push({path:'/merchandise'});
			}
		},
		created(){
			this.getData();
		}
	}
	
</script>
<style scoped>
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
	nav ul{
		margin: 10px 0 10px 0;
	}
	nav li{
		width: 33%;
		margin: 20px 0 10px 0 ;
		text-align: center;
		font-size:9px;
		color: rgb(153,153,153); 
		float: left;
	}
	nav li img{
		width: 20%;
	}
	section h4{
		margin-top: 180px;
		margin-left: 5%;
	}
	section .list{
		margin-left: 5%;
		overflow: hidden;
	}
	section .list li{
		width: 50%;
		float: left;
		/*text-align: center;*/
		/*clear: both;*/
	}
	section .list li img{
		width: 100%;
		padding-right: 10%;
	}
	section .list li h5{
		margin: 8px 0;
	}
	section .list li .integral{
		font-size: 13px;
		color: rgb(242,150,0);
		font-weight: bolder;
		margin-bottom: 20px;
	}
</style>