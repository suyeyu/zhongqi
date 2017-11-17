<template>
	<div id="shopping">
		<header>
			<input type="text" placeholder="搜索">
			<div class="shoping"></div>
		</header>
		<div class="action">
			<div class="aslide">活动</div>
		</div>
		<nav>
			<ul>
				<li>
					<img src="../assets/home_btn_gg@2x.png" alt="">
					<br>狗狗
				</li>
				<li>
					<img src="../assets/home_btn_mm@2x.png" alt="">
					<br>猫咪
				</li>
				<li>
					<img src="../assets/home_btn_qj@2x.png" alt="">
					<br>清洁
				</li>
				<li>
					<img src="../assets/home_btn_ry@2x.png" alt="">
					<br>日用
				</li>
				<li>
					<img src="../assets/home_btn_mr@2x.png" alt="">
					<br>美容
				</li>
				<li>
					<img src="../assets/home_btn_fs@2x.png" alt="">
					<br>服装
				</li>
				<li>
					<img src="../assets/home_btn_wj@2x.png" alt="">
					<br>玩具
				</li>
				<li>
					<img src="../assets/home_btn_ls@3x.png" alt="">
					<br>零食
				</li>
			</ul>
		</nav>
		<section>
			<div class="brandsrecommend">
				<p class="title">品牌推荐</p>
				<div class="brands">
					<ul>
						<router-link to="shopparticulars">
						<li>
							<img src="../assets/brands/hj.png" alt="">
							<div>
								<b>皇家</b><br>
								<p>直降228</p>
							</div>
						</li>
						</router-link>
						<router-link to="">
						<li>
							<img src="../assets/brands/gn.png" alt="">
							<div>
								<b>冠能</b><br>
								<p>最高直降415</p>
							</div>
						</li>
						</router-link>
						<router-link to="">
						<li>
							<img src="../assets/brands/yq.png" alt="">
							<div>
								<b>怡亲</b><br>
								<p>3.5折起</p>
							</div>
						</li>
						</router-link>
						<router-link to="">
						<li>
							<img src="../assets/brands/wp.png" alt="">
							<div>
								<b>顽皮</b><br>
								<p>4.6折起</p>
							</div>
						</li>
						</router-link>
						<router-link to="">
						<li>
							<img src="../assets/brands/bl.png" alt="">
							<div>
								<b>宝路</b><br>
								<p>爆款限时半折</p>
							</div>
						</li>
						</router-link>
						<router-link to="">
						<li>
							<img src="../assets/brands/fleq.png" alt="">
							<div>
								<b>福来恩犬</b><br>
								<p>每件0.1元起</p>
							</div>
						</li>
						</router-link>
						<router-link to="">
						<li>
							<img src="../assets/brands/wsk.png" alt="">
							<div>
								<b>威斯康</b><br>
								<p>3.8折起</p>
							</div>
						</li>
						</router-link>
						<router-link to="">
						<li>
							<img src="../assets/brands/flx.png" alt="">
							<div>
								<b>福莱西</b><br>
							    <p>买二送一</p>
							</div>
						</li>
						</router-link>
					</ul>
				</div>
			</div>
			<!-- <div class="seckill">
				<mt-swipe :auto="0">
				    <mt-swipe-item><img src="../assets/brands/flx.png" alt=""></mt-swipe-item>
				    <mt-swipe-item><img src="../assets/brands/flx.png" alt=""></mt-swipe-item>
				    <mt-swipe-item><img src="../assets/brands/flx.png" alt=""></mt-swipe-item>
				</mt-swipe>
			</div> -->
			<div class="blank"></div>
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
					<img src="../assets/c540260f4c96e83d26c8933f3de96450@2x.png" alt="">
					<br>
					<span class="wordcol">商城</span>
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
						<img src="../assets/tab_wd@2x.png" alt="">
						<br>
						<span>我的</span>
					</li>
				</router-link>
			</ul>
		</footer>
	</div>
</template>
<script>
	export default{
		name:"shopping",

	}
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	header input{
		width: 63%;
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
	.action{
		/*width: 100%;*/
		height: 200px;
		/*margin-top: 10px;*/
		background-image: url(../assets/dogfood.jpg);
		background-repeat: no-repeat;
		background-size: 100% 200px;
		margin-top: 30px;
	}
	.aslide{
		width: 20%;
		height: 20%;
		color: yellow;
		/*border: 1px solid red;*/
		background: rgba(276,173,95,0.4);
		border-radius: 30% 0 0 30%;
		font-size: 20px;
		font-weight: bolder;
		line-height: 200%;
		margin-top: 40px;
		float: right;
		text-align: center;
	}
	nav ul{
		margin: 0 0 10px 0;
	}
	nav li{
		width: 24%;
		margin: 20px 0 0 0 ;
		text-align: center;
		font-size:9px;
		color: rgb(153,153,153); 
	}
	nav li img{
		width: 40%;
	}

	section .title{
		height: 30px;        
		font-size: 9px;
		color: rgb(102,102,102);
		line-height: 30px;
		margin-left: 10PX;
	}
	section .brandsrecommend{
		width: 100%;
	}
	section li{
		width: 48%;
		color: rgb(270,270,270);
		/*margin-bottom: 10px;*/
	}
	section li div{
		margin-top: 10px;
		background: rgb(250,150,220);
		padding: 5px 0 ;
		text-align: center;
	}
	section li div b{
		font-size: 18px;
	}
	section li div p{
		font-size: 13px;
	}
	section li img{
		float: right;
		width: 70px;
		transform:rotate(10deg);
	}
	section .seckill{
		width: 250px;
	}
	section .blank{
		height: 65px;
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