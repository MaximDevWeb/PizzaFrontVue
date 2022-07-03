export default [
    {
        path: '/auth',
        component: () => import("../../views/layouts/AuthLayout.vue"),
        children: [
            {
                path: 'login',
                component: () => import('../../views/pages/auth/Login.vue')
            }
        ]
    }
];