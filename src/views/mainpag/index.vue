<template>
  <div>
    <PublicHeader/>
  </div>
</template>

<script>
import PublicHeader from '@/components/public_header.vue'
export default {
  components: {
    PublicHeader
  },
  data () {
    return {
      msg: '主页面'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
