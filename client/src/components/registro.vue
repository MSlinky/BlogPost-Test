<template>
  <div>
    <div class="container">
      <h1 class="title">Registrar</h1>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12 m6 offset-m3">
              <input id="email" type="email" class="validate" v-model="email">
              <label for="email">Correo</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 offset-m3">
              <input id="password" type="password" class="validate" v-model="password">
              <label for="password">Contraseña</label>
            </div>
          </div>
          <button class="waves-effect waves-light btn" v-on:click="postPost">Registrar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { serverBus } from '../main'
import axios from 'axios'

export default {
  created () {
    if (window.localStorage.login === 'true') {
      this.$router.push('/')
    }
  },
  methods: {
    postPost (event) {
      event.preventDefault()
      var component = this
      axios.post('http://localhost:8081/signup', {
        email: this.email,
        password: this.password
      })
        .then(function (response) {
          console.log(response)
          if (response.data.status === 1) {
            window.localStorage.webToken = response.data.token
            window.localStorage.login = true
            component.$router.push('/')
            serverBus.$emit('login', true)
            // window.localStorage.webUser = component.email
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
