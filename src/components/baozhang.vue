<template>
	<div class="baozhang">
		<img src="../assets/jiuye/jiuyebanner.png" class="banner" />
		<!-- 就业保障 -->
		<van-col class="baozhang-index">
			<van-row class="php-title">就业保障</van-row>
			<van-row class="php-subtitle">完善的就业保障，让您学后无忧</van-row>
			<van-row class="baozhang-index-tree" type="flex" justify="space-around">
				<van-col class="baozhang-index-tree-line" style="margin-top: 22px;margin-left: 5%;">
					<van-image class="baozhang-index-img" src="http://m.huidianedu.com/wep/jiuye/001.png"></van-image>
					<van-row class="baozhang-index-text">签订法律鉴定就业协议，维权零难度不按承诺标准就业可申请退还全部认证费用 </van-row>
				</van-col>
				<van-col  class="baozhang-index-tree-line">
					<van-image class="baozhang-index-img" src="http://m.huidianedu.com/wep/jiuye/002.png"></van-image>
					<van-row class="baozhang-index-text">量身定制薪资标 准，不达标可拒 绝入职，部分优 秀学、员入职月 薪更达10K以上  </van-row>
				</van-col>
				<van-col  class="baozhang-index-tree-line" style="margin-top: 22px;margin-right: 5%;">
					<van-image class="baozhang-index-img" src="http://m.huidianedu.com/wep/jiuye/003.png"></van-image>
					<van-row class="baozhang-index-text">手把手全程就业 服务指导就业流 程工作，学员就 业值远超行业均 值  </van-row>
				</van-col>
			</van-row>
		</van-col>
		<!-- 就业企业 -->
		<van-col class="qiye" type="flex" align="center">
			<van-row class="php-title">就业企业</van-row>
			<van-row class="qiye-subtitle">学员多在百度、腾讯、阿里巴巴、IBM等一线名企就业，同时公司在多个一线城市派有专人负责就业工作，截至到2019年9月公司合作企业超过1000家。</van-row>
			<div class="qiye-img" >
				<div class="qiye-img-line">
					<van-image class="qiye-img-line-index" src="http://m.huidianedu.com/wep/jiuye/lj01.png"></van-image>
					<van-image class="qiye-img-line-index" src="http://m.huidianedu.com/wep/jiuye/lj02.png"></van-image>
					<van-image class="qiye-img-line-index" src="http://m.huidianedu.com/wep/jiuye/lj03.png"></van-image>
					<van-image class="qiye-img-line-index" src="http://m.huidianedu.com/wep/jiuye/lj04.png"></van-image>
					<van-image class="qiye-img-line-index" src="http://m.huidianedu.com/wep/jiuye/lj05.png"></van-image>
					<van-image class="qiye-img-line-index" src="http://m.huidianedu.com/wep/jiuye/lj06.png"></van-image>
					<van-image class="qiye-img-line-index" src="http://m.huidianedu.com/wep/jiuye/lj07.png"></van-image>
					<van-image class="qiye-img-line-index" src="http://m.huidianedu.com/wep/jiuye/lj08.png"></van-image>
					<van-image class="qiye-img-line-index" src="http://m.huidianedu.com/wep/jiuye/lj10.png"></van-image>
				</div>
			</div>
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
				
				}
			},
			methods: {
				
			},
			mounted(){

			},
		  name: 'baozhang',
		  props: {
		  msg: String
		}
	}
</script>

<style>

</style>
