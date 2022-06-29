import {defineStore} from "pinia";

export const useQueuesStore = defineStore({
    id: 'queues',

    state: () => ({
        queues: [
            {
                alias: 'marshala-zhukova-115a',
                list: {
                    queue: [
                        {
                            number: 111,
                            title: 'Пицца из половинок 35 см'
                        },
                        {
                            number: 105,
                            title: 'Паста Цыпленок и грибы 220 г'
                        }
                    ],
                    rolling: [],
                    filling: [
                        {
                            number: 98,
                            title: 'Острый Додстер 190 г'
                        },
                        {
                            number: 97,
                            title: 'Додо Микс 30 см'
                        },
                        {
                            number: 92,
                            title: 'Цыпленок барбекю 35 см'
                        },
                        {
                            number: 89,
                            title: 'Пепперони фреш 25 см'
                        }
                    ],
                    bake: [
                        {
                            number: 89,
                            title: 'Острый Додстер 190 г'
                        },
                        {
                            number: 82,
                            title: 'Додо Микс 30 см'
                        },
                        {
                            number: 85,
                            title: 'Цыпленок барбекю 35 см'
                        },
                        {
                            number: 81,
                            title: 'Пепперони фреш 25 см'
                        },
                        {
                            number: 78,
                            title: 'Острый Додстер 190 г'
                        },
                        {
                            number: 77,
                            title: 'Додо Микс 30 см'
                        },
                        {
                            number: 75,
                            title: 'Цыпленок барбекю 35 см'
                        },
                        {
                            number: 72,
                            title: 'Пепперони фреш 25 см'
                        }
                    ]
                }
            }
        ]


    }),

    getters: {
        getByAlias: (state) => {
            return (alias) => state.queues.find(element => element.alias === alias);
        }
    }
});