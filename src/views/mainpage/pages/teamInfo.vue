<template>
  <div class="team_info_container">
    <PublicTitle title="队伍信息" />
    <div class="leader_contain">
      <div class="leader_top">
        <div class="item">
          <span class="item_name">队长名: </span>
          <span class="item_detail">长丰支队</span>
        </div>
        <div class="item">
          <span class="item_name">队长: </span>
          <span class="item_detail">关宏峰</span>
        </div>
        <div class="item">
          <span class="item_detail">组队状态</span>
        </div>
      </div>
      <div class="leader_bottom">
        <div class="item">
          <span class="item_name">队伍编号: </span>
          <span class="item_detail">3332</span>
        </div>
        <div class="item">
          <el-button size="mini">完成组队</el-button>
        </div>
      </div>
    </div>
    <PublicTitle title="队伍成员" />
  </div>
</template>

<script>
import PublicTitle from '@/components/public_title.vue'
export default {
  components: {
    PublicTitle
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .team_info_container {
    .leader_contain {
      margin-top: 20px;
      margin-bottom: 50px;
      padding: 20px 0;

      background: white;
      box-shadow: 1px 2px 5px 1px #D3D3D3;
      .leader_top {
        display: flex;
        justify-content: space-between;

        padding: 0 30px;

        .item {
          font-size: 16px;
          .item_name {
            display: inline-block;

            width: 80px;
            margin-right: 5px;

            color: #999;
            text-align: right;
          }
          .item_detail {
            color: rgb(51, 51, 51);
          }
        }
      }
      .leader_bottom {
        display: flex;
        justify-content: space-between;

        padding: 20px 30px;
        padding-bottom: 0;
        .item {
          font-size: 16px;
          .item_name {
            display: inline-block;

            width: 80px;
            margin-right: 5px;

            color: #999;
            text-align: right;
          }
          .item_detail {
            color: rgb(51, 51, 51);
          }
        }
      }
    }
  }
</style>
