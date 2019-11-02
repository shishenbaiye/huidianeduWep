<template>
	<div class="newsindex">
		<van-row class="indexTitle">{{neirong.title}}</van-row>
		<van-row class="indexSubTitle">{{neirong.createtime}}</van-row>
		<div v-html="neirong.content" class="new-index-index" >
		</div>
		<div class='popContainer' v-if="mshow">
			<van-loading size="24px">加载中...</van-loading>
		</div>
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
	import { Popup } from 'vant';
	import { Loading } from 'vant';
	import { Overlay } from 'vant';
	
	export default{
	components:{
				
			},
			data () {
				return {
					neirong:{},
					mshow:true
				}
			},
			methods: {
				getLocalTime(nS) {  
					return new Date(parseInt(nS) * 1000).toLocaleDateString().replace(/:\d{1,2}$/,' ');  
				},
				 
				
			},
			created(){
				var that = this
				console.log(this.$route.query.id)	
				api.$httpPOST("/newone",{
					id:this.$route.query.id
				}).then(res=>{
					this.neirong = res.data
					console.log(this.neirong)
					this.neirong.createtime =this.getLocalTime(this.neirong.createtime);
					
					that.$nextTick(function () {
						console.log("4秒l .....")
						let aaa = document.querySelector(".new-index-index img");
						aaa.style.width = "100%"
						aaa.style.height = ""
						var bbb = document.querySelector(".new-index-index img");
						bbb.id = "img1";
						img1.onload = function() {
							console.log(1111)
						   that.mshow = false;
						};
					})
					
					
					// setTimeout(function () {
						
					// } , 4000)
					
					// let element = document.getElementsByClassName("new-index-index");
					// console.log(element[0].document.getElementsByTagName("img"))
				})
				
				
			},
			mounted(){
				
			},
		  name: 'newsIndex',
		  props: {
		  msg: String
		}
	}
	
</script>

<style>
.newsindex{
	display: flex;
	flex-direction: column;
	align-items: center;
}
.indexSubTitle{
	font-size:13px;
	font-family:PingFang SC;
	font-weight:500;
	color:rgba(153,153,153,1);
	line-height:24px;
	margin-top: 12px;
}
.newsindex{
	width: 100%;
}
.new-index-index{
	width:91.87%; 
	display: flex;
	flex-direction: column;
}
.new-index-index p{
	text-align: justify;
}
.indexTitle{
	width: 68.8%	;
	font-size:17px;
	font-family:PingFang SC;
	font-weight:500;
	color:rgba(51,51,51,1);
	line-height:24px;
	margin-top: 28px;
}
</style>
