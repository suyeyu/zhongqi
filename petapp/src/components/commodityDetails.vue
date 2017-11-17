<template>
	<div id="commodityDetails" :class="{noscroll:buy}">
		<header>
			<div class="left">
				<img src="../assets/nav_fh@2x.png" alt="" @click="$router.go(-1)">
			</div>
			<mt-navbar v-model="selected">
				<mt-tab-item id="1">商品</mt-tab-item>
  				<mt-tab-item id="2">详情</mt-tab-item>
  				<mt-tab-item id="3">评价</mt-tab-item>
			</mt-navbar>
			<div class="shoping"></div>
		</header>
		<mt-tab-container v-model="selected">
				  	<mt-tab-container-item id="1">
				    	<mt-swipe :auto="4000" >
						    <mt-swipe-item><img v-lazy="shopList.img4"></mt-swipe-item>
						    <mt-swipe-item><img v-lazy="shopList.img2"></mt-swipe-item>
						    <mt-swipe-item><img v-lazy="shopList.img3"></mt-swipe-item>
						    <mt-swipe-item><img v-lazy="shopList.img1"></mt-swipe-item>
						</mt-swipe>
						<section>
							<div class="title">{{shopList.title}}</div>
							<b class="price">￥{{shopList.price}}</b>
							<br>
							<div class="sale">
								已售&nbsp;{{shopList.sale}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;地址:{{shopList.address}}
							</div>
							<div class="service">
								<div><img src="../assets/zheng.png" alt="">正品保证</div>
								<div><img src="../assets/mian.png" alt="">满99元免运费</div>
								<div><img src="../assets/tui.png" alt="">7天无忧退换</div>
							</div>
							<div class="comment" v-for="item in comments">
								<ul>
									<li>
										<div class="avatar">
											<img v-lazy="item.avatar">
										</div>
										<div class="details">
											<div class="author">{{item.author}}</div>
											<span>{{item.time}}</span>
											<div class="content">{{item.content}}</div>
										</div>
									</li>
								</ul>
							</div>
							<div class="shop">
								<div>
									<div class="shoplogo"></div>
									<div class="shopname">{{shopList.shopname}}</div>
								</div>
									<ul>
										<li>
											{{shopList.all_goods}}
											<br>
											<span>全部商品</span>
										</li>
										<li>
											{{shopList.Promotional_merchandise}}
											<br>
											<span>促销商品</span>
										</li>
										<li>
											{{shopList.attion_number}}
											<br>
											<span>关注人数</span>
										</li>
									</ul>

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
		<div class="blank"></div>		
		<footer>
			<div class="service">
				<img src="../assets/service.png" alt="">
				<br>
				客服
			</div>
			<div class="college">
				<img src="../assets/college.png" alt="" >
				<br>
				收藏
			</div>
			<div class="once_buy" @click="buy1=true">立刻购买</div>
			<div class="join_cart" @click="buy2=true">加入购物车</div>
		</footer>
		<div class="cart1" v-if="buy1">
			<div class="shopcart">
				<div class="clearfix" @click="buy1=false">x</div>
				<div class="merchandise">
					<img v-lazy="shopList.img" alt="">
					<div class="price">￥{{shopList.price}}</div>
					<br>
					<div class="sale">
						已售&nbsp;{{shopList.sale}}
					</div>
					<div class="number">
						<b>购买数量</b>
						<span @click="number++" class="add">+</span>
						<input type="text" v-model="number">
						<span @click="number=number>1?--number:1" class="subtraction">-</span>
					</div>
					<div class="qd"><input type="text" value="确   定" readonly class="qd"></div>
				</div>
			</div>
		</div>
		<div class="cart2" v-if="buy2">
			<div class="shopcart">
				<div class="clearfix" @click="buy2=false">x</div>
				<div class="merchandise">
					<img v-lazy="shopList.img" alt="">
					<div class="price">￥{{shopList.price}}</div>
					<br>
					<div class="sale">
						已售&nbsp;{{shopList.sale}}
					</div>
					<div class="number">
						<b>购买数量</b>
						<span @click="number++" class="add">+</span>
						<input type="text" v-model="number">
						<span @click="number=number>1?--number:1" class="subtraction">-</span>
					</div>
					<div class="qd"><input type="text" value="确   定" readonly class="qd"></div>
					
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'commodityDetails',
		data(){
			return{
				selected:"1",
				shopList:{},
				imgList:[],
				comments:[],
				liang:0,
				buy1:false,
				buy2:false,
				number:1,
			}
		},
		methods:{
			getid(){
				this.$http.get('./static/shopList.json?id='+this.infoId)
				.then(response=>{
					console.log(response);
					this.shopList = response.data.data;
					this.imgList = response.data.data.commodityDetails;
					this.comments = response.data.data.commentList;
					// this.liang = response.data.data.liang
				})
			}
		},
		computed:{
			infoId:function(){
				return this.$store.getters.getInfoId;
			},
		},
		created(){
			// this.liang = this.shopList.liang;
			this.getid();
		}
	}
</script>
<style scoped>
	header{
		width: 100%;
		height: 50px;
	}
	header .left{
		display: inline-block;
		height: 30px;
		float: left;
	}
	header .left img{
		padding: 15px 16px;
		width: 10px;
		height: 22px;
	}
	.mint-navbar{
		width: 60%;
		float: left;
	}
	header .shoping{
		width: 15%;
		margin:10px 0px;
		height: 30px;
		background-image: url(../assets/nav_gwc@2x.png);
		background-repeat: no-repeat;
		background-size: 20px 20px;
		background-position: 10px 6px;
		float: left;
		padding-left: 10px;
	}
	.mint-swipe{
		height: 300px;
		width: 90%;
		margin: auto;
	}
	.mint-swipe-items-wrap .mint-swipe-item img{
		width: 100%;
		height: 300px
	}
	.mint-tab-container-item section{
		width: 90%;
		margin: auto;
	}
	.mint-tab-container-item .title{
		margin: 15px 0;
	}
	.mint-tab-container-item .price{
		color:rgb(247,90,76); 
	}
	section .sale{
		padding: 5px 0 10px 0;
		color: rgb(176,176,176);
		font-size: 13px;
	}
	section .service{
		margin-top: 10px;
		padding-top: 10px;
		background: rgb(220,220,220);
	}
	section .service div{
		display:inline-block;
		vertical-align:middle;
		padding: 0 5px;
	}
	section .service img{
		width: 17px;
		float: left;
		padding-bottom: 10px
	}
	section .comment{
		/*padding: 10px;*/
	}
	section .comment li{
		width:100%;
		padding: 10px;
		border-bottom: 1px dotted #dcdcdc;
		position: relative;
	}
	section .comment .avatar{
		float: left;
		width: 25%;
		height: 100%;
	}
	section .comment .avatar img{
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}
	section .comment .details{
		float: left;
		height: 60px;
		width: 70%;
	}
	section .comment .details .author{
		height: 15px;
		color: #2d2d2d;
		font-size: 15px;
	}
	section .comment .details span{
		font-size: 13px;
		color:  rgb(160,160,160);
	}
	section .comment .details .content{
		height: 20px;
		padding-top: 5px;
		font-size: 16px;
	}
	section .shoplogo{
		display: inline-block;
		width: 35%;
		height: 28px;
		background-image: url(../assets/shoplogo1.png);
		background-repeat: no-repeat;
		background-size: 80% 100px;
		background-position: 10px -27px;
		/*border: 1px solid red;*/
	}
	section .shopname{
		display: inline-block;
		width: 60%;
		height: 30px;
		vertical-align:middle;
		font-weight: bolder;
	}
	section .shop{
		border-top: 5px solid rgb(220,220,220);
		border-bottom: 5px solid rgb(220,220,220);
	}
	section .shop li{
		margin: 0;
		padding: 0;
		width: 30%;
		text-align: center;
	}
	section .shop li span{
		font-size: 12px;
		color: rgb(130,130,130);
	}
	.blank{
		height: 60px;
	}
	footer {
		position: fixed;
		width: 100%;
		bottom: 0;
		background: white; 
	}
	footer div{
		display: inline-block;
		text-align: center;
	}
	footer .service{
		float: left;
		width: 15%;
		font-size: 11px;
	}
	footer .service img{
		width: 25px;
	}
	footer .college{
		float: left;
		width: 15%;
		font-size: 11px;
	}
	footer .college img{
		width: 25px;
	}
	
	footer .once_buy{
		height: 50px;
		font-weight: bolder;
		width: 33%;
		height: 50px;
		line-height: 50px;
		font-size: 14px;
	}
	footer .join_cart{
		width: 33%;
		height: 50px;
		background: rgb(284,106,79);
		color: white;
		font-weight: bold;
		line-height: 50px;
		font-size: 14px;
	}
	.cart1{
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		background: rgba(0,0,0,.5);
	}
	.cart2{
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		background: rgba(0,0,0,.5);
	}
	.shopcart{
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 250px;
		margin-bottom: 0;
		background: white;
	}
	.clearfix{
		float: right;
		width: 5%;
		height: 39px;
		font-size: 25px;
		color: rgb(142,142,142);
	}
	.merchandise img{
		float:left;
		width: 110px;
		margin: 10px 0 0 10px;
		border: 1px solid rgb(211,211,211);
	}
	.merchandise .price{
		display: inline-block;
		margin: 60px 0 5px 25px;
		color: rgb(247,90,76);
		font-weight: bolder;
	}
	.merchandise .sale{
		display: inline-block;
		margin: 0px 0 0px 25px;
		font-size: 13px;
		color: rgb(136,136,136);
	}
	.merchandise .number{
		margin-top: 35px;
		padding-top:15px;
		padding-bottom:35px;
		padding-left: 10px; 
		border-top: 1px solid rgb(219,219,219);
		border-bottom: 1px solid rgb(219,219,219);
		font-size: 15px;
	}
	.merchandise .number span{
		font-size: 20px;
	}
    .merchandise .number .subtraction{
    	margin-right: 3px;
    	float: right;
    	width: 23px;
    	text-align: center;
    	border: 1px solid rgb(169,169,169);
    }
    .merchandise .number .add{
    	margin-right: 20px;
    	margin-left: 3px;
    	float: right;
		width: 23px;
    	text-align: center;
    	border: 1px solid rgb(169,169,169);
    }
    .merchandise .number input{
    	float: right;
    	width: 40px;
    	height: 20px;
    	text-align: center;
    }
    .merchandise .qd{
    	text-align: center;
    }
    .merchandise .qd input{
		margin:5px auto;
    	text-align: center;
    	font-size: 14px;
    	color: white;
    	width: 180px;
    	height: 25px;
    	border-radius:10px;
    	background: rgb(247,90,76);
    }


</style>