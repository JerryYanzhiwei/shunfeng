<template>
  <div class="team_info_container">
    <PublicTitle title="队伍信息" />
    <div class="leader_contain">
      <div class="leader_top">
        <div class="item">
          <span class="item_name">队长名: </span>
          <span class="item_detail">长丰</span>
        </div>
        <div class="item">
          <span class="item_name">队长: </span>
          <span class="item_detail">关宏峰</span>
        </div>
        <div class="item">
          <span class="item_name">队伍编号: </span>
          <span class="item_detail">3332</span>
        </div>
      </div>
      <div class="leader_bottom">
        <div class="item">
          <span class="item_name">组队中</span>
        </div>
        <div class="item">
          <el-button size="mini">完成组队</el-button>
        </div>
      </div>
    </div>
    <PublicTitle title="队伍成员" />
    <div class="member_contain">
      <!-- 队伍成员 -->
      <div class="member_item">
        <div class="member_name">
          <i class="iconfont icon-shouhuoren"></i>
          长丰
        </div>
        <div class="item_contain">
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
            <span class="title">备注: </span>
            <span class="detail">范德萨范德萨发生的</span>
          </p>
        </div>
        <div class="btn_contain">
          移除队伍
        </div>
      </div>
      <div class="member_item">
        <div class="member_name">
          <i class="iconfont icon-shouhuoren"></i>
          长丰
        </div>
        <div class="item_contain">
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
            <span class="title">备注: </span>
            <span class="detail">范德萨范德萨发生的</span>
          </p>
        </div>
        <div class="btn_contain">
          移除队伍
        </div>
      </div>
      <div class="member_item">
        <div class="member_name">
          <i class="iconfont icon-shouhuoren"></i>
          长丰
        </div>
        <div class="item_contain">
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
            <span class="title">备注: </span>
            <span class="detail">范德萨范德萨发生的</span>
          </p>
        </div>
        <div class="btn_contain">
          移除队伍
        </div>
      </div>
      <div class="member_item">
        <div class="member_name">
          <i class="iconfont icon-shouhuoren"></i>
          长丰
        </div>
        <div class="item_contain">
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
            <span class="title">备注: </span>
            <span class="detail">范德萨范德萨发生的</span>
          </p>
        </div>
        <div class="btn_contain">
          移除队伍
        </div>
      </div>
      <div class="member_item">
        <div class="member_name">
          <i class="iconfont icon-shouhuoren"></i>
          长丰
        </div>
        <div class="item_contain">
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
            <span class="title">备注: </span>
            <span class="detail">范德萨范德萨发生的</span>
          </p>
        </div>
        <div class="btn_contain">
          移除队伍
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
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .team_info_container {
    .iconfont {
      font-size: 13px;
    }
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

            color: rgb(51, 51, 51);
            text-align: right;
          }
          .item_detail {
            color: rgb(51, 51, 51);
          }
        }
      }
      .leader_bottom {
        display: flex;
        justify-content: space-around;

        padding: 20px 30px;
        padding-bottom: 0;
        margin-top: 20px;
        .item {
          font-size: 16px;
          .item_name {
            display: inline-block;

            width: 80px;
            margin-right: 5px;

            color: rgb(51, 51, 51);
            text-align: right;
          }
          .item_detail {
            color: rgb(51, 51, 51);
          }
        }
      }
    }
    .member_contain {
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
