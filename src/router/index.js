import {createRouter, createWebHistory} from 'vue-router';

// Масссивы роутов
import sitePages from './site/pages';
import siteError from './site/errors';
import dashboardPages from './dashboard/pages';
import dashboardAuth from './dashboard/auth';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...dashboardPages, ...dashboardAuth, ...sitePages, ...siteError],
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 }
    }
});

export default router
