import {createRouter, createWebHistory} from 'vue-router'

// Масссивы роутов
import sitePages from './site/pages';
import dashboardPages from './dashboard/pages';
import dashboardAuth from './dashboard/auth';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...sitePages, ...dashboardPages, ...dashboardAuth]
})

export default router
