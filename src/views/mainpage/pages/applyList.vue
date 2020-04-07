<template>
  <div class="apply_list_container">
    <PublicTitle title="申请列表" />
    <div class="apply_contain">
      <!-- 队伍成员 -->
      <div class="member_item">
        <div class="member_name">
          <i class="iconfont icon-shouhuoren"></i>
          关宏峰
        </div>
        <div class="item_contain">
          <p class="item_detail">
            <span class="title">姓名: </span>
            <span class="detail">佛挡杀佛</span>
          </p>
          <p class="item_detail">
            <span class="title">手机号: </span>
            <span class="detail">13122221111</span>
          </p>
          <p class="item_detail">
            <span class="title">学校: </span>
            <span class="detail">风湿性学校</span>
          </p>
          <p class="item_detail">
            <span class="title">专业: </span>
            <span class="detail">默默地说</span>
          </p>
          <p class="item_detail">
            <span class="title">年级: </span>
            <span class="detail">大二</span>
          </p>
          <p class="item_detail">
            <span class="title">留言: </span>
            <span class="detail">范德萨范德萨发生的</span>
          </p>
        </div>
        <div class="btn_contain">
          同意入队
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PublicTitle from '@/components/public_title.vue'
export default {
  components: {
    PublicTitle
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .apply_list_container {
    .iconfont {
      font-size: 13px;
    }
    .apply_contain {
      display: flex;
      flex-wrap: wrap;
      .member_item {
        width: 31%;
        margin-top: 30px;
        overflow: hidden;
        margin-left: 3.3%;

        background-color: #fff;
        border-radius: 10px;
        transition: all .2s linear;
        &:nth-child(3n + 1) {
          margin-left: 0;
        }
        &:hover {
          box-shadow: 0 15px 30px rgba(0,0,0,.1);
          transform: translate3d(0,-2px,0);
        }
        .member_name {
          height: 40px;
          line-height: 40px;

          text-align: center;
          font-size: 16px;
          font-weight: bold;
        }
        .item_contain {
          padding: 0 20px;

          .item_detail {
            margin-bottom: 10px;

            font-size: 14px;
            color: #666;
          }
        }
        .btn_contain {
          height: 50px;
          line-height: 50px;
          text-align: center;

          background: #dc1e32;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
        }
      }
    }
  }
</style>
