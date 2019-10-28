<template>
	<div class="python">
		<img src="../assets/python/banner.png" class="banner" />
		<van-col class="php-index" type="flex">
			<van-row class="php-title">Python课程介绍</van-row>
			<van-row class="php-subtitle">我们为学员打造了成熟高效的Python课程体系</van-row>
			<!-- 课程介绍-->
			<div type="flex" class="php-buzou">
				<van-row type="flex" justify="center" class="php-line">
					<van-col type="flex" align="center" class="php-line-index" style="margin-right: 1.7%;">
						<img class="php-img" src="../assets/python/001.png"/>
						<van-row class="php-line-index-title">Python基础</van-row>
						<van-row class="php-line-index-subtitle">掌握Python语法和编程思想，具备用Python开发的条件和能力</van-row>
					</van-col>
					<van-col type="flex" align="center" class="php-line-index" style="margin-left: 1.7%;">
						<img class="php-img" src="../assets/python/002.png"/>
						<van-row class="php-line-index-title">可视化开发</van-row>
						<van-row class="php-line-index-subtitle">掌握前端开发技术，具备可视化与Web应用层开发能力</van-row>
					</van-col>
				</van-row>
				<van-row type="flex" justify="center" class="php-line">
					<van-col type="flex" align="center" class="php-line-index" style="margin-right: 1.7%;">
						<img class="php-img" src="../assets/python/003.png"/>
						<van-row class="php-line-index-title">服务器相关技术</van-row>
						<van-row class="php-line-index-subtitle">掌握Linux与数据库管理技术，具备部署配置服务器能力</van-row>
					</van-col>
					<van-col type="flex" align="center" class="php-line-index" style="margin-left: 1.7%;">
						<img class="php-img" src="../assets/python/004.png"/>
						<van-row class="php-line-index-title">Python全栈开发</van-row>
						<van-row class="php-line-index-subtitle">熟练掌握Python前端开 发框架，具备Python全 栈开发能力 </van-row>
					</van-col>
				</van-row>
				<van-row type="flex" justify="center" class="php-line">
					<van-col type="flex" align="center" class="php-line-index" style="margin-right: 1.7%;">
						<img class="php-img" src="../assets/python/005.png"/>
						<van-row class="php-line-index-title">分布式爬虫技术</van-row>
						<van-row class="php-line-index-subtitle"> 掌握分布式爬虫从技术 具备开发企业级爬虫程 序的能力 </van-row>
					</van-col>
					<van-col type="flex" align="center" class="php-line-index" style="margin-left: 1.7%;">
						<img class="php-img" src="../assets/python/006.png"/>
						<van-row class="php-line-index-title">数据挖掘与分析</van-row>
						<van-row class="php-line-index-subtitle">使用Python能领域</van-row>
					</van-col>
				</van-row>
			</div >
				<!-- 树状图 -->
			<div class="php-tree" ref="tree"  v-bind:style="{ height: height + 'px' }">
				<van-col class="tree-title">
					<van-row class="php-title" style="margin-top:5.5%;">慧点Python人工智能课程优势</van-row>
					<van-row class="php-subtitle">项目实战+企业定向人才培养让学员在企业更好立足</van-row>
				</van-col>
				<van-col class="tree-index">
					<van-row class="tree-index-line" type="flex" align="center" justify="space-between">
						<van-row class="tree-index-line-title">精英课程</van-row>
						<van-row class="tree-index-line-subtitle"> 定期邀请来自bat，华为，中科院等专家一起探讨行业方向并进行深度技术交流和课程体系更新。 </van-row>
					</van-row>
					<van-row class="tree-index-line" type="flex" align="center" justify="space-between">
						<van-row class="tree-index-line-subtitle2">慧点Python经验让他们更好把握每个</van-row>
						<van-row class="tree-index-line-title2">名师教学</van-row>	
					</van-row>
					<van-row class="tree-index-line" type="flex" align="center" justify="space-between">
						<van-row class="tree-index-line-title">项目实战</van-row>
						<van-row class="tree-index-line-subtitle">讲学练辅导相结合，实战项目紧贴行业技术发展趋势和企业实际需求</van-row>
					</van-row>
					<van-row class="tree-index-line" type="flex" align="center" justify="space-between">
						<van-row class="tree-index-line-subtitle2">公司与多个知名互联网企业长期合作，优秀学员在毕业前就可与企业签订人才培养合同</van-row>
						<van-row class="tree-index-line-title2">定向培养</van-row>	
					</van-row>
				</van-col>
			</div>
			<!-- 老师 -->
			<van-col class="teacher" type="flex" align="center">
				<van-col class="tree-title">
					<van-row class="php-title" style="margin-top:5.5%;">慧点Python大数据讲师</van-row>
					<van-row class="php-subtitle">良好的环境是学员学有所成的基础</van-row>
				</van-col>
				<van-row class="teacher-line" type="flex">
					<van-image class="teacher-img" :src="master.image"></van-image>
					<van-col class="teacher-index">
						<van-row class="teacher-index-name">{{master.name}} {{master.comment}}</van-row>
						<van-row v-bind:class="classFont">{{master.introduction}}</van-row>
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
			if(wid>=393){
				this.classFont.teacherIndexIntroduct=false;
				this.classFont.teacherIndexIntroduct1080p=true;			
			}
			api.$httpPOST("/master",{
				position:3
			}).then(res=>{
				this.master=res.data[0];
			})
		},
	  name: 'python',
	  props: {
	  msg: String
	}
}
	
</script>

<style>

</style>
