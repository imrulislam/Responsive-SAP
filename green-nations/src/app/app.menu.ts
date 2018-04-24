import {MenuItem, MenuService} from '../fw/services/menu.service';


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
        subMenu: null
    },
    {
        title: 'Settings',
        icon: 'glyphicon-wrench',
        route: '/settings',
        subMenu: null
    }
];
