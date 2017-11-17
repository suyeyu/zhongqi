<template>
	<div id="makeup">
		<mt-header title="美妆洗护">
	  		<mt-button icon="back" slot="left" @click="$router.go(-1)">&nbsp;&nbsp;</mt-button>
	  		<router-link to="/" slot="right">
	  			<mt-button icon="more" class="search"></mt-button>
	    	</router-link>
		</mt-header>
		<section>
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
		name:"makeup",
		data(){
			return{
			dataList:[],
			}
		},
		methods:{
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
	section{
		margin: 20px 0 0 0 ;
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