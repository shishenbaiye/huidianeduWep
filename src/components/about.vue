<template>
	<div class="about">
		<img src="../assets/about/banner.png" class="banner" />
		<div class="introduct">
			<p class="introduct-text">{{text}}</p>
		</div>
		<!-- 教学环境 -->
		<van-col class="environment" type="flex" span="24" align="center">
			<van-row class="environment-title">教学环境</van-row>
			<van-row class="environment-subtitle">良好的环境是学员学有所成的基础</van-row>
			<van-col class="subject-index-about" type="flex">
				<van-row class="subject-index-row" type="flex" justify="space-around">
					<van-image class="subject-index-row-img" src="http://m.huidianedu.com/wep/about/abouthj01.png" />
					<van-image class="subject-index-row-img" src="http://m.huidianedu.com/wep/about/abouthj02.png" />
				</van-row>
				<van-row class="subject-index-row" type="flex" justify="space-around">
					<van-image class="subject-index-row-img" src="http://m.huidianedu.com/wep/about/abouthj03.png" />
					<van-image class="subject-index-row-img" src="http://m.huidianedu.com/wep/about/abouthj04.png" />
				</van-row>
			</van-col>
		</van-col>
		<!-- 发展历程 -->
		<van-col class="develop" type="flex" span="24" align="center">
			<van-row class="develop-title">发展历程</van-row>
			<van-row class="develop-subtitle">慧点科技缔造一站式人才输送平台</van-row>
			<van-image class="develop-img" width="82%" src="http://m.huidianedu.com/wep/about/abouttext.png"></van-image>
		</van-col>
	</div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Image } from 'vant';
import { Row, Col } from 'vant';
	export default{
		components:{
			
			},
			data () {
			   return{
				   text:" 河南慧点信息科技有限公司作为河南总部，在技术研发的基础上，积极参与企业新型学徒制的培养，毕业学徒已在百度、腾讯、小米、阿里、蘑菇街、洋葱数学等知名公司就职。",
			   }
			},
			methods: {
			
			},
		  name: 'about',
		  props: {
		  msg: String
		}
	}
</script>

<style>

</style>
