/* eslint-disable */

<template>
  <div>
    <h1>Registro</h1>
    <input
      type="text"
      name="email"
      v-model="email"
      placeholder="Correo" />
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="Contraseña" />
    <button>Registrar</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
