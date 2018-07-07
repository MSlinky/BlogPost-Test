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
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><router-link to="/iniciar">Iniciar sesión</router-link></li>
              <li><router-link to="/registrar">Registrate</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <ul class="sidenav" id="mobile-demo">
      <li class="sidenav-close"><router-link to="/iniciar">Iniciar sesión</router-link></li>
      <li class="sidenav-close"><router-link to="/registrar">Registrate</router-link></li>
    </ul>
  </div>
</template>

<script>
import M from 'materialize-css'

export default {
  name: 'Header',
  created: function () {
    window.addEventListener('load', function () {
      var elem = document.querySelectorAll('.sidenav')
      M.Sidenav.init(elem)
    })
  },
  data () {
    return {}
  }
}

</script>
