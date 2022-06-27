export default [
    {
        path: '/dashboard/login',
        name: 'login',
        component: () => import('../../views/pages/auth/Login.vue'),
        meta: {
            layout: 'AuthLayout'
        }
    }
];