import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/inicio'
import Iniciar from '@/components/iniciar'
import registro from '@/components/registro'

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
