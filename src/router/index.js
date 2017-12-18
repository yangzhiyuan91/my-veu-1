import Vue from 'vue'
import Router from 'vue-router'
import pageFirst from '@/pages/first'
import pageSecond from '@/pages/second'
import pageThird from '@/pages/third'
import pageFour from '@/pages/four'
import pageFive from '@/pages/five'

import s_first from '@/pages/s_pages/s_first'
import s_second from '@/pages/s_pages/s_second'
import s_third from '@/pages/s_pages/s_third'
import s_four from '@/pages/s_pages/s_four'
import detail from '@/pages/s_pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: pageFirst,
      redirect:'/first/s_first',
      children:[
      	{
      		path:'/first/s_first',
      		component:s_first
      	},
      	{
      		path:'/first/s_second',
      		component:s_second
      	},
      	{
      		path:'/first/s_third',
      		component:s_third
      	},
      	{
      		path:'/first/s_four',
      		component:s_four
      	}
      ]
    },
    {
      path: '/second',
      name: 'second',
      component: pageSecond
    },
    {
      path: '/third',
      name: 'third',
      component: pageThird
    },
    {
      path: '/four',
      name: 'four',
      component: pageFour
    },
    {
      path: '/five',
      name: 'five',
      component: pageFive
    },
    {
    	path:'/detail',
    	name:'detail',
    	component:detail
    }
  ]
})
