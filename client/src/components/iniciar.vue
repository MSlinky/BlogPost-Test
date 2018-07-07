<template>
  <div>
    <div class="container">
      <h1 class="title">Iniciar sesión</h1>
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
          <a class="waves-effect waves-light btn" @click="postPost">Iniciar</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    postPost () {
      axios.post('http://localhost:8081/signin', {
        email: this.email,
        password: this.password
      })
        .then(function (response) {
          console.log(response)
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
