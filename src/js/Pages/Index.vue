<template>
  <div>
    <HelloWorld />
    <a
      v-if="isLoggedIn === false"
      :href="loginUri"
    >Login</a>
    <a
      v-else
      href="#logout"
      @click="logout"
    >Logout</a>
  </div>
</template>
<script>
/* global process */

import { mapActions, mapGetters } from 'vuex'

const HelloWorld = () => import(/* webpackChunkName: "/Components/HelloWorld" */ '../Components/HelloWorld.vue')

export default {
  components: { HelloWorld },
  computed: {
    ...mapGetters({
      isLoggedIn: 'session/isLoggedIn'
    }),
    loginUri() {
      return `/api/oauth/authorize?response_type=code&client_id=${process.env.CLIENT_ID}&scope=&redirect_uri=http://vagrant.local/api/oauth/authorize`
    }
  },
  methods: {
    ...mapActions({
      'doLogout': 'session/logout'
    }),
    logout() {
      this.doLogout().then(() => {
        window.location.href = '/'
      })
    }
  }
}
</script>
