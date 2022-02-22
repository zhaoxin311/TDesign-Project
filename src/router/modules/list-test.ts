import Layout from '@/layouts';

export default[
  {
    path:'/listPage',
    name:'listPage',
    component:Layout,
    redirect:'/listPage/index',
    meta:{ title:'列表测试页',icon:'' },
    children:[
      {
        path:'base',
        name:'listBase',
        component: () => import('@/pages/listPage/base/index.vue'),
        meta:{ title:'基础列表页' }
      },
      {
        path:'card',
        name:'listCard',
        component: () => import('@/pages/listPage/card/index.vue'),
        meta:{ title:'卡片列表页' }
      },
    ]
  }
]