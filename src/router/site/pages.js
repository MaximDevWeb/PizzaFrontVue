export default [
    {
        path: '/:city',
        component: () => import("../../views/pages/site/index/Index.vue"),
    },
    {
        path: '/:city/contacts',
        component: () => import("../../views/pages/site/contacts/Contacts.vue")
    },
    {
        path: '/:city/contacts/:address',
        component: () => import("../../views/pages/site/contacts/ContactsDetails.vue")
    }
]