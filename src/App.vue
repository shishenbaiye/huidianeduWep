<template>
  <div id="app" class="appi" ref="windows">
	  <van-row class="header" type="flex" align="center" justify="space-between">
		  <router-link  to="/"> 
		  <van-row type="flex">
			  <img class="header-logo" src="./assets/logo.png"/>
		  </van-row>
		  </router-link>
		  <img @click="menu" class="header-menu" src="./assets/menu.png"/>
	  </van-row>
	  <van-popup v-model="show" position="right" :style="{ height: '100%' ,width:'46.53%' ,'z-index':'9999'}" type="flex">
		 <router-link  to="/">
			 <van-button 
			 justify="center" 
			 align="center" 
			 @click='click_menu'
			 style="height: 3.5625rem;width: 100%;border-bottom: solid #E0E0E0 0.0625rem;font-size: 1.0625rem;">慧点首页</van-button>
		 </router-link>
		 <router-link  to="/about">
			 <van-button  
			 class="popup-font" 
			 justify="center" 
			 align="center" 
			 style="height: 3.5625rem;width: 100%;border-bottom: solid #E0E0E0 0.0625rem;font-size: 1.0625rem;"
			 @click='click_menu'>关于慧点</van-button >		 
		 </router-link>
		 <router-link  to="/master">
			 <van-button  
			 class="popup-font" 
			 justify="center" 
			 align="center" 
			 style="height: 3.5625rem;width: 100%;border-bottom: solid #E0E0E0 0.0625rem;font-size: 1.0625rem;"
			 @click='click_menu'>师资专家</van-button >
		 </router-link>
		 <router-link  to="/news">
		 			 <van-button  
		 			 class="popup-font" 
		 			 justify="center" 
		 			 align="center" 
		 			 style="height: 3.5625rem;width: 100%;border-bottom: solid #E0E0E0 0.0625rem;font-size: 1.0625rem;"
		 			 @click='click_menu'>就业报告</van-button >
		 </router-link>
		 <router-link  to="/java">
			 <van-button  
			 class="popup-font" 
			 justify="center" 
			 align="center" 
			 style="height: 3.5625rem;width: 100%;border-bottom: solid #E0E0E0 0.0625rem;font-size: 1.0625rem;"
			 @click='click_menu'>Java企业级开发</van-button >
		 </router-link>
		 <router-link  to="/php">
			 <van-button  
			 class="popup-font" 
			 justify="center" 
			 style="height: 3.5625rem;width: 100%;border-bottom: solid #E0E0E0 0.0625rem;font-size: 1.0625rem;"
			 align="center" @click='click_menu'>PHP全栈开发</van-button >
		 </router-link>
		 <router-link  to="/web">
			 <van-button  
			 class="popup-font" 
			 justify="center" 
			 align="center" 
			 style="height: 3.5625rem;width: 100%;border-bottom: solid #E0E0E0 0.0625rem;font-size: 1.0625rem;"
			 @click='click_menu'>Web全栈开发</van-button >
		 </router-link>
		 <router-link  to="/bigshuju">
			 <van-button  
			 class="popup-font" 
			 justify="center" 
			 align="center" 
			 style="height: 3.5625rem;width: 100%;border-bottom: solid #E0E0E0 0.0625rem;font-size: 1.0625rem;"
			 @click='click_menu'>大数据开发</van-button >
		 </router-link>
		 <router-link  to="/python">
			 <van-button  
			 class="popup-font" 
			 justify="center" 
			 align="center" 
			 style="height: 3.5625rem;width: 100%;border-bottom: solid #E0E0E0 0.0625rem;font-size: 1.0625rem;"
			 @click='click_menu'>Python人工智能</van-button >
		 </router-link>
		 <router-link  to="/ui">
			 <van-button  
			 class="popup-font" 
			 justify="center" 
			 align="center"
			 style="height: 3.5625rem;width: 100%;border-bottom: solid #E0E0E0 0.0625rem;font-size: 1.0625rem;"
			 @click='click_menu'>UI/UE设计</van-button >
		 </router-link>
	  </van-popup>
	  <!-- 
	  <subject msg="精品课程"/>
	  <about msg="关于慧点"/> -->
	<router-view></router-view>	
	
    <van-col class="footer" type="flex" align="center">
		<van-row class="footer-local" type="flex"><img class="footer-img" src="./assets/IP.png"/>郑州高新区科学大道中原广告产业园7号楼4层</van-row>
		<van-row class="footer-phone" type="flex"><img class="footer-img" src="./assets/phone.png"/>0371-56111301</van-row>
		<van-row class="line"></van-row>	
		<van-row class="footer-icp" type="flex" justify="center">Copyright ©2014 版权所有 ICP备案：豫ICP备19031280</van-row>
	</van-col>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import index from './components/index.vue'
import about from './components/about.vue'
import subject from './components/subject.vue'
import master from './components/master.vue'
import php from './components/php.vue'
import python from './components/python.vue'
import bigshuju from './components/bigshuju.vue'
import java from './components/java.vue'
import ui from './components/ui.vue'
import web from './components/web.vue'
import news from './components/news.vue'
import newsIndex from './components/newsIndex.vue'
import baozhang from './components/baozhang.vue'

import { Popup } from 'vant';
import { Row, Col } from 'vant';
import { Toast } from 'vant';
//import Test from 'components/Test.vue'
export default {
  name: 'app',
  components: {
    //HelloWorld,
	baozhang,
	newsIndex,
	news,
	java,
	ui,
	web,
	bigshuju,
	python,
	php,
	master,
	subject,
	about,
	index
	
	//test
  },
  data() {
      return {
        show: false,
      }
    },
  mounted(){
		
	},
  methods:{
	  menu(){
		this.show = true;
	  },
	  click_menu(){
		  this.show =false;
	  }
  }
}
</script>

<style>
a{
	color: #333333;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.appi{
	padding-top: 3rem;
}
.header{
	width: 100%;
	height: 3rem;
	position:fixed;
	top: 0;
	z-index:999;
	background-color:#FFFFFF;
	box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.11);
}
.header-logo{
	width: 6.728125rem;
	height:1.25rem;
	margin-left: 0.875rem;
}
.header-font{
	color: #6359EE;
	margin-left: 0.8125rem;
}
.header-menu{
	height: 0.875rem;
	width: 1.09375rem;
	margin-right: 0.8125rem;
}
.popup-font{
	height: 3.5625rem;
	width: 100%;
	border-bottom: solid #E0E0E0 0.0625rem;
	font-size: 1.0625rem;
}
.footer{
	position:relative;
	bottom: 0;
	width: 100%;
	height:10rem;
	background-color: #f0f0f0;
}
.footer-local{
	margin-top: 1.9rem;
	font-size: 0.875rem;
	height: 1.4375rem;
	width: 88%;
	color:#777888;
	align-items: center;
}
.footer-phone{
	margin-top: 1rem;
	font-size: 0.875rem;
	height: 1.4375rem;
	width: 88%;
	color:#777888;
	align-items: center;
}
.footer-img{
	width: 1.4375rem;
	margin-right: 0.6875rem;
}
.line{
	background-color: #dedede;
	width: 100%;
	height: 1px;
	margin-top: 1.7rem;
}
.footer-icp{
	margin-bottom: 0.875rem;
	margin-top: 0.7rem;
	font-size:0.75rem;
	color: #999999;
	height: 0.8125rem;
	width: 88%;
}
</style>
