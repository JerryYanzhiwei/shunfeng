<template>
  <div class="teamhall_container">
    <PublicHeader/>
    <div class="team_container">
      <PublicTitle title="队伍列表" />
      <div class="team_contain">
        <div class="team_item">
          <p class="team_name">长丰支队</p>
          <div class="leader_detail">
            <span>队长: 额滴神</span>
            <span>电话: 13122221111</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PublicHeader from '@/components/public_header.vue'
import PublicTitle from '@/components/public_title.vue'
export default {
  components: {
    PublicHeader,
    PublicTitle
  },
  data () {
    return {
      msg: '组队大厅'
    }
  }
}
</script>

<style lang="scss" scoped>
  .teamhall_container {
    width: 100%;
    min-height: 100vh;
    padding-top: 100px;

    background-color: #f4f5f8;
    .team_container {
      width: 1200px;
      margin: 0 auto;
      .team_contain {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .team_item {
          position: relative;

          width: 340px;
          margin-top: 30px;
          padding: 20px;

          background-color: #fff;
          border-radius: 8px;
          transition: all .2s linear;
          cursor: pointer;
          &:hover {
            box-shadow: 0 15px 30px rgba(0,0,0,.1);
            transform: translate3d(0,-2px,0);
          }
          .team_name {
            width: 100%;
            padding: 0 10px;

            font-size: 18px;
            font-weight: bold;
            text-align: center;
          }
          .leader_detail {
            display: flex;
            justify-content: space-between;

            padding: 20px;

            font-size: 14px;
            color: #666;
          }
        }
      }
    }
  }
</style>
