export default {
  methods: {
    getUser () {
      const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
      return userInfo
    }
  }
}
