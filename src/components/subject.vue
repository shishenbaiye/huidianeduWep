<template>
	<div class="about">
		<img src="../assets/subject/jingpinbanner.png" class="banner" />
		<div class="introduct">
			<p class="introduct-text">{{text}}</p>
		</div>
		<!-- 精品课程-->
		<van-col class="subject-index" type="flex" style="margin-top: 1.875rem; margin-bottom: 0.9375rem;">
			<van-row class="subject-index-row" type="flex" justify="space-around">
				<van-image class="subject-index-row-img" src="http://m.huidianedu.com/wep/java.png" />
				<van-image class="subject-index-row-img" src="http://m.huidianedu.com/wep/web.png" />
			</van-row>
			<van-row class="subject-index-row" type="flex" justify="space-around">
				<van-image class="subject-index-row-img" src="http://m.huidianedu.com/wep/ui.png" />
				<van-image class="subject-index-row-img" src="http://m.huidianedu.com/wep/PYthon.png" />
			</van-row>
			<van-row class="subject-index-row" type="flex" justify="space-around">
				<van-image class="subject-index-row-img" src="http://m.huidianedu.com/wep/bigshuju.png" />
				<van-image class="subject-index-row-img" src="http://m.huidianedu.com/wep/PHP.png" />
			</van-row>
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
					   text:"慧点推出6大精品课程，课程所培养人才都对应市场紧缺的岗位。我们定期邀请中科院BAT等各大公司研发人员定期来公司交流，以完善课程体系，使教学更贴合企业实际需求。",
				   }
				},
				methods: {
				
				},
			  name: 'subject',
			  props: {
			  msg: String
			}
		}
</script>

<style>
</style>
