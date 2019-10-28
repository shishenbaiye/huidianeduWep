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
						<van-row class="tree-index-line-subtitle"> 定期邀请来自bat，华为，中科院等专家一起探讨行业方向并进行深度技术交流和课程体系更新。 </van-row>
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
					<van-row class="php-title" style="margin-top:5.5%;">慧点Java讲师</van-row>
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
	  name: 'php',
	  props: {
	  msg: String
	}
}

</script>

<style>
.php{
	display: flex;
	flex-direction: column;
}
.php-index{
	width: 100%;
}
.php-title{
	font-size: 1.25rem;
	color: #333333;
	margin-top: 1.6875rem;
}
.php-subtitle{
	font-size: 0.8rem;
	color: #999999;
	margin-top: 0.3125rem;
}
.php-buzou{
	margin-top: 1.3125rem;
	width: 100%;
}
.php-line{
	width: 100%;
	margin-bottom: 0.9375rem;
}
.php-line-index{
	width: 44.67%;
	background:rgba(255,255,255,1);
	box-shadow:0px 0px 5px 0px rgba(19,24,126,0.15);
	border-radius:4px;
}
.php-line-index-title{	
	color: #333333;
	font-size: 1rem;
	font-weight: 500;
}
.php-line-index-subtitle{
	width: 85.67%;
	margin-bottom: 1.3125rem;
	margin-top: 0.875rem;
	color: #666666;
	font-size: 0.85rem;
	line-height: 1.125rem;
	text-align: left;
	font-weight: 400;
}
.php-img{
	width: 42.39%;
	margin-top: 0.9375rem;
}
.php-tree{
	width: 100%;
	background-color:#f5f6fd;
}
.tree-title{
	width: 100%;
}
.tree-index{
	width: 100%;
	height: 79%;
	background-image: url(../assets/tree.png);
	background-size:contain;
	background-repeat:no-repeat;
	background-position:center;
	margin-top: 5%;
	margin-bottom:3%;
}
.tree-index-line{
	width: 100%;
	height: 25%;
}
.tree-index-line-title{
	font-size:16px;
	font-family:PingFang SC;
	font-weight:500;
	color:rgba(51,51,51,1);
	line-height:12px;
	margin-left: 11%;
}
.tree-index-line-subtitle{
	width: 38%;
	font-size: 0.85rem;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(102,102,102,1);
	line-height:18px;
	text-align: left;
	margin-right: 3%;
}
.tree-index-line-title2{
	font-size:16px;
	font-family:PingFang SC;
	font-weight:500;
	color:rgba(51,51,51,1);
	line-height:12px;
	margin-right: 11%;
}
.tree-index-line-subtitle2{
	width: 38%;
	font-size: 0.85rem;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(102,102,102,1);
	line-height:18px;
	text-align: left;
	margin-left: 5%;
}
.teacher{
	width: 100%;
}
.teacher-line{
	width: 96%;
	margin-top: 5rem;
	margin-bottom: 1.875rem;
}
.teacher-img{
	width: 31%;
}
.teacher-index{
	width: 69%;
	background-color:#f5f6fd ;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.teacher-index-name{
	font-size: 0.9375rem;
	font-weight:400;
	color:rgba(51,51,51,1);
	line-height:1.9375rem;
	margin-top: 3%;
}
.teacher-index-introduct{
	width: 90%;
	font-size:11px;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(102,102,102,1);
	line-height:17px;
	margin-top: 3px;
	text-align: left;
}
.teacher-index-introduct1080p{
	width: 90%;
	font-size:13px;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(102,102,102,1);
	line-height:17px;
	margin-top: 3px;
	text-align: left;
}
.teacherIndexIntroduct{
	width: 90%;
	font-size:11px;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(102,102,102,1);
	line-height:17px;
	margin-top: 3px;
	text-align: left;
}
.teacherIndexIntroduct1080p{
	width: 90%;
	font-size:12px;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(102,102,102,1);
	line-height:17px;
	margin-top: 3px;
	text-align: left;
}
</style>
