<template>
	<div class="java" ref="java" >
		<img src="../assets/java/banner.png" class="banner" />
		<van-col class="php-index" type="flex">
			<van-row class="php-title">Java企业级开发课程介绍</van-row>
			<van-row class="php-subtitle">优秀的课程体系学有所成的基础</van-row>
			<!-- 课程介绍-->
			<div type="flex" class="php-buzou">
				<van-row type="flex" justify="center" class="php-line">
					<van-col type="flex" align="center" class="php-line-index" style="margin-right: 1.7%;">
						<img class="php-img" src="../assets/java/001.png"/>
						<van-row class="php-line-index-title">JAVA基础</van-row>
						<van-row class="php-line-index-subtitle"> 深入了解java运行原理 和操作，教学深入浅出 ，直击诸多面试问题 </van-row>
					</van-col>
					<van-col type="flex" align="center" class="php-line-index" style="margin-left: 1.7%;">
						<img class="php-img" src="../assets/java/002.png"/>
						<van-row class="php-line-index-title">Javaee开发</van-row>
						<van-row class="php-line-index-subtitle"> 数据库内容，html5,c ss,js语法,各种js的前端 框架，JSP等精讲 </van-row>
					</van-col>
				</van-row>
				<van-row type="flex" justify="center" class="php-line">
					<van-col type="flex" align="center" class="php-line-index" style="margin-right: 1.7%;">
						<img class="php-img" src="../assets/java/003.png"/>
						<van-row class="php-line-index-title">框架精讲</van-row>
						<van-row class="php-line-index-subtitle"> 企业开发部署环境精讲 ，规范代码及开发流程 ，企业级框架精讲 </van-row>
					</van-col>
					<van-col type="flex" align="center" class="php-line-index" style="margin-left: 1.7%;">
						<img class="php-img" src="../assets/java/004.png"/>
						<van-row class="php-line-index-title">互联网解决方案</van-row>
						<van-row class="php-line-index-subtitle"> 教授诸多互联网产品中 前沿流行技术，如：高 级mysql；jvm原理等 </van-row>
					</van-col>
				</van-row>
			</div >
			<!-- 为什么学java -->
			<van-col class="why">
				<van-col class="tree-title">
					<van-row class="php-title" style="margin-top:5.5%;">为什么要学习JAVA</van-row>
					<van-row class="php-subtitle">Java语言连续多年成为最受欢迎的编程语言</van-row>
				</van-col>
				<van-col class="why-index">
					<van-row class="why-line" type="flex" justify="space-around">
						<van-col class="why-line-index" type="flex" align="center" style="margin-left: 2%;">
							<van-row class="why-line-index-title">简单易学</van-row>
							<van-row class="why-line-index-nr">Java语法简单，拥有简洁懂 的关键字、语言；一次写成 处处可以运行，独具跨平台 性，不受特定环境限制。</van-row>
						</van-col>
						<van-col class="why-line-index"  type="flex" align="center" style="margin-right:2%;">
							<van-row class="why-line-index-title" style="background:rgba(152,51,219,1);">就业广泛</van-row>
							<van-row class="why-line-index-nr"> 在所有软件开发类人才的需 求中，对Java工程师的需求 达到全部需求量的百分之六 十到百分之七十。 </van-row>
						</van-col>
					</van-row>
					<van-row class="why-line" type="flex" justify="space-around">
						<van-col class="why-line-index" type="flex" align="center" style="margin-left: 2%;">
							<van-row class="why-line-index-title" style="background:rgba(35,108,239,1);">企业必备</van-row>
							<van-row class="why-line-index-nr"> Java在企业大型项目中不可 或缺，比如京东、淘宝、当 当等著名的购物网站，大数 据处理均来自Java  </van-row>
						</van-col>
						<van-col class="why-line-index"  type="flex" align="center" style="margin-right:2%;">
							<van-row class="why-line-index-title" style="background:rgba(237,79,79,1);">待遇优厚</van-row>
							<van-row class="why-line-index-nr"> 在600余种编程语言中，J ava多年在世界编程语言中 独占鳌头，由此也带动了 Java开发的需求和待遇  </van-row>
						</van-col>
					</van-row>
				</van-col>
			</van-col>
			<!-- 老师 -->
			<van-col class="teacher" type="flex" align="center">
				<van-col class="tree-title">
					<van-row class="php-title" style="margin-top:5.5%;">慧点Java讲师</van-row>
					<van-row class="php-subtitle">良好的环境是学员学有所成的基础</van-row>
				</van-col>
				<van-row class="teacher-line" type="flex">
					<van-image class="teacher-img" src="https://www.huidianedu.com/wep/003.png"></van-image>
					<van-col class="teacher-index">
						<van-row class="teacher-index-name">张双飞  C C++ Java Python</van-row>
						<van-row v-bind:class="classFont">十年软年开发经验，资深软件架构师。曾参与过中国联通WCDMA七省综合网管系统、中国联通GSM电信网管系统数据同步器、展讯平台手机虚拟机、中国移动 IVVR 平台手机T9输入法等众多大型项目</van-row>
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
						classFont:{
							teacherIndexIntroduct: true,
							teacherIndexIntroduct1080p: false	
						}
					}
				},
				methods: {
					
				},
				mounted(){
					let wid = this.$refs.java.offsetWidth;
					if(wid>=393){
						this.classFont.teacherIndexIntroduct=false;
						this.classFont.teacherIndexIntroduct1080p=true
					}
				},
			  name: 'java',
			  props: {
			  msg: String
			}
		}
		
</script>

<style>
</style>
