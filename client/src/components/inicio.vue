<!-- eslint-disable -->
<template>
  <div class="container-main-blogs">
    <div class="container">
      <div class="back-white">
        <div class="blog" v-for="blog in list">
          <router-link :to="{path: '/ver/'+blog._id}">
            <div class="header-blog">
              <div class="date">
                {{ dateFormat(blog.date) }}
              </div>
              <div class="title">
                {{blog.title }}
              </div>
            </div>
            <div class="body-blog">
              <div class="content">
                {{blog.content.substr(0,50) }}
              </div>
              <div class="author">
                {{blog.author.email }}
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'Inicio',
  created () {
    var component = this
    axios.get('http://localhost:8081/posts')
      .then(function (response) {
        console.log(moment(response.data.message[0].datev).format('DD / MM / YYYY'))
        component.list = response.data.message
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    dateFormat (date) {
      return moment(date).format('DD/MM/YYYY')
    }
  },
  data () {
    return {
      list: []
    }
  }
}
</script>
