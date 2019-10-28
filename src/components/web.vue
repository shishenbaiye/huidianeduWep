<template>
	<div class="web" >
		<img src="../assets/web/banner.png" class="banner" />
		<van-col class="php-index" type="flex">
			<van-row class="php-title">WEB全栈开发课程介绍</van-row>
			<van-row class="php-subtitle">优秀的课程体系帮助学员夯实基础</van-row>
			<!-- 课程介绍-->
			<div type="flex" class="php-buzou">
				<van-row type="flex" justify="center" class="php-line">
					<van-col type="flex" align="center" class="php-line-index" style="margin-right: 1.7%;">
						<img class="php-img" src="../assets/web/001.png"/>
						<van-row class="php-line-index-title">网页特效+交互</van-row>
						<van-row class="php-line-index-subtitle"> 掌握HMTL，CSS知识， 深入学习JavaScript核 心基础、语法等 </van-row>
					</van-col>
					<van-col type="flex" align="center" class="php-line-index" style="margin-left: 1.7%;">
						<img class="php-img" src="../assets/web/002.png"/>
						<van-row class="php-line-index-title">互联网解决方案</van-row>
						<van-row class="php-line-index-subtitle"> 学习服务器数据库知识， 同时教授热门互联网解 决方案相关知识 </van-row>
					</van-col>
				</van-row>
				<van-row type="flex" justify="center" class="php-line">
					<van-col type="flex" align="center" class="php-line-index" style="margin-right: 1.7%;">
						<img class="php-img" src="../assets/web/003.png"/>
						<van-row class="php-line-index-title">JS框架与开发环境</van-row>
						<van-row class="php-line-index-subtitle"> 深入学习各种JS框架， 实战中学习分布式/集 群式代码托管平台 </van-row>
					</van-col>
					<van-col type="flex" align="center" class="php-line-index" style="margin-left: 1.7%;">
						<img class="php-img" src="../assets/web/004.png"/>
						<van-row class="php-line-index-title">微信相关开发课程</van-row>
						<van-row class="php-line-index-subtitle"> 微信网页授权，JSSDK ，地理微信支付，微信 卡券，小程序开发等 </van-row>
					</van-col>
				</van-row>
			</div >
				<!-- 树状图 -->
			<div class="php-tree" ref="tree"  v-bind:style="{ height: height + 'px' }">
				<van-col class="tree-title">
					<van-row class="php-title" style="margin-top:5.5%;">慧点WEB全栈课程优势</van-row>
					<van-row class="php-subtitle">全商业驱动项目，保证学员学有所成</van-row>
				</van-col>
				<van-col class="tree-index">
					<van-row class="tree-index-line" type="flex" align="center" justify="space-between">
						<van-row class="tree-index-line-title">教学模式</van-row>
						<van-row class="tree-index-line-subtitle">率先采用独创的ptrn教学模式，以一线互联网企业的真 实项目案例驱动教学 </van-row>
					</van-row>
					<van-row class="tree-index-line" type="flex" align="center" justify="space-between">
						<van-row class="tree-index-line-subtitle2"> web全栈课程体系由慧点教研团队精心调研而成，紧随行业发展需求，全程商业项目驱动教学。 </van-row>
						<van-row class="tree-index-line-title2">名师教学</van-row>	
					</van-row>
					<van-row class="tree-index-line" type="flex" align="center" justify="space-between">
						<van-row class="tree-index-line-title">师资团队</van-row>
						<van-row class="tree-index-line-subtitle">慧点拥有业界精良的教研专家，金牌讲师，职业规划师切实为每位学员it梦想保驾护航。 </van-row>
					</van-row>
					<van-row class="tree-index-line" type="flex" align="center" justify="space-between">
						<van-row class="tree-index-line-subtitle2">慧点目前有上千家合作企业，数名就业顾问在全国多个城市为学员与企业搭桥铺路。 </van-row>
						<van-row class="tree-index-line-title2">就业保障</van-row>	
					</van-row>
				</van-col>
			</div>
			<!-- 老师 -->
			<van-col class="teacher" type="flex" align="center">
				<van-col class="tree-title">
					<van-row class="php-title" style="margin-top:5.5%;">慧点WEB全栈讲师</van-row>
					<van-row class="php-subtitle">良好的环境是学员学有所成的基础</van-row>
				</van-col>
				<van-row class="teacher-line" type="flex">
					<van-image class="teacher-img" src="http://m.huidianedu.com/wep/003.png"></van-image>
					<van-col class="teacher-index">
						<van-row class="teacher-index-name">张双飞  C C++ Java Python</van-row>
						<van-row class="teacher-index-introduct">十年软年开发经验，资深软件架构师。曾参与过中国联通WCDMA七省综合网管系统、中国联通GSM电信网管系统数据同步器、展讯平台手机虚拟机、中国移动 IVVR 平台手机T9输入法等众多大型项目</van-row>
					</van-col>
				</van-row>
			</van-col>
		</van-col>
	</div>
</template>

<script>
	import { Icon } from 'vant';
	import Vue from 'vue';
	import { Swipe, SwipeItem } from 'vant';
	import { Lazyload } from 'vant';
	import { Image } from 'vant';
	import { Row, Col } from 'vant';
	import { Field } from 'vant';
	
	
	export default{
		components:{
				
			},
			data () {
				return {
					height:580
				}
			},
			methods: {
				
			},
			mounted(){
				let wid = this.$refs.tree.offsetWidth;
				let height = wid/375*580;
				this.height = height;
				console.log("width:"+ wid);
				console.log("height:"+this.height);
			},
		  name: 'web',
		  props: {
		  msg: String
		}
	}
	
</script>

<style>
</style>
