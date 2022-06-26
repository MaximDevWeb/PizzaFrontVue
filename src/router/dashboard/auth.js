import Login from '../../views/pages/auth/Login.vue'

export default [
    {
        path: '/dashboard/login',
        name: 'login',
        component: Login,
        meta: {
            layout: 'AuthLayout'
        }
    }
];