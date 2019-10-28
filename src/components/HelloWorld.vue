<template>
  <div class="hello">
	<van-button type="primary" @click="pay" class="hello-button">支付测试</van-button>
	<van-button type="danger" class="hello-button" >取消</van-button>
  </div>
</template>

<script>
import { Swipe,SwipeItem,Button } from "vant";
import axios from 'axios'
export default {
	components:{
		 [Button.name]:Button,
	},
	data () {
	            return {
	            }
	        },
	methods: {
		pay(){
			console.log("点击成功")
		}
	},
    name: 'HelloWorld',
    props: {
    msg: String
  }
}
</script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
	display: flex;
	flex-direction: column;
	align-items: center;
}
.hello-button{
	margin-top: 0.625rem;
	width: 20rem;
}
</style>
