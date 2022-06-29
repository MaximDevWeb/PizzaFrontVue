import {defineStore} from "pinia";

export const useCitiesStore = defineStore({
    id: 'cities',

    state: () => ({
        cites: [
            {
                name: 'Анапа',
                alias: 'anapa',
                addresses: [
                    {
                        title: 'Анапа',
                        address: 'ул. Краснодарская, 2В',
                        alias: 'krasnodarskaja-2v',
                        time: {
                            delivery: {from: '00:00', to: '00:00'},
                            restaurant: {from: '00:00', to: '00:00'}
                        },
                        rating: {
                            stars: 4.95,
                            timer: 33
                        }
                    }
                ]
            },
            {
                name: 'Адлер',
                alias: 'adler',
                addresses: [
                    {
                        title: 'Адлер',
                        address: 'ул. Кирова, 23',
                        alias: 'kirova-23',
                        time: {
                            delivery: {from: '10:00', to: '23:00'},
                            restaurant: {from: '10:00', to: '23:00'}
                        },
                        rating: {
                            stars: 4.65,
                            timer: 30
                        }
                    }
                ]
            },
            {
                name: 'Абакан',
                alias: 'abakan',
                addresses: [
                    {
                        title: 'Абакан',
                        address: 'ул. Кирова, 101',
                        alias: 'kirova-101',
                        time: {
                            delivery: {from: '09:00', to: '00:00'},
                            restaurant: {from: '09:00', to: '23:00'}
                        },
                        rating: {
                            stars: 4.53,
                            timer: 42
                        }
                    }
                ]
            },
            {
                name: 'Вологда',
                alias: 'vologda',
                addresses: [
                    {
                        title: 'Ленинградская',
                        address: 'ул. Ленинградская, 134',
                        alias: 'leningradskaja-134',
                        time: {
                            delivery: {from: '10:00', to: '23:00'},
                            restaurant: {from: '10:00', to: '23:00'}
                        },
                        rating: {
                            stars: 4.75,
                            timer: 22
                        }
                    },
                    {
                        title: 'Центр',
                        address: 'ул. Ленина, 3',
                        alias: 'lenina-3',
                        time: {
                            delivery: {from: '09:00', to: '22:00'},
                            restaurant: {from: '09:00', to: '22:00'}
                        },
                        rating: {
                            stars: 4.45,
                            timer: 49
                        }
                    }
                ]
            },
            {
                name: 'Волгорад',
                alias: 'volgograd',
                addresses: [
                    {
                        title: 'Кировский',
                        address: 'ул. Кирова, 149 В',
                        alias: 'kirova-149v',
                        time: {
                            delivery: {from: '08:30', to: '00:00'},
                            restaurant: {from: '08:30', to: '00:00'}
                        },
                        rating: {
                            stars: 4.85,
                            timer: 30
                        }
                    },
                    {
                        title: 'Центр Аллея Героев',
                        address: 'ул. Аллея Героев, 5',
                        alias: 'alleja-geroev-5',
                        time: {
                            delivery: {from: '08:30', to: '00:00'},
                            restaurant: {from: '08:30', to: '00:00'}
                        },
                        rating: {
                            stars: 4.79,
                            timer: 39
                        }
                    },
                    {
                        title: 'Дзержинский',
                        address: 'пр-т Маршала Жукова, 115а/1',
                        alias: 'marshala-zhukova-115a',
                        time: {
                            delivery: {from: '09:00', to: '22:00'},
                            restaurant: {from: '09:00', to: '22:00'}
                        },
                        rating: {
                            stars: 4.81,
                            timer: 40
                        }
                    },
                    {
                        title: 'Красноармейский',
                        address: 'пр-т им Героев Сталинграда, 56Б',
                        alias: 'geroev-stalingrada-56b',
                        time: {
                            delivery: {from: '09:00', to: '23:00'},
                            restaurant: {from: '09:00', to: '23:00'}
                        },
                        rating: {
                            stars: 4.75,
                            timer: 42
                        }
                    },
                    {
                        title: 'Красный Октябрь',
                        address: 'пр-т имени В.И. Ленина, 111г',
                        alias: 'lenina-111g',
                        time: {
                            delivery: {from: '08:30', to: '00:00'},
                            restaurant: {from: '08:30', to: '00:00'}
                        },
                        rating: {
                            stars: 4.35,
                            timer: 52
                        }
                    },
                ]
            }
        ]
    }),

    getters: {
        getByAlias: (state) => {
            return (alias) => {
                return state.cites.find(element => element.alias === alias);
            }
        }
    }
});