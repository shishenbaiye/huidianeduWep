<template>
	<div class="index" ref="index">
		<!-- 轮播 -->
		<van-swipe :autoplay="3000" indicator-color="white" class="swiper" style="margin-top: 0.9375rem;border-radius:8px 8px 12px 12px;width:93.6%;">
		  <van-swipe-item v-for="item in lunbo"><img class="swiper-img" :src="item.image"/></van-swipe-item>
		</van-swipe>
		<!-- 服务菜单 -->
		<van-row class="mid" type="flex" >
			<van-col span="6">
				<router-link to="/subject">
				<img class="mid-img" src="../assets/index/kecheng.png" />
				<van-row v-bind:class="midFont">精品课程</van-row>
				</router-link>
			</van-col>
			<van-col span="6">
				<router-link to="/master">
				<img class="mid-img" src="../assets/index/jiangshi.png" />
				<van-row v-bind:class="midFont">师资专家</van-row>
				</router-link>
			</van-col>	
			<van-col span="6">
				<router-link to="/baozhang">
				<img class="mid-img" src="../assets/index/fuwu.png" />
				<van-row v-bind:class="midFont">就业服务</van-row>
				</router-link>
			</van-col>	
			<van-col span="6">
				<router-link to="/about">
				<img class="mid-img" src="../assets/index/guanyu.png" />
				<van-row v-bind:class="midFont">关于慧点</van-row>
				</router-link>
			</van-col>	
		</van-row>
		<!-- 阴影 -->
		<van-row class="cover"></van-row>
		<!-- 六大精品课程 -->
		<van-col class="subject" type="flex">
			<van-row class="subject-title" type="flex" justify="space-between" align="center">
				<van-row span='6'>六大精品课程</van-row>
				<van-row span='6' type="flex" align="center" style="font-size: 0.8125rem;color: #666666;">
					<img class='sub-img' src="../assets/index/hot.png"/>火热报名中
				</van-row>
			</van-row>
			<van-col class="subject-index" type="flex">
				<van-row class="subject-index-row" type="flex" justify="space-around">
					<router-link to="/java"><van-image class="subject-index-row-imga" src="http://m.huidianedu.com/wep/java.png" /></router-link>
					<router-link to="/web"><van-image class="subject-index-row-imga" src="http://m.huidianedu.com/wep/web.png" /></router-link>
				</van-row>
				<van-row class="subject-index-row" type="flex" justify="space-around">
					<router-link to="/ui"><van-image class="subject-index-row-imga" src="http://m.huidianedu.com/wep/ui.png" />	</router-link>
					<router-link to="/python"><van-image class="subject-index-row-imga" src="http://m.huidianedu.com/wep/PYthon.png" /></router-link>
				</van-row>
				<van-row class="subject-index-row" type="flex" justify="space-around">
					<router-link to="/bigshuju"><van-image class="subject-index-row-imga" src="http://m.huidianedu.com/wep/bigshuju.png" /></router-link>
					<router-link to="/php"><van-image class="subject-index-row-imga" src="http://m.huidianedu.com/wep/PHP.png" /></router-link>
				</van-row>
			</van-col>
		</van-col>
		<!-- 阴影 -->
		<van-row class="cover"></van-row>
		<!-- 讲师轮播 -->
		<van-col class="master">
			<van-row class="subject-title" type="flex" justify="space-between" align="center">
				<van-row span='6'>慧点知名讲师</van-row>
				<router-link to="/master">
				<van-row span='6' type="flex" align="center" style="font-size: 0.8125rem;color: #666666;">
					更多<img class='master-img' src="../assets/rightjt.png"/>
				</van-row>
				</router-link>
			</van-row>
			<van-swipe :autoplay="3000" indicator-color="white" class="master-swiper">
			  <van-swipe-item class="master-swiper-item">
					  <van-image class="master-swiper-img" src="http://m.huidianedu.com/wep/001.png"/>  
					  <van-image class="master-swiper-img" src="http://m.huidianedu.com/wep/002.png" />
					  <van-image class="master-swiper-img" src="http://m.huidianedu.com/wep/003.png" />
			  </van-swipe-item>
			  <van-swipe-item class="master-swiper-item"> 
			      <van-image class="master-swiper-img" src="http://m.huidianedu.com/wep/001.png"/>
				  <van-image class="master-swiper-img" src="http://m.huidianedu.com/wep/002.png" />
				  <van-image class="master-swiper-img" src="http://m.huidianedu.com/wep/003.png" />
			  </van-swipe-item>
			</van-swipe>
		</van-col>
		<!-- 提交咨询 -->
		<van-col class="table">
			<van-row class="table-title">立即在线咨询</van-row>
			<van-row class="table-line" type="flex" align="center" @click="nameInput">
				<van-image class="table-line-img" src="http://m.huidianedu.com/wep/3.png" fit="contain" v-if="stateName"/>
				<van-row class="table-line-text" v-if="stateName">姓名</van-row>
				<input class="table-line-input" v-if="inputName" v-model="name"/>
			</van-row>
			<van-row class="table-line" type="flex" align="center" @click="subjectInput">
				<van-image class="table-line-img" src="http://m.huidianedu.com/wep/4.png" fit="contain" v-if="stateSubject"/>
				<van-row class="table-line-text" v-if="stateSubject">咨询课程</van-row>
				<input class="table-line-input" v-if="inputSubject" v-model="subject"/>
			</van-row>
			<van-row class="table-line" type="flex" align="center" @click="phoneInput">
				<van-image class="table-line-img" src="http://m.huidianedu.com/wep/5.png" fit="contain" v-if="statePhone"/>
				<van-row class="table-line-text" v-if="statePhone">联系电话</van-row>
				<input class="table-line-input" v-if="inputPhone" v-model="phone"/>
			</van-row>
			<van-row class="table-line-btn" type="flex" align="center" justify="center" style="margin-bottom:1.5rem;">
				<van-button type="warning" class="table-line-btn" style="font-size:18px;border:0;border-radius: 4px; background-color:#FE8D1F;width: 100%;margin-top:0;" @click="tablePost">提交咨询</van-button>
			</van-row>
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
import { Toast } from 'vant';
import api from '../api.js' 

	export default{
		components:{
			
			},
			data () {
			            return {
							stateName:true,
							stateSubject:true,
							statePhone:true,
							inputName:false,
							inputSubject:false,
							inputPhone:false,
							name:null,
							subject:null,
							phone:null,
							lunbo:{},
							midFont: {
							    midfont: true,
							    midfont1080p: false
							},
			            }
			        },
					created() {
						
						// a
					},
			mounted(){
				api.$httpGET("/lunbo",{})
				.then(res=>{
					this.lunbo = res.data
				}).catch(err => {
					
				})
				let indexWid = this.$refs.index.offsetWidth;
				console.log(indexWid)
				if(indexWid >= 393){
					this.midFont.midfont=false;
					this.midFont.midfont1080p=true;
				}
				// .then(res=>{
				// 	this.masterimg = res.data
				// }).catch(err => {
					
				// })
			},
			methods: {
				pay(){
					console.log("点击成功")
				},
				nameInput(){
					this.stateName=false;
					this.inputName=true
				},
				subjectInput(){
					this.stateSubject=false;
					this.inputSubject=true
				},
				phoneInput(){
					this.statePhone=false;
					this.inputPhone=true
				},
				tablePost(){
					if(this.name==null){
						 this.$toast("姓名不能为空！")
						 return false;
					}
					if(this.subject==null){
						this.$toast("课程不能为空！")
						return false;
					}
					if(this.phone==null){
						this.$toast("电话不能为空！")
						return false;
					}
					/**/
					Toast.success('   提交成功， 感谢您的咨询！');
				}
			},
		  name: 'index',
		  props: {
		  msg: String
		}
	}
</script>

<style>
.index{
	display: flex;
	flex-direction: column;
	align-items: center;
}
.swiper{
	width: 100%;
}
.swiper-img{
	width: 100%;
	height: 100%;
}
.mid{
	height: 4.34375rem;
	width: 100%;
	margin-top: 1rem;
	margin-bottom: 1rem;
}
.mid-img{
	height: 2.875rem;
	width: 2.875rem;
}
.midfont{
	margin-top:0.2rem;
	height: 0.75rem;
	font-size: 0.75rem;
}
.midfont1080p{
	margin-top:0.2rem;
	height: 0.75rem;
	font-size: 0.82rem;
}
.mid-font{
	margin-top:0.2rem;
	height: 0.75rem;
	font-size: 0.75rem;
}
.cover{
	height: 0.625rem;
	width: 100%;
	background-color: #E5EBF9;
}
.subject{
	width: 100%;
}
.subject-title{
	height: 3.4375rem;
	font-size: 1rem;
	padding: 0px 0.875rem;
}
.sub-img{
	height: 1.125rem;
	width: 1.125rem;
	margin-right: 0.3125rem;
}
.subject-index{
	width: 100%;
}
.subject-index-row{
	width: 96%;
	padding: 0 2%;
	margin-bottom: 0.9375rem;
}
.subject-index-row-imga{
	width:92.33%;
}
.master{
	width: 100%;
	margin-bottom: 1.375rem;
}
.master-img{
	width:0.5rem;
	margin-left: 0.375rem;
}
.master-swiper{
	width: 100%;
}
.master-swiper-item{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}
.master-swiper-img{
	width:29.33% ;
	border-radius: 0.3125rem;
}
.master-swiper-cover{
	height: 2.875rem;
	width: 30%;
	background-color: #000000;
	margin-left: 0px;
}
.table{
	width: 100%;
	background-size: cover;
	background-image:url(../assets/index/bgzixun.png) ;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.table-title{
	color: #FFFFFF;
	font-size: 1.125rem;
	margin-top: 1.25rem;
}
.table-line{
	width: 84.53%;
	height: 2.75rem;
	border:1px solid rgba(201,195,253,1);
	border-radius: 0.3125rem;
	margin-top: 1.25rem;
}
.table-line-btn{
	width: 84.53%;
	height: 2.75rem;
	border-radius: 0.3125rem;
	color: #fff;
	font-size: 1rem;
	background-color: #FE8D1F;
	margin-top: 1.25rem;
}
.table-line-img{
	width: 6.31%;
	height: 40.91%;
	margin-left: 4.73%;
}
.table-line-text{
	color: #A6BDFE;
	margin-left: 2.67%;
	font-size: 0.9375rem;
}
.table-line-input{
	padding: 0;
	border: 0;
	color: #A6BDFE;
	BACKGROUND-COLOR: transparent;
	width: 93%;
	margin-left: 2.67%;
}
.table-cell{
	
}
.about{
	display: flex;
	flex-direction: column;
	align-items: center;
}
.banner{
	width: 100%;
}
.introduct{
	width: 90.67%;
	margin-top: -2rem;
	height: 6.875rem;
	background:#fff;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius:0.21875rem;
	box-shadow:0px 3px 7px 1px rgba(0, 0, 0, 0.1);
}
.introduct-text{
	margin-top: 2%;
	text-align: left;
	width: 86%;
	height: 63.64%;
	line-height: 1.2rem;
	color: #555555;
	font-size: 0.86rem;
}
.environment{
	margin-top: 1.875rem;
	background-color: #f8f8f8;
}
.environment-title{
	font-size: 1.25rem;
	color: #333333;
	margin-top: 1.5625rem;
}
.environment-subtitle{
	font-size: 0.8rem;
	color: #999999;
	margin-top:0.375rem;
}
.subject-index-about{
	width: 100%;
	margin-top: 1.5rem;
}
.subject-index-row{
	width: 96%;
	padding: 0 2%;
	margin-bottom: 0.9375rem;
}
.subject-index-row-img{
	width:47.33%;
}
.develop{
	background-color: #333337;
}
.develop-title{
	font-size: 1.25rem;
	color: #FFFFFF;
	margin-top: 1.5625rem;
}
.develop-subtitle{
	font-size: 0.75rem;
	color:#AFADCB;
	margin-top:0.375rem;
	margin-bottom: 1.4375rem;
}
.develop-img{
	margin-bottom: 2.625rem;
}
.baozhang-index{
	width: 100%;
	margin-bottom: 1.875rem;
}
.baozhang-index-tree{
	margin-top: 26px;
}
.baozhang-index-tree-line{
	width: 23.33%;
}
.baozhang-index-img{
	
}
.baozhang-index-text{
	padding: 10%;
	width: 80%;
	background:rgba(255,255,255,1);
	border:1px solid rgba(238,238,238,1);
	border-radius:5px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size:12px;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(51,51,51,1);
	line-height:17px;
	text-align: left;
}
.qiye{
	width: 100%;
	background-color: #f8f8f8;
}
.qiye-subtitle{
	width: 85.7%;
	font-size:12px;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(102,102,102,1);
	line-height:18px;
	margin: 18px;
	text-align: left;
}
.qiye-img{
	width: 100%;
	margin-bottom: 38px;
}
.qiye-img-line{
	width: 90%;
}
.qiye-img-line-index{
	width: 33%;
	margin: 0 0.15%;
}
.Master{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 10px;
}
.Master-index{
	width: 100%;
}
.Master-line{
	width: 93%;
}
.Master-img{
	width: 30%;
}
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
.python{
	display: flex;
	flex-direction: column;
}
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
