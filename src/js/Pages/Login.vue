<template>
  <div>
    <h1>Login</h1>
    <form
      action="/api/oauth/authorize"
      method="post"
    >
      <div>
        <label for="username">Username</label>
        <input
          id="username"
          v-model="username"
          name="username"
        >
      </div>
      <div>
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
        >
      </div>
      <div v-if="failed === '1'">
        Login Failed
      </div>
      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    failed: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      username: '',
      password: ''
    }
  }
}
</script>
