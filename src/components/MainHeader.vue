<template>
  <div class="main_header_container">
    <div class="left_txt">
      顺丰杯物流创新设计大赛
    </div>
    <div class="right">
      <span @click="$router.push('/main')">{{userData.name}}</span>
      <div class="exit_btn"
        @click="exitLogin">退出</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userData () {
      return this.getUser()
    }
  },
  data () {
    return {
      logo: require('../assets/images/logo.png')
    }
  },
  methods: {
    exitLogin () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.main_header_container {
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  .left_txt {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    img {
      width: 50px;
      height: 50px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    color: #fff;
    span {
      cursor: pointer;
    }
    .exit_btn {
      margin: 0 20px;
      font-size: 12px;
    }
  }
}
</style>
