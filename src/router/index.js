import Vue from 'vue'
import Router from 'vue-router'
// import axios from 'axios'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import survivor from './modules/survivor'
import hunter from './modules/hunter'
import authorityManage from './modules/authorityManage'
import plotManage from './modules/plotManage'
// import manager from './modules/manager'
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'letter',
        name: 'Letter',
        component: () => import('@/views/table/components/Letter'),
        meta: { title: '信件', icon: 'table' }
      },
      {
        path: 'deduction',
        name: 'Deduction',
        component: () => import('@/views/table/components/Deduction'),
        meta: { title: '推演', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: '心境地图' },
        children: [
          {
            path: 'mainStory',
            component: () => import('@/views/nested/menu1/mainStory'),
            name: 'mainStory',
            meta: { title: '剧情模式' }
          },
          {
            path: 'relation',
            component: () => import('@/views/nested/menu1/relation'),
            name: 'relation',
            meta: { title: '角色关系' }
          },
          {
            path: 'note',
            component: () => import('@/views/nested/menu1/note'),
            name: 'Note',
            meta: { title: '查看笔记' },
            children: [
              survivor,
              hunter,
              {
                path: 'menu1-2-3',
                component: () => import('@/views/nested/menu1/note/menu1-2-3'),
                name: 'Menu1-2-3',
                meta: { title: '人格脉络' }
              },
              {
                path: 'menu1-2-4',
                component: () => import('@/views/nested/menu1/note/menu1-2-4'),
                name: 'Menu1-2-4',
                meta: { title: '线索记录' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      }
    ]
  },
  {
    path: '/creativeCentre',
    component: Layout,
    redirect: '/creativeCentre/write',
    name: 'CreativeCentre',
    meta: {
      title: '创作中心',
      icon: 'nested'
    },
    children: [
      {
        path: 'write',
        component: () => import('@/views/creativeCenter/write'),
        name: 'Write',
        meta: { title: '创作' }
      }
    ]
  },
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin/manageCenter',
    name: 'Admin',
    meta: {
      title: '管理员',
      icon: 'nested'
    },
    children: [
      plotManage
    ]
  },
  {
    path: '/superAdmin',
    component: Layout,
    redirect: '/superAdmin/manageCenter',
    name: 'SuperAdmin',
    meta: {
      title: '超级管理员',
      icon: 'nested'
    },
    children: [
      authorityManage
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
// 任何一个跳转之前都要执行下述逻辑
// router.beforeEach((to, from, next) => {
//   if (to.path.startsWith('/login')) {
//     window.localStorage.removeItem('acces-admin')
//     next()
//   } else {
//     const admin = JSON.parse(window.localStorage.getItem('access-admin'))
//     if (!admin) {
//       next({ path: '/login' })
//     } else {
//     // 校验token合法性
//       axios({
//         url: 'http://localhost:8080/checkToken',
//         method: 'get',
//         headers: {
//           token: admin.token
//         }
//       }).then(response => {
//         console.log('校验结果', response.data)
//         if (!response.data) {
//           console.log('校验失败')
//           next({ path: '/404' })
//         }
//       })
//       next()
//     }
//   }
// })

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
