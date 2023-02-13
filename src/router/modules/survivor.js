export default {
    path: 'survivor',
    component: () => import('@/views/nested/menu1/note/survivor'),
    name: 'Survivor',
    meta: { title: '求生者侧写' },
    children: [
        {
            path: 'zhoushushi',
            component: () => import('@/views/nested/menu1/note/survivor/components/zhoushushi'),
            name: 'zhoushushi',
            meta: { title: '0103 咒术师' }
        },
        {
            path: 'shoumuren',
            component: () => import('@/views/nested/menu1/note/survivor/components/shoumuren'),
            name: 'Shoumuren',
            meta: { title: '0213 守墓人' }
        },
        {
            path: 'tiaojiushi',
            component: () => import('@/views/nested/menu1/note/survivor/components/tiaojiushi'),
            name: 'Tiaojiushi',
            meta: { title: '0214 调酒师' }
        },
    ],
}