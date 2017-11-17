import Home from "./components/homepage.vue"
import ImageDetail from "./components/imageDetail.vue"
import Category from "./components/categoryPage.vue"
import ProfitDetail from './components/profitDetail.vue'
import NewsList from './components/newsList.vue'
import VideoPage from './components/videoView.vue'
import FollowPage from './components/followPage.vue'
import loginView from './components/login.vue'
import registerView from './components/register.vue'
import UserCenter from './components/userCenter.vue'
import MoneyView from './components/mySubMoney.vue'
import Integral from './components/myIntegral.vue'
import integralshop from './components/integralshop.vue'
import costume from './components/costume.vue'
import makeup from './components/makeup.vue'
import office from './components/office.vue'
import numeral from './components/numeral.vue'
import doll from './components/doll.vue'
import record from './components/record.vue'
import order from './components/order.vue'
import finsh from './components/finsh.vue'

import merchandise from './components/merchandise.vue'
export default[
	{path:'/home',component:Home},
	{path:'/imageDetail/:type',component:ImageDetail},
	{path:'/category/:type',component:Category},//表示该路径需要传一个值到下级页面
	{path:'/profitDetail',component:ProfitDetail},
	{path:'/news',component:NewsList},
	{path:'/video',component:VideoPage},
	{path:'/follow',component:FollowPage},
	{path:'/login',component:loginView},
	{path:'/register',component:registerView},
	{path:'/userCenter',component:UserCenter},
	{path:'/money',component:MoneyView},
	{path:'/integral',component:Integral},
	{path:'/integralshop',component:integralshop},
	{path:'/merchandise',component:merchandise},
	{path:'/costume',component:costume},
	{path:'/makeup',component:makeup},
	{path:'/office',component:office},
	{path:'/numeral',component:numeral},
	{path:'/doll',component:doll},
	{path:'/record',component:record},
	{path:'/order',component:order},
	{path:'/finsh',component:finsh},
	{path:'/',component:Home},
	{path:'*',component:Home}
]