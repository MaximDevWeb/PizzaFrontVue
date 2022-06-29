export default [
    {
        path: '/404',
        component: () => import("../../views/pages/site/errors/Errors404.vue")
    },
    {
        path: '/:pathMatch(.*)*',
        component:  () => import("../../views/pages/site/errors/Errors404.vue")
    },
]