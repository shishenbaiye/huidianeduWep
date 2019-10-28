import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Subject from './components/subject.vue' 
import index from './components/index.vue'
import about from './components/about.vue'
import master from './components/master.vue'
import php from './components/php.vue'
import python from './components/python.vue'
import bigshuju from './components/bigshuju.vue'
import java from './components/java.vue'
import ui from './components/ui.vue'
import web from './components/web.vue'
import news from './components/news.vue'
import newsIndex from './components/newsIndex.vue'
import baozhang from './components/baozhang.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
	{
	  path: '/about',
	  name: "about",
	  component: about
	},
	{
	  path: '/master',
	  name: "master",
	  component: master
	},
	{
	  path: '/news',
	  name: "news",
	  component: news
	},
	{
	  path: '/newsIndex',
	  name: "newsIndex",
	  component: newsIndex
	},
	{
	  path: '/baozhang',
	  name: "baozhang",
	  component: baozhang
	},
	{
	  path: '/php',
	  name: "php",
	  component: php
	},
	{
	  path: '/python',
	  name: "python",
	  component: python
	},
	{
	  path: '/bigshuju',
	  name: "bigshuju",
	  component: bigshuju
	},
	{
	  path: '/java',
	  name: "java",
	  component: java
	},
	{
	  path: '/ui',
	  name: "ui",
	  component: ui
	},
	{
	  path: '/web',
	  name: "web",
	  component: web
	},
    {
      path: '/subject',
      name: 'subject',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Subject
    }
  ]
})
