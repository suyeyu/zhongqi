<template>
	<div id="merchandise">
		<mt-header title="商品详情">
	  		<mt-button icon="back" slot="left" @click="$router.go(-1)">&nbsp;&nbsp;</mt-button>
	  		<router-link to="/" slot="right">
	    		<mt-button icon="more" class="search"></mt-button>
	  		</router-link>
		</mt-header>
		<section >
			<img :src="merchandise.pic" alt="" width=100%>
			<div class="title">{{merchandise.title}}</div>
			<div class="integral">${{merchandise.integral}}&nbsp;积分</div>
			<div class="number">
				<div class="buy">购买数量</div>
				<br>
				<div @click="number=number>1?--number:1" class="subtraction">-</div>
				<input type="text" v-model="number" readonly>
				<div @click="number++" class="add">+</div>
			</div>
			<div>
				<span>细节介绍：</span>
				<div>{{merchandise.introduce}}</div>
			</div>
		</section>
		<footer @click="gotoDetail(merchandise)">
			<router-link to="/order">
				<div>立&nbsp;刻&nbsp;购&nbsp;买</div>
			</router-link>
		</footer>
	</div>
</template>
<script>
	export default{
		name:"merchandise",
		data(){
			return{
				merchandise:{},
				number:1,
			}
		},
		methods:{
			gotoDetail(info){
				this.$store.dispatch('setgoodsInfo',info);
				// console.log(info);
				this.$router.push({path:'/order'});
			}
		},
		computed:{
			IntegralInfo:function(){
				return this.$store.getters.getIntegralInfo;
			}
		},
		
		created(){
			// console.log(this.IntegralInfo);
			this.merchandise = this.IntegralInfo;
			// console.log(this.IntegralInfo);
		}
	}
</script>
<style scoped>
	section{
		width: 100%;
	}
	section .title{
		/*width: 100%;*/
		text-align: center;
		font-size: 15px;
		font-weight: bolder;
		margin: 10px 0 10px 0;
	}
	section .integral{
		text-align: center;
		font-size: 14px;
		font-weight: bolder;
		color: rgb(242,150,0);
		margin-bottom: 20px;
	}
	.number{
		font-size: 15px;
		margin: 25px 0;
		padding-bottom: 20px;
		border-top: 1px solid rgb(200,200,200);
		border-bottom: 1px solid rgb(200,200,200);
	}
	.number .buy{
		display: inline-block;
		margin: 10px 0;
	}
    .number .subtraction{
    	display: inline-block;
    	width: 20px;
    	text-align: center;
    	border: 1px solid rgb(169,169,169);
    }
    .number .add{
    	display: inline-block;
    	width: 20px;
    	text-align: center;
    	border: 1px solid rgb(169,169,169);
    }
    .number input{
    	width: 40px;
    	height: 20px;
    	text-align: center;
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