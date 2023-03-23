export default {
  path: 'manageCenter',
  component: () => import('@/views/manageCenter'),
  name: 'ManageCenter',
  meta: { title: '管理中心', icon: 'el-icon-s-help' },
  children: [
    {
      path: 'authorityManage',
      name: 'AuthorityManage',
      component: () => import('@/views/manageCenter/authorityManage'),
      meta: { title: '权限管理', icon: 'table' }
    }
  ]
}
