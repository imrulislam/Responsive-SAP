import { MenuItem, MenuService } from '../fw/services/menu.service';


export let initialMenuItems: Array<MenuItem> = [
    {
        title: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: '/dashboard',
        subMenu: null
    },
    {
        title: 'Countries',
        icon: 'glyphicon-flag',
        route: '/countries',
        subMenu: [
            {
                title: 'Select',
                icon: 'glyphicon-expand',
                route: null,
                subMenu: [
                    {
                        title: 'USA',
                        icon: 'glyphicon-flag',
                        route: 'country-details/USA',
                        subMenu: null
                    },
                    {
                        title: 'Bangladesh',
                        icon: 'glyphicon-flag',
                        route: 'country-details/BD',
                        subMenu: null
                    },
                    {
                        title: 'Switzerland',
                        icon: 'glyphicon-flag',
                        route: 'country-details/SW',
                        subMenu: null
                    }
                ]
            },
            {
                title: 'Top 3',
                icon: 'glyphicon-flag',
                route: 'country-list/3',
                subMenu: null
            },
            {
                title: 'Top 10',
                icon: 'glyphicon-flag',
                route: 'country-list/10',
                subMenu: null
            },
            {
                title: 'All',
                icon: 'glyphicon-flag',
                route: 'country-list/0',
                subMenu: null
            }
        ]
    },
    {
        title: 'Maintenance',
        icon: 'glyphicon-wrench',
        route: null,
        subMenu: [
            {
                title: 'Country List',
                icon: 'glyphicon-th-list',
                route: 'country-maint',
                subMenu: null
            },
            {
                title: 'Settings',
                icon: 'glyphicon-cog',
                route: 'settings',
                subMenu: null
            }
        ]
    }
];
