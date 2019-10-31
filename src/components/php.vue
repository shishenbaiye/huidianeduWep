<template>
	<div class="php" >
		<img src="../assets/php/php33.png" class="banner" />
		<van-col class="php-index" type="flex">
			<van-row class="php-title">PHP全栈开发课程介绍</van-row>
			<van-row class="php-subtitle">良好的环境是学员学有所成的基础</van-row>
			<!-- 课程介绍-->
			<div type="flex" class="php-buzou">
				<van-row type="flex" justify="center" class="php-line">
					<van-col type="flex" align="center" class="php-line-index" style="margin-right: 1.7%;">
						<img class="php-img" src="../assets/php/php34.png"/>
						<van-row class="php-line-index-title">前端部分</van-row>
						<van-row class="php-line-index-subtitle">在教授PHP前我们会对学员进行前端内容教学，让学生掌握全栈开发技术</van-row>
					</van-col>
					<van-col type="flex" align="center" class="php-line-index" style="margin-left: 1.7%;">
						<img class="php-img" src="../assets/php/php35.png"/>
						<van-row class="php-line-index-title">基础部分</van-row>
						<van-row class="php-line-index-subtitle">基础课均由名师授课，突出方法注重能力，让学员更好掌握PHP基础知识</van-row>
					</van-col>
				</van-row>
				<van-row type="flex" justify="center" class="php-line">
					<van-col type="flex" align="center" class="php-line-index" style="margin-right: 1.7%;">
						<img class="php-img" src="../assets/php/php37.png"/>
						<van-row class="php-line-index-title">进阶部分</van-row>
						<van-row class="php-line-index-subtitle">掌握PHP基础语法后，将进行PHP面向对象高级编程；PHP设计模式等内容</van-row>
					</van-col>
					<van-col type="flex" align="center" class="php-line-index" style="margin-left: 1.7%;">
						<img class="php-img" src="../assets/php/php38.png"/>
						<van-row class="php-line-index-title">项目实战</van-row>
						<van-row class="php-line-index-subtitle">项目实战中学员将进行服务端和后台管理系统开发；公司门户及APP等内容开发</van-row>
					</van-col>
				</van-row>
			</div >
				<!-- 树状图 -->
			<div class="php-tree" ref="tree"  v-bind:style="{ height: height + 'px' }">
				<van-col class="tree-title">
					<van-row class="php-title" style="margin-top:5.5%;">慧点PHP全栈开发课程优势</van-row>
					<van-row class="php-subtitle">良好的环境是学员学有所成的基础</van-row>
				</van-col>
				<van-col class="tree-index">
					<van-row class="tree-index-line" type="flex" align="center" justify="space-between">
						<van-row class="tree-index-line-title">精英课程</van-row>
						<van-row class="tree-index-line-subtitle"> 定期邀请来自BAT，华为，中科院等专家一起探讨行业方向并进行深度技术交流和课程体系更新。 </van-row>
					</van-row>
					<van-row class="tree-index-line" type="flex" align="center" justify="space-between">
						<van-row class="tree-index-line-subtitle2">讲师，班主任全程陪同学学习，把握每个学员的学习状态</van-row>
						<van-row class="tree-index-line-title2">教学管理</van-row>	
					</van-row>
					<van-row class="tree-index-line" type="flex" align="center" justify="space-between">
						<van-row class="tree-index-line-title">项目实战</van-row>
						<van-row class="tree-index-line-subtitle">讲学练辅导相结合，实战项目紧贴行业技术发展趋势和企业实际需求</van-row>
					</van-row>
					<van-row class="tree-index-line" type="flex" align="center" justify="space-between">
						<van-row class="tree-index-line-subtitle2">师资团队由多年项目与教学经验的业内大咖组成，保障你学有所成</van-row>
						<van-row class="tree-index-line-title2">师资阵容</van-row>	
					</van-row>
				</van-col>
			</div>
			<!-- 老师 -->
			<van-col class="teacher" type="flex" align="center">
				<van-col class="tree-title">
					<van-row class="php-title" style="margin-top:5.5%;">慧点PHP讲师</van-row>
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
			api.$httpPOST("/master",{
				position:2
			}).then(res=>{
				this.master=res.data[0];
			})
			if(wid>=393){
				this.classFont.teacherIndexIntroduct=false;
				this.classFont.teacherIndexIntroduct1080p=true;
							
			}
		},
	  name: 'php',
	  props: {
	  msg: String
	}
}

</script>

<style>

</style>
