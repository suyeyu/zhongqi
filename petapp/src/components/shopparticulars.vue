<template>
	<div id="shopparticulars">
		<header>
			<div class="left"><img src="../assets/nav_fh@2x.png" alt="" @click="$router.go(-1)"></div>
			<input type="text" placeholder="搜索">
			<div class="shoping"></div>
		</header>
		<section>
			<div class="nav">
				<ul>
					<li class="originally" v-for="(item,index) in typeList" :class="{active:selected==index}" @click="selected=index">{{item}}</li>
				</ul>
				<ul>
					<!-- <router-link to="commodityDetails"> -->
					<li class="list" v-for="item in dataList" @click="getid(item.id)">
						<img :src="item.img" alt="">
						<b>{{item.title}}</b>
						<div>
							<b>￥{{item.price}}</b>
							<span class="comment">评论{{item.comment}}</span>
							<span class="sale">已售{{item.sale}}</span>
						</div>
					</li>
					<!-- </router-link> -->
				</ul>
			</div>
		</section>
	</div>
</template>
<script>
	export default{
		name:'shopparticulars',
		data(){
			return{
				typeList:[
					"综合",
					"销量",
					"价格",
					"筛选",
				],
				selected:0,
				dataList:'',
				detailList:''
			}
		},
		methods:{
			getDate(){
				this.$http.get('../static/shopparticulars.json')
				.then(response=>{
					// console.log(response);
					this.dataList = response.data.dataList;
					// console.log(response.data.dataList);
				})
			},
			getid(infoId){
				this.$store.dispatch('setInfoId',infoId);
				console.log(infoId);
				this.$router.push({path:'/commodityDetails'})
			}
		},
		created(){
			this.getDate();
		}
	}
</script>
<style scoped>
	header .left{
		display: inline-block;
		height: 30px;
		float: left;

	}
	header .left img{
		padding: 6px 5px;
		width: 10px;
		height: 22px;
	}
	header input{
		width: 50%;
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
	header .shoping{
		width: 15%;
		height: 30px;
		background-image: url(../assets/nav_gwc@2x.png);
		background-repeat: no-repeat;
		background-size: 20px 20px;
		background-position: 10px 6px;
		float: right;
		padding-left: 10px;
	}
	section .nav ul{
		margin:0;
		/*background:rgb(102,102,102);*/
	}
	section .nav .originally{
		color: rgb(102,102,102);
		position: relative;
		height: 50px;
		width: 24%;
		margin: 0;
		text-align: center;
		line-height: 50px;
		font-size: 16px;
	}
	section .nav li.active{
		color: red;
	}
	section .nav .list{
		width: 90%;
		height: 100px;
		padding-top: 10px;
		border-top: 1px solid rgb(182,182,182);
	}
	section .nav .list img{
		height: 80px;
		padding: 0 10px;
		float: left;
	}
	section .nav .list b{
		font-size: 14px;
		color: rgb(52,52,52);
	}
	section .nav .list div{
		margin-top: 20px;
	}
	section .nav .list div b{
		font-size: 14px;
		color: rgb(248,21,27);
	}
	section .nav .list div span{
		font-size: 10px;
		color:rgb(102,102,102 );      
	}
	section .nav .list div .comment{
		margin: 0 10px 0 30px;
	}
</style>