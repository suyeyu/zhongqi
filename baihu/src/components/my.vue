<template>
	<div id="my">
		<mt-header title="登录">
	  		<mt-button icon="back" slot="left" @click="$router.go(-1)">&nbsp;&nbsp;</mt-button>
	  		<router-link to="/" slot="right">
	    		<mt-button icon="settings" class="settings"></mt-button>
	  		</router-link>
		</mt-header>

	</div>
</template>
<script>
	export default{
		name:"my",
		data(){
			return{

			}
		},
		computed:{
			
			// userInfo(){
			// 	return this.$store.getters.getUserInfo;
			// }
		}
	}
</script>
<style scoped>
	
</style>