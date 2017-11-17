<template>
	<div id="register">
		<mt-header title="注册">
	  		<mt-button icon="back" slot="left" @click="$router.go(-1)">&nbsp;&nbsp;</mt-button>
		</mt-header>
		<section>
			<form action="">
				<div class="logo">
					<img src="../assets/login/fox.png" alt="fox">
				</div>
				<label for="account">输入邮箱号</label><br>
				<input type="email"  class="login_info"  v-model='userName'> <br>
				<label for="password">请设置密码</label><br>
				<input type="password" name="password" class="login_info" v-model='pwd'>
				<div class="validation">
					<label for="validation">验证码</label><br>
					<input type="text" v-model="code">
				</div>
					<input type="button" value="登录" class="login_btn" @click="trythis()">
				<div class="or"><p>OR</p></div>
				<div class="social">
					<table>
						<tr>
							<td><img src="../assets/login/qq.png" alt=""></td>
							<td><img src="../assets/login/wechat.png" alt=""></td>
							<td><img src="../assets/login/weibo.png" alt=""></td>
						</tr>
					</table>	
				</div>
			</form>
			
		</section>
	</div>
</template>


<script>
	export default{
		name:"register",
		data(){
			return{
				userName:'',
				pwd:'',
				code:''
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			},
			trythis(){
				var rules = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
				if (this.userName == 0) {
					alert('请输入邮箱地址')
				}else{
					if (!rules.test(this.userName)) {
						alert("请输入正确的邮箱地址")
					}else if (this.pwd == 0) {
						alert("请输入密码")
					}else if (this.code == 0) {
						alert("请输入验证码")
					}else{
						// this.$router.push({path:'/'})
						this.$router.push({path:'/'})
					}
				}
			}
		}
	}	
</script>
<style scoped="">
	.mint-header{
		background-color: white;
		color: rgb(35,38,43);
	}
	.logo{
		text-align: center;
		margin-bottom: 30px;
	}
	.logo img{
		width: 15%;
	}
	section{
		color: rgb(144,144,144);
		margin-top: 50px;
		padding: 0 20px;
	}
	section input[type='text']{
		display: inline-block;
		width: 100%;
		height: 30px;
		line-height: 30px;
		border:none;
		border-bottom: 1px solid rgb(231,231,231)
	}
	.login_btn{
		color: white;
		background-color: rgb(35,38,43);
		margin: 15px 0;
		padding: 10px;
	}
	.login_info{
		margin: 10px 0;
	}
	.validation{
		margin: 10px 0;
	}
	.social img{
		width:35%;
	}
	.clearfix{
		line-height: 50px;
	}
	.fr{
		color:rgb(241,149,14); 
	}
	input{
		width: 100%;
		border:none;
		outline: none;
	}
	.social{
		text-align: center;
	}
	.social table{
		width: 100%;
	}
	.social table tr{
		height: 50px;
	}
	p{
		color:rgb(144,144,144);
	}
	.or{
		text-align: center;
		margin-top:70px;
	}

</style>