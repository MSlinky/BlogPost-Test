<!-- eslint-disable -->
<template>
  <div class="container-main-blogs">
    <div class="container">
      <div class="back-white">
        <div class="blog">
            <div class="title">
              <center>
                {{blog.title }}
              </center>
            </div>
            <div class="content">
              {{blog.content }}
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Inicio',
  created () {
    var component = this
    axios.get('http://localhost:8081/post/' + this.$route.params.id)
      .then(function (response) {
        console.log(response)
        component.blog = response.data.message[0]
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  data () {
    return {
      blog: {}
    }
  }
}
</script>
