<template>
  <div>
    <HelloWorld />
    <a :href="loginUri">Login</a>
  </div>
</template>
<script>
/* global process */
const HelloWorld = () => import(/* webpackChunkName: "/Components/HelloWorld" */ '../Components/HelloWorld.vue')

export default {
  components: { HelloWorld },
  computed: {
    loginUri() {
      return `/api/oauth/authorize?response_type=code&client_id=${process.env.CLIENT_ID}&scope=&redirect_uri=http://vagrant.local/api/oauth/authorize`
    }
  }
}
</script>
