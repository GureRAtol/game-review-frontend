import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import GameSearch from '../pages/GameSearch.vue'
import GameDetail from '../pages/GameDetail.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/search', component: GameSearch },
    { path: '/game/:id', component: GameDetail, props: true },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

export default router