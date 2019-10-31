<template>
	<div class="Master" ref="master">
		<img src="../assets/master/teacherbanner.png" class="banner" />
		<van-col class="environment" type="flex" span="24" align="center" style="margin: 0;background-color: #FFFFFF;">
			<van-row class="environment-title">师资专家</van-row>
			<van-row class="environment-subtitle">优秀的师资力量是就业的基础保障</van-row>
		</van-col>
		<van-row class="teacher-line" type="flex" style="margin-top:0.625rem;margin-bottom:0.3125rem;" v-for="item in master">
			<van-image class="teacher-img" :src="item.image"></van-image>
			<van-col class="teacher-index">
				<van-row class="teacher-index-name">{{item.name}} {{item.comment}}</van-row>
				<van-row v-bind:class="classFont">{{item.introduction}}</van-row>
			</van-col>
		</van-row>
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
	import { Popup } from 'vant';
	import { Loading } from 'vant';
	import { Overlay } from 'vant';

	import api from '../api.js' 
		export default{
			components:{
				
				},
				data () {
				            return {
								classFont: {
								    teacherIndexIntroduct: true,
								    teacherIndexIntroduct1080p: false
								},
								master:{},
								mshow:true
				            }
				        },
				created(){
					
				},
					
				mounted(){	
					let that = this;
					api.$httpGET('/master',{})  //获取老师信息
					.then(res => {
					     console.log(res.data);
						 let master = res.data;
						 this.master = master;
						 this.mshow = false;
					}).catch(err => {
					
					})
					let wid = this.$refs.master.offsetWidth;
					if(wid>=393){
						this.classFont.teacherIndexIntroduct=false;
						this.classFont.teacherIndexIntroduct1080p=true
					}
				},
				methods: {
					pay(){
						console.log("点击成功")
					},
					dialog(){
					
					}
				},
			  name: 'master',
			  props: {
			  msg: String
			}
		}
</script>

<style>
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
.popContainer{
        position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 999999;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    background: rgba(0,0,0,0.8);
}
</style>
