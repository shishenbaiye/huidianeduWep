<template>
	<div class="ui" >
		<img src="../assets/ui/banner.png" class="banner" />
		<van-col class="php-index" type="flex">
			<van-row class="php-title">UI精品课程介绍</van-row>
			<van-row class="php-subtitle">我们为学员打造了成熟高效的UI课程体系</van-row>
			<!-- 课程介绍-->
			<div type="flex" class="php-buzou">
				<van-row type="flex" justify="center" class="php-line">
					<van-col type="flex" align="center" class="php-line-index" style="margin-right: 1.7%;">
						<img class="php-img" src="../assets/ui/001.png"/>
						<van-row class="php-line-index-title">软件基础+电商</van-row>
						<van-row class="php-line-index-subtitle"> 精讲各个设计软件，页、logo等设计方法</van-row>
					</van-col>
					<van-col type="flex" align="center" class="php-line-index" style="margin-left: 1.7%;">
						<img class="php-img" src="../assets/ui/002.png"/>
						<van-row class="php-line-index-title">创意手绘</van-row>
						<van-row class="php-line-index-subtitle">美术基础、创意设计形式、色彩、空间、手绘基础等</van-row>
					</van-col>
				</van-row>
				<van-row type="flex" justify="center" class="php-line">
					<van-col type="flex" align="center" class="php-line-index" style="margin-right: 1.7%;">
						<img class="php-img" src="../assets/ui/003.png"/>
						<van-row class="php-line-index-title">页面设计</van-row>
						<van-row class="php-line-index-subtitle"> 网页设计规范、文字规 范、尺寸规范等，标注 、切图、代码衔接 </van-row>
					</van-col>
					<van-col type="flex" align="center" class="php-line-index" style="margin-left: 1.7%;">
						<img class="php-img" src="../assets/ui/004.png"/>
						<van-row class="php-line-index-title">H5+界面</van-row>
						<van-row class="php-line-index-subtitle">学习前端编程语言、互原型绘制及AE动效</van-row>
					</van-col>
				</van-row>
			</div >
				<!-- 树状图 -->
			<div class="php-tree" ref="tree"  v-bind:style="{ height: height + 'px' }">
				<van-col class="tree-title">
					<van-row class="php-title" style="margin-top:5.5%;">慧点UI精品课程优势</van-row>
					<van-row class="php-subtitle">多位业内顶尖设计师与产品经理专职授课</van-row>
				</van-col>
				<van-col class="tree-index">
					<van-row class="tree-index-line" type="flex" align="center" justify="space-between">
						<van-row class="tree-index-line-title">课程体系</van-row>
						<van-row class="tree-index-line-subtitle">完善的课程体系与前瞻的技术，结合前沿的技能, 竭力培养UI行业翘楚人才</van-row>
					</van-row>
					<van-row class="tree-index-line" type="flex" align="center" justify="space-between">
						<van-row class="tree-index-line-subtitle2">慧点UI讲师教学方法先进，好培养学员的设计思维和</van-row>
						<van-row class="tree-index-line-title2">名师教学</van-row>	
					</van-row>
					<van-row class="tree-index-line" type="flex" align="center" justify="space-between">
						<van-row class="tree-index-line-title">项目实战</van-row>
						<van-row class="tree-index-line-subtitle">讲学练辅导相结合，实战项目紧贴行业技术发展趋势和企业实际需求</van-row>
					</van-row>
					<van-row class="tree-index-line" type="flex" align="center" justify="space-between">
						<van-row class="tree-index-line-subtitle2"> 小班授课讲师能更好辅 导学员，根据学员学习 情况，进行科学化教学 </van-row>
						<van-row class="tree-index-line-title2">小班面授</van-row>	
					</van-row>
				</van-col>
			</div>
			<!-- 老师 -->
			<van-col class="teacher" type="flex" align="center">
				<van-col class="tree-title">
					<van-row class="php-title" style="margin-top:5.5%;">慧点大数据讲师</van-row>
					<van-row class="php-subtitle">良好的环境是学员学有所成的基础</van-row>
				</van-col>
				<van-row class="teacher-line" type="flex">
					<van-image class="teacher-img" :src="master.image"></van-image>
					<van-col class="teacher-index">
						<van-row class="teacher-index-name">{{master.name}} {{master.comment}}</van-row>
						<van-row v-bind:class="classFont">{{master.introduction}}</van-row>
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
	import api from '../api.js'
	
	export default{
		components:{
				
			},
			data () {
				return {
					master:{},
					height:580,
					classFont:{
						teacherIndexIntroduct: true,
						teacherIndexIntroduct1080p: false	
					}
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
				if(wid>=393){
					this.classFont.teacherIndexIntroduct=false;
					this.classFont.teacherIndexIntroduct1080p=true;			
				}
				api.$httpPOST("/master",{
					position:5
				}).then(res=>{
					this.master=res.data[0];
				})
			},
		  name: 'ui',
		  props: {
		  msg: String
		}
	}
	
</script>

<style>
</style>
