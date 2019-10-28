<template>
	<div class="news">
		<img src="../assets/news/banner.png" class="banner" />
		<!-- 新闻1 -->
		<van-col class="news-index" type="flex" align="center">
			<!-- 1 -->
			<van-row class="news-line" type="flex" align="center">
				<div class="news-line-img" ref="imgHeight" >
					<van-image src="http://m.huidianedu.com/wep/about/news1.png" style="height: 100%;width: 100%;margin-top: 10%;margin-bottom: 5%;"></van-image>
				</div>
				<van-col class="news-line-index" v-bind:style="{ height : height + 'px' }">
					<van-col class="news-line-index-line" type="flex">
						<van-row class="news-line-index-title">慧点10月就业信息，平均薪资8K</van-row>
						<van-row class="news-line-index-subtitle">在慧点科技2019年10月份发布的报告中 截至到今天，我公司已经 </van-row>	
					</van-col>
					<van-row class="news-line-index-time" type="flex">2019-10-14</van-row>	
				</van-col>
			</van-row>
			<!-- 2 -->
			<van-row class="news-line" type="flex" align="center">
				<div class="news-line-img" ref="imgHeight" >
					<van-image src="http://m.huidianedu.com/wep/about/news1.png" style="height: 100%;width: 100%;margin-top: 10%;margin-bottom: 5%;"></van-image>
				</div>
				<van-col class="news-line-index" v-bind:style="{ height : height + 'px' }">
					<van-col class="news-line-index-line" type="flex">
						<van-row class="news-line-index-title">慧点10月就业信息，平均薪资8K</van-row>
						<van-row class="news-line-index-subtitle">在慧点科技2019年10月份发布的报告中 截至到今天，我公司已经 </van-row>	
					</van-col>
					<van-row class="news-line-index-time" type="flex">2019-10-14</van-row>	
				</van-col>
			</van-row>
			<van-row class="news-line" type="flex" align="center">
				<div class="news-line-img" ref="imgHeight" >
					<van-image src="http://m.huidianedu.com/wep/about/news1.png" style="height: 100%;width: 100%;margin-top: 10%;margin-bottom: 5%;"></van-image>
				</div>
				<van-col class="news-line-index" v-bind:style="{ height : height + 'px' }">
					<van-col class="news-line-index-line" type="flex">
						<van-row class="news-line-index-title">慧点10月就业信息，平均薪资8K</van-row>
						<van-row class="news-line-index-subtitle">在慧点科技2019年10月份发布的报告中 截至到今天，我公司已经 </van-row>	
					</van-col>
					<van-row class="news-line-index-time" type="flex">2019-10-14</van-row>	
				</van-col>
			</van-row>
			<van-row class="news-line" type="flex" align="center">
				<div class="news-line-img" ref="imgHeight" >
					<van-image src="http://m.huidianedu.com/wep/about/news1.png" style="height: 100%;width: 100%;margin-top: 10%;margin-bottom: 5%;"></van-image>
				</div>
				<van-col class="news-line-index" v-bind:style="{ height : height + 'px' }">
					<van-col class="news-line-index-line" type="flex">
						<van-row class="news-line-index-title">慧点10月就业信息，平均薪资8K</van-row>
						<van-row class="news-line-index-subtitle">在慧点科技2019年10月份发布的报告中 截至到今天，我公司已经 </van-row>	
					</van-col>
					<van-row class="news-line-index-time" type="flex">2019-10-14</van-row>	
				</van-col>
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
	
	
	export default{
		components:{
				
			},
			data () {
				return {
					height:0
				}
			},
			methods: {
				
			},
			mounted(){
				let height = this.$refs.imgHeight.offsetHeight;
				this.height = height;
				console.log("height:"+this.height);
			},
		  name: 'news',
		  props: {
		  msg: String
		}
	}
</script>

<style>
.news-index{
	width: 100%;
	margin-bottom: 0.75rem;
}
.news-line{
	width:94.67%;
	background:rgba(255,255,255,1);
	box-shadow:0px 3px 12px 0px rgba(42,55,206,0.12);
	margin-top: 0.75rem;
}
.news-line-img{
	width: 26.67%;
	margin-left: 2%;
}
.news-line-index{
	width: 73.33%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.news-line-index-line{
	margin-top: 12px;
}
.news-line-index-title{
	width: 94%;
	font-size:16px;
	font-family:PingFang SC;
	font-weight:bold;
	color:rgba(51,51,51,1);
	line-height:12px;
	text-align: left;
}
.news-line-index-subtitle{
	width: 94%;
	font-size:13px;
	font-family:PingFang SC;
	font-weight:500;
	color:rgba(153,153,153,1);
	line-height:16px;
	text-align: left;
	margin-top: 0.5625rem;
}
.news-line-index-time{
	height:0.8125rem ;
	font-size:13px;
	font-family:Acumin Variable Concept;
	font-weight:400;
	color:rgba(153,153,153,1);
	line-height:12px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin: 3%;
	width: 94%;
}
</style>
