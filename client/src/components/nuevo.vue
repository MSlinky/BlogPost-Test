<template>
  <div>
    <div class="container">
      <h1 class="title">Nuevo post</h1>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12 m6 offset-m3">
              <input id="title" type="text" class="validate" v-model="title">
              <label for="title">Titulo</label>
            </div>
            <div class="input-field col s12">
              <textarea id="contenido" class="materialize-textarea" v-model="content"></textarea>
              <label for="contenido">Contenido</label>
            </div>
          </div>
          <button class="waves-effect waves-light btn" v-on:click="postPost">Guardar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import { serverBus } from '../main'
import axios from 'axios'

export default {
  methods: {
    postPost (event) {
      event.preventDefault()
      var component = this
      axios.post('http://localhost:8081/posts/save', {
        title: this.title,
        content: this.content
      }, {
        headers: {
          'Authorization': 'Bearer ' + window.localStorage.webToken
        }
      })
        .then(function (response) {
          console.log(response)
          if (response.data.status === 1) {
            component.$router.push('/')
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
      title: '',
      content: ''
    }
  }
}
</script>
