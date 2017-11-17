<template>
	<div id="finsh">
		<mt-header title="提交订单">
	  		<mt-button icon="back" slot="left" @click="$router.go(-1)">&nbsp;&nbsp;</mt-button>
	  		<router-link to="/" slot="right">
	  			<!-- <mt-button icon="more" class="search"></mt-button> -->
	    	</router-link>
		</mt-header>
		<div class="finsh">
			<div class="f1">兑换成功</div>
			<div class="f2">您可以在兑换记录中查看进度</div>
		</div>
		<b class="o1">订单信息</b>
		<div class="order">
			<img :src="dataList.pic" alt="" width=40%>
			<b class="title">{{dataList.title}}</b>
			<br>
			<span class="color">颜色：{{dataList.color}}</span>
			<br>
			<div class="integral">${{dataList.integral}}积分</div>
		</div>
		<footer>
			<router-link to='/integralshop'>
				<div>完&nbsp;&nbsp;&nbsp;&nbsp;成</div>
			</router-link>
		</footer>
	</div>
</template>
<script>
	export default{
		name:"finsh",
		data(){
			return{
				dataList:{},
			}
		},
		methods:{

		},
		computed:{
			finshInfo:function(){
				return this.$store.getters.getfinshInfo;
			}
		},
		created(){
			this.dataList = this.finshInfo;
		}
	}
</script>
<style scoped>
	.finsh{
		width: 100%;
		height: 250px;
		background-image: url(../assets/gift.png);
		background-repeat: no-repeat;
		background-size: 35px;
		background-position: 50% 30px;
	}
	.f1{
		padding: 77px 0 0  0;
		text-align: center;
		font-size: 18px;
		font-weight: bolder;
	}
	.f2{
		margin: 10px 0 0 0;
		text-align: center;
		font-weight: bolder;
		font-size: 15px;
	}
	.o1{
		margin: 30px;
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