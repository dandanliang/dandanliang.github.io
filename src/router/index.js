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
import hotspot from '@/components/hotspot'
import round from '@/components/round'
import homeframe from '@/components/homeframe'
import grouptitle from '@/components/grouptitle'
import nav from '@/components/nav'
import kind from '@/components/kind'
import diary from '@/views/diary'
import movie from '@/views/movie'
import bookMovie from '@/views/book-movie'
import readbook from '@/views/book-readbook'
import tv from '@/views/book-tv'
import city from '@/views/book-city'
import music from '@/views/book-music'
import bookmore from '@/components/bookmore'
import shop from '@/views/book-shop'
import leftbg from '@/components/leftbg'
import shopbanner from '@/components/shopbanner'
import tlflex from '@/components/tlflex'
import scrolls from '@/components/scrollbanner'
import choicelis from '@/components/choicelis'
import hotlikes from '@/components/hotlikes'
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
        component: book,

        children: [{
            path: '/',
            redirect: "movie",
        }, {
            path: 'movie',
            component: bookMovie
        }, {
            path: 'readbook',
            component: readbook
        }, {
            path: 'tv',
            component: tv
        }, {
            path: 'city',
            component: city
        }, {
            path: 'music',
            component: music
        }, {
            path: 'shop',
            component: shop
        }]
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
    }, {
        path: "/hotspot",
        name: "hotspot",
        component: hotspot
    }, {
        path: "/homeframe",
        name: "homeframe",
        component: homeframe
    }, {
        path: "/round",
        name: "round",
        component: round
    }, {
        path: "/grouptitle",
        name: "grouptitle",
        component: grouptitle
    }, {
        path: "/kind",
        name: "kind",
        component: kind
    }, {
        path: "/diary",
        name: "diary",
        component: diary
    }, {
        path: "/movie",
        name: "movie",
        component: movie
    }, {
        path: "/nav",
        name: "nav",
        component: nav
    }, {
        path: "/bookmore",
        name: "bookmore",
        component: bookmore
    }, {
        path: "/leftbg",
        name: "leftbg",
        component: leftbg
    }, {
        path: "/shopbanner",
        name: "shopbanner",
        component: shopbanner
    }, {
        path: "/tlflex",
        name: "tlflex",
        component: tlflex
    }, {
        path: "/scroll",
        name: "scroll",
        component: scroll
    }, {
        path: "/choicelis",
        name: "choicelis",
        component: choicelis
    }, {
        path: "/hotlikes",
        name: "hotlikes",
        component: hotlikes
    }]
})