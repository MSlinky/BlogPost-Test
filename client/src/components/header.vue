<template>
  <div id="content-header">
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <div class="container">
            <div class="container-logo">
              <router-link to="/">
                <a href="#" class="brand-logo">
                  <img class="logo" src="http://www.esa.int/esalogo/images/downloads/Digital_logo/Hi_resolution/44_digital_logo_white_HI.png">
                </a>
              </router-link>
            </div>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="fas fa-bars"></i></a>
            <ul v-if="login !== 'true'" id="nav-mobile" class="right hide-on-med-and-down">
              <li><router-link to="/iniciar">Iniciar sesión</router-link></li>
              <li><router-link to="/registro">Registrate</router-link></li>
            </ul>
            <ul v-if="login === 'true'" id="nav-mobile" class="right hide-on-med-and-down">
              <li><router-link to="/nuevo">Nuevo</router-link></li>
              <li @click="logout"><router-link to="/">Cerrar sesión</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <ul v-if="login !== 'true'" class="sidenav" id="mobile-demo">
      <li class="sidenav-close"><router-link to="/iniciar">Iniciar sesión</router-link></li>
      <li class="sidenav-close"><router-link to="/registro">Registrate</router-link></li>
    </ul>
    <ul v-if="login === 'true'" class="sidenav" id="mobile-demo">
      <li class="sidenav-close"><router-link to="/nuevo">Nuevo</router-link></li>
      <li @click="logout" class="sidenav-close"><router-link to="/">Cerrar sesión</router-link></li>
    </ul>
  </div>
</template>

<script>
import { serverBus } from '../main'
import M from 'materialize-css'

export default {
  name: 'Header',
  created () {
    window.addEventListener('load', function () {
      var elem = document.querySelectorAll('.sidenav')
      M.Sidenav.init(elem)
    })

    serverBus.$on('login', this.event_login)
  },
  methods: {
    logout () {
      window.localStorage.login = false
      window.localStorage.webToken = false
      this.login = false
    },
    event_login () {
      this.login = 'true'
    }
  },
  data () {
    return {
      login: window.localStorage.login
    }
  }
}

</script>
