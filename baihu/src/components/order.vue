<template>
	<div id="order">
		<mt-header title="提交订单">
	  		<mt-button icon="back" slot="left" @click="$router.go(-1)">&nbsp;&nbsp;</mt-button>
	  		<router-link to="/" slot="right">
	    	</router-link>
		</mt-header>
		<section>
			<div v-for="item in addressList" >
				<div class="a1">
					<span class="name">{{item.name}}</span> 
					<span class="tel">{{item.tel}}</span>
					<div class="address">{{item.address}}</div>
				</div>
			</div>
			<div class="order">
				<img :src="orderList.pic" alt="" width=40%>
				<b class="title">{{orderList.title}}</b>
				<br>
				<span class="color">颜色：{{orderList.color}}</span>
				<br>
				<div class="integral">${{orderList.integral}}积分</div>
			</div>

		</section>
		<footer @click="gotoDetail(orderList)">
			<router-link to="/finsh">
				<div>提&nbsp;交&nbsp;订&nbsp;单</div>
			</router-link>
		</footer>
	</div>
</template>
<script>
	export default{
		name:"order",
		data(){
			return{
				orderList:{},
				addressList:[],
			}
		},
		methods:{
			getData(){
				this.$http.get('./static/address.json')
				.then(response=>{
					this.addressList = response.data.addressList;
					// console.log(response);
				})
			},
			gotoDetail(info){
				this.$store.dispatch('setfinshInfo',info);
				this.$router.push({path:'/finsh'});
				console.log(info)
			}
		},
		computed:{
			goodsInfo:function(){
				return this.$store.getters.getgoodsInfo;
			}
		},
		created(){
			// console.log(this.goodsInfo);
			this.orderList = this.goodsInfo;
			this.getData();
		}
	}	
</script>
<style scoped>
	.a1{
		padding: 20px 0 20px 30px;
		border-bottom:1px solid rgb(185,185,185);
	}
	.a1 .name{
		margin: 0 20px 0 0;
		font-size: 16px;
		font-weight: bolder;
	}
	.a1 .tel{
		font-weight: bolder;
	}
	.a1 .address{
		margin: 15px 0 ;
		color: rgb(145,145,145);
	}
	.order{
		margin: 20px 0 0 30px;
	}
	.order img{
		float: left;
		margin: 0 20px 0 0 ;
	}
	.order .title{
		height: 30px;
		line-height: 30px;
		padding: 0 0 0 0px;
	}
	.order .color{
		color: rgb(145,145,145);
		font-size: 13px;
	}
	.order .integral{
		margin-top: 10px;
		font-weight: bolder;
		color: rgb(242,150,0);
	}
	footer{
    	position: fixed;
    	bottom: 0;
    	width: 100%;
    	background: rgb(49,49,49);
    }
    footer div{
    	height: 50px;
    	color: white;
    	font-size: 16px;
    	text-align: center;
    	line-height: 50px;
    }
</style>