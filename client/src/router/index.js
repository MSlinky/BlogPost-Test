import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/inicio'
import Iniciar from '@/components/iniciar'
import registro from '@/components/registro'
import Nuevo from '@/components/nuevo'
import Post from '@/components/post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/nuevo',
      name: 'Nuevo',
      component: Nuevo
    },
    {
      path: '/ver/:id',
      name: 'Post',
      component: Post
    },
    {
      path: '/iniciar',
      name: 'Iniciar',
      component: Iniciar
    },
    {
      path: '/registro',
      name: 'Registro',
      component: registro
    }
  ]
})
