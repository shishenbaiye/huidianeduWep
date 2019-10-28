<template>
	<div class="bigshuju" >
		<img src="../assets/bigshuju/banner.png" class="banner" />
		<van-col class="php-index" type="flex">
			<van-row class="php-title">大数据应用领域</van-row>
			<van-row class="php-subtitle">大数据拥有更多的应用方向和就业前景</van-row>
			<!-- 课程介绍-->
			<div type="flex" class="php-buzou">
				<van-row type="flex" justify="center" class="php-line">
					<van-col type="flex" align="center" class="php-line-index" style="margin-right: 1.7%;">
						<img class="php-img" src="../assets/bigshuju/001.png"/>
						<van-row class="php-line-index-title">自动驾驶</van-row>
						<van-row class="php-line-index-subtitle">自动驾驶系统依靠视觉计算，同样需要大量的数据样本和数据分析</van-row>
					</van-col>
					<van-col type="flex" align="center" class="php-line-index" style="margin-left: 1.7%;">
						<img class="php-img" src="../assets/bigshuju/002.png"/>
						<van-row class="php-line-index-title">图片识别</van-row>
						<van-row class="php-line-index-subtitle">图片识别可以快速通过图片找到相关信息及图片的来源和大小简介</van-row>
					</van-col>
				</van-row>
				<van-row type="flex" justify="center" class="php-line">
					<van-col type="flex" align="center" class="php-line-index" style="margin-right: 1.7%;">
						<img class="php-img" src="../assets/bigshuju/003.png"/>
						<van-row class="php-line-index-title">人工智能</van-row>
						<van-row class="php-line-index-subtitle">人工智能的实现，需要大数据的收集、处理、分析做基础支撑</van-row>
					</van-col>
					<van-col type="flex" align="center" class="php-line-index" style="margin-left: 1.7%;">
						<img class="php-img" src="../assets/bigshuju/004.png"/>
						<van-row class="php-line-index-title">人脸识别</van-row>
						<van-row class="php-line-index-subtitle">人脸识别包括人脸图像 采集、定位、识别预处 理、身份确认 </van-row>
					</van-col>
				</van-row>
			</div >
			<!-- 为什么学java -->
			<van-col class="why">
				<van-col class="tree-title">
					<van-row class="php-title" style="margin-top:5.5%;">为什么要学习大数据</van-row>
					<van-row class="php-subtitle">大数据推动科技的发展，是人工智能的基础</van-row>
				</van-col>
				<van-col class="why-index">
					<van-row class="why-line" type="flex" justify="space-around">
						<van-col class="why-line-index" type="flex" align="center" style="margin-left: 2%;">
							<van-row class="why-line-index-title">人才缺口大</van-row>
							<van-row class="why-line-index-nr"> 2019年我国在大数据方面 的岗位缺口达到了150万， 而在今后几年是人工智能 飞速发展的时代，预计到 2025年大数据人才缺口将 达到300万。 </van-row>
						</van-col>
						<van-col class="why-line-index"  type="flex" align="center" style="margin-right:2%;">
							<van-row class="why-line-index-title" style="background:rgba(152,51,219,1);">就业方向广</van-row>
							<van-row class="why-line-index-nr">方向一、Hadoop大数据开发方向;<br/>方向二、数据挖掘、方向三、大数据运维&云计</van-row>
						</van-col>
					</van-row>
					<van-row class="why-line" type="flex" justify="space-around">
						<van-col class="why-line-index" type="flex" align="center" style="margin-left: 2%;">
							<van-row class="why-line-index-title" style="background:rgba(35,108,239,1);">产业规模大</van-row>
							<van-row class="why-line-index-nr"> 2019年我国在大数据方面 的岗位缺口达到了150万， 而在今后几年是人工智能 飞速发展的时代，预计到 2025年大数据人才缺口将 达到300万。 </van-row>
						</van-col>
						<van-col class="why-line-index"  type="flex" align="center" style="margin-right:2%;">
							<van-row class="why-line-index-title" style="background:rgba(237,79,79,1);">“钱”途无量</van-row>
							<van-row class="why-line-index-nr"> 2019年我国在大数据方面 的岗位缺口达到了150万， 而在今后几年是人工智能 飞速发展的时代，预计到 2025年大数据人才缺口将 达到300万。 </van-row>
						</van-col>
					</van-row>
				</van-col>
			</van-col>
			<!-- 老师 -->
			<van-col class="teacher" type="flex" align="center">
				<van-col class="tree-title">
					<van-row class="php-title" style="margin-top:5.5%;">慧点大数据讲师</van-row>
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
				}
			},
			methods: {
				
			},
			mounted(){
;
			},
		  name: 'bigshuju',
		  props: {
		  msg: String
		}
	}
	
</script>

<style>
.why{
	width: 100%;
	background-color: #f5f6fd;
}
.why-index{
	margin-top:2.3125rem;
	width: 100%;
}
.why-line{
	margin-top:0.5rem;
	width: 100%;
}
.why-line-index{
	width: 44.5%;
	background:rgba(255,255,255,1);
	box-shadow:0px 0px 10px 0px rgba(19,24,126,0.16);
	border-radius:4px;
	margin-bottom: 2rem;
}
.why-line-index-title{
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top:-15px;
	height: 2rem;
	width: 6.8125rem;
	background:rgba(253,126,23,1);
	border-radius:8px;
	font-size:15px;
	font-family:FZLanTingHei-R-GBK;
	font-weight:400;
	color:rgba(255,255,255,1);
	line-height:25px;
}
.why-line-index-nr{
	text-align: left;
	margin-top:17px;
	margin-bottom: 22px;
	width: 81%;
	font-size:12px;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(102,102,102,1);
	line-height:20px;
}
</style>
