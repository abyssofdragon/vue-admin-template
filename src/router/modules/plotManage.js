export default {
  path: 'manageCenter',
  component: () => import('@/views/manageCenter'),
  name: 'ManageCenter',
  meta: { title: '管理中心', icon: 'el-icon-s-help' },
  children: [
    {
      path: 'plotManage',
      name: 'PlotManage',
      component: () => import('@/views/manageCenter/plotManage'),
      meta: { title: '剧情管理', icon: 'table' },
      children: [
        {
          path: 'backgroundManage',
          name: 'BackgroundManage',
          component: () => import('@/views/manageCenter/plotManage/backgroundManage'),
          meta: { title: '背景故事', icon: 'table' }
        },
        {
          path: 'deductionManage',
          name: 'DeductionManage',
          component: () => import('@/views/manageCenter/plotManage/deductionManage'),
          meta: { title: '背景推演', icon: 'table' }
        }
      ]

    }
  ]
}
