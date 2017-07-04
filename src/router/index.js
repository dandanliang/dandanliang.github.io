import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import home from '@/views/home'
import book from '@/views/book'
import radio from '@/views/radio'
import group from '@/views/group'
import setup from '@/views/setup'
import me from '@/views/me'
import selected from '@/views/selected'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'login',
        component: login
    }, {
        path: '/login',
        name: 'login',
        component: login
    }, {
        path: "/home",
        name: "home",
        component: home
    }, {
        path: "/book",
        name: "book",
        component: book
    }, {
        path: "/radio",
        name: "radio",
        component: radio
    }, {
        path: "/group",
        name: "group",
        component: group
    }, {
        path: "/setup",
        name: "setup",
        component: setup
    }, {
        path: "/me",
        name: "me",
        component: me
    }, {
        path: "/selected",
        name: "selected",
        component: selected
    }]
})