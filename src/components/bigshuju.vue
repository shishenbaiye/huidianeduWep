<template>
	<div class="bigshuju" ref="bigshuju" >
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
				<router-link to="/master">
				<van-row class="teacher-line" type="flex">
					<van-image class="teacher-img" :src="master.image"></van-image>
					<van-col class="teacher-index">
						<van-row class="teacher-index-name">{{master.name}} {{master.comment}}</van-row>
						<van-row v-bind:class="classFont">{{master.introduction}}</van-row>
					</van-col>
				</van-row>
				</router-link>
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
	import api from '../api.js'
	
	export default{
		components:{
				
			},
			data () {
				return {
					master:{},
					classFont:{
						teacherIndexIntroduct: true,
						teacherIndexIntroduct1080p: false	
					}
				}
			},
			methods: {
				
			},
			mounted(){
					api.$httpPOST("/master",{
						position:4
					}).then(res=>{
						this.master=res.data[1];
					})
					let wid = this.$refs.bigshuju.offsetWidth;
					if(wid>=393){
						this.classFont.teacherIndexIntroduct=false;
						this.classFont.teacherIndexIntroduct1080p=true;
									
					}
			},
		  name: 'bigshuju',
		  props: {
		  msg: String
		}
	}
	
</script>

<style>

</style>
