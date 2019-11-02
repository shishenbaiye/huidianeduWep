<template>
	<div class="news" ref="news">
		<img src="../assets/news/banner.png" class="banner" />
		<!-- 新闻1 -->
		<van-col class="news-index" type="flex" align="center">
			<!-- 1 -->
			<van-row class="news-line" type="flex" align="center" v-for="item in news" @click="Cnews(item.id)" >
				<div class="news-line-img"  ref="imgHeight" >
					<van-image :src="item.image" style="height: 100%;width: 100%;margin-top: 10%;margin-bottom: 5%;" ></van-image>
				</div>
				<van-col class="news-line-index" v-bind:style="{ height : height + 'px'}">
					<van-col class="news-line-index-line" type="flex" v-bind:style="{ 'margin-top' : margin + 'px'}">
						<van-row v-bind:class="sfont">{{item.title}}</van-row>
						<van-row v-bind:class="sedFont">{{item.subIntroduction}}</van-row>	
					</van-col>
					<van-row class="news-line-index-time" type="flex">{{item.createtime}}</van-row>	
				</van-col>
			</van-row>
		</van-col>
		<div class='popContainer' v-if="mshow">
			<van-loading size="24px">加载中...</van-loading>
		</div>
	</div>
</template>

<script src="https://cdn.jsdelivr.net/npm/jutils-src"></script>
<script>
	import { Icon } from 'vant';
	import Vue from 'vue';
	import { Swipe, SwipeItem } from 'vant';
	import { Lazyload } from 'vant';
	import { Image } from 'vant';
	import { Row, Col } from 'vant';
	import { Field } from 'vant';
	import api from '../api.js'
	import jutiles from '../../node_modules/jutils-src/date.js'
	import { Popup } from 'vant';
	import { Loading } from 'vant';
	import { Overlay } from 'vant';
	export default{
		components:{
				
			},
			data () {
				return {
					margin:12,
					height:80,
					sfont:{
						subFont:false,
						subFont1080:true
					},
					sedFont:{
						sedFont:false,
						sedFont1080:true
					},
					news:{},
					mshow:true
				}
			},
			methods: {
				Cnews(e){
					this.$router.push({ path: '/newsIndex', query: { id: e }});
				},
				getLocalTime(nS) {
					return new Date(parseInt(nS) * 1000).toLocaleDateString().replace(/:\d{1,2}$/,' ');  
				}
			},
			created(){
				
			},
			mounted(){
				
				var that = this;
				api.$httpPOST("/news",{
					type:0,
					page:1
				}).then(res=>{
					
					for(let i = 0;i < res.data.data.length;i++){
						res.data.data[i].title = res.data.data[i].title.substr(0,13)+"...";
						res.data.data[i].subIntroduction = res.data.data[i].subIntroduction.substr(0,30)+"...";
						res.data.data[i].createtime = this.getLocalTime(res.data.data[i].createtime);
					}
					 that.news = res.data.data
					 that.mshow = false
					let width =  that.$refs.news.offsetWidth;
					if(width<375){
						 that.sfont.subFont = true;
						 that.sfont.subFont1080 = false;
						 that.sedFont.sedFont = true;
						 that.sedFont.sedFont1080 = false;
						 that.height = 60;
						 that.margin = 6;
					}
				})
				
			},
		  name: 'news',
		  props: {
		  msg: String
		}
	}
</script>

<style>
.sedFont1080{
	width: 94%;
	font-size:13px;
	font-family:PingFang SC;
	font-weight:500;
	color:rgba(153,153,153,1);
	line-height:16px;
	text-align: left;
	margin-top: 0.3rem;
}
.sedFont{
	width: 94%;
	font-size:11px;
	font-family:PingFang SC;
	font-weight:500;
	color:rgba(153,153,153,1);
	line-height:16px;
	text-align: left;
	margin-top: 0.3rem;
}
.subFont1080{
	width: 94%;
	font-size:16px;
	font-family:PingFang SC;
	font-weight:bold;
	color:rgba(51,51,51,1);
	line-height:12px;
	text-align: left;
}
.subFont{
	width: 94%;
	font-size:14px;
	font-family:PingFang SC;
	font-weight:bold;
	color:rgba(51,51,51,1);
	line-height:5px;
	text-align: left;
}
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
	margin-top: 6px;
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
	margin: 1%;
	width: 94%;
}
</style>
