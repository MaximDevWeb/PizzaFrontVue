export default [
    {
        path: '/:city',
        component: () => import("../../views/layouts/SiteLayout.vue"),
        children: [
            {
                path: '',
                component: () => import("../../views/pages/site/index/Index.vue"),
            },
            {
                path: 'contacts',
                component: () => import("../../views/pages/site/contacts/Contacts.vue")
            },
            {
                path: 'contacts/:address',
                component: () => import("../../views/pages/site/contacts/ContactsDetails.vue")
            }
        ]
    }
]