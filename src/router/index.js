import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Map from '@/components/Map'
import UserProfile from '@/components/UserProfile'
import UserProfilePreview from '@/components/UserProfilePreview'
import Echarts from '@/components/Echarts'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       // name: 'HelloWorld',
//       // component: HelloWorld,
//       components: {
//         default: HelloWorld,
//         helper: Map
//       }
//     }
//   ]
// })

const router = new Router({
  routes: [
    {
      path: '/settings',
      // You could also have named views at tho top
      component: HelloWorld,
      children: [
        {
          path: 'map',
          component: Map
        },
        {
          path: 'profile',
          components: {
            default: UserProfile,
            helper: UserProfilePreview
          }
        }
      ]
    },
    {
      path: '/echarts',
      // You could also have named views at tho top
      component: Echarts
    }
  ]
})

// router.push('/settings/map')
router.push('/echarts')

export default router
