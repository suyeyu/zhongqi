<template>
	<div id="mycenter">
		<header>
			<div>我的</div>
		</header>
		<div class="login">
			<input type="text" value="登录账号" readonly>
		</div>
		<section>
			<div class="list">
				<ul>
					<li>
						<img src="../assets/home_btn_gwc@2x.png" alt=""><br>
						购物车</li>
					<li>
						<img src="../assets/home_btn_yhq@2x.png" alt=""><br>券包</li>
					<li>
						<img src="../assets/home_btn_wdpj@2x.png" alt=""><br>评价</li>
					<li>
						<img src="../assets/home_btn_wdsc@2x.png" alt=""><br>收藏</li>
					<li>
						<img src="../assets/home_btn_wdwd@2x.png" alt=""><br>问答</li>
					<li>
						<img src="../assets/home_btn_woxz@2x.png" alt=""><br>下载</li>
					<li>
						<img src="../assets/home_btn_yhq@2x.png" alt=""><br>钱包</li>
					<li>
						<img src="../assets/home_btn_qb@2x.png" alt=""><br>活动</li>
				</ul>
			</div>
			<div class="mall_order">
				<div class=""></div>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</section>
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
						<img src="../assets/tab_fw@2x.png" alt="">
						<br>
						<span>服务</span>
					</li>
				</router-link>
				<router-link to="/mycenter">
					<li>
						<img src="../assets/11a21ffdc575a50fc0ea47da24dde652@2x.png" alt="">
						<br>
						<span class="wordcol">我的</span>
					</li>
				</router-link>
			</ul>
		</footer>
	</div>
</template>
<script>
	export default{
		name:"mycenter",

	}
</script>
<style scoped>
	header div{
		height: 40px;
		width: 100%;
		line-height: 40px;
		text-align: center;
		font-weight: bolder;
	}
	.login{
		height: 0px;
		width: 100%;
		margin: 80px auto;
		text-align: center;

	}
	.login input{
		width: 70%;
		height: 30px;
		text-align: center;
		color: red;
		border: 1px solid red;
		font-size: 14px;
	}
	section .list{
		border-top: 1px solid rgb(200,200,200)
	}
	section .list ul{
		margin: 16px 0;
	}
	section .list li{
		margin: 0 0 20px 0;
		width: 24%;
		text-align: center;
	}
	.list img{
		width: 30px;
		margin:5px 0 10px 0;
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