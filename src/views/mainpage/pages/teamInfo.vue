<template>
  <div class="team_info_container">
    <PublicTitle title="队伍信息" />
    <div v-if="teamInfo" class="leader_contain">
      <div class="leader_top">
        <div class="item">
          <span class="item_name">编号: </span>
          <span class="item_detail">{{teamInfo.teamNo}}</span>
        </div>
        <div class="item">
          <span class="item_name">队伍: </span>
          <span class="item_detail">{{teamInfo.teamName}}</span>
        </div>
        <div class="item">
          <span class="item_name">队长: </span>
          <span class="item_detail">{{teamInfo.captain}}</span>
        </div>
        <div class="item">
          <span class="item_name">院校: </span>
          <span class="item_detail">{{teamInfo.school}}</span>
        </div>
        <div class="item">
          <span class="item_name">赛区: </span>
          <span class="item_detail">{{getZone(teamInfo.matchZone)}}</span>
        </div>
        <div class="item">
          <span class="item_name">省份: </span>
          <span class="item_detail">{{getProvince(teamInfo.matchZone, teamInfo.province)}}</span>
        </div>
        <div class="item">
          <span class="item_name">方向: </span>
          <span class="item_detail">{{teamInfo.opusDirection}}</span>
        </div>
        <div class="item">
          <span class="item_name">课题: </span>
          <span class="item_detail">{{teamInfo.subject}}</span>
        </div>
        <div class="item">
          <span class="item_name">队长电话: </span>
          <span class="item_detail">{{teamInfo.captainPhone}}</span>
        </div>
        <div class="item">
          <span class="item_name">指导老师: </span>
          <span class="item_detail">{{teamInfo.instructor}}</span>
        </div>
        <div class="item">
          <span class="item_name">老师电话: </span>
          <span class="item_detail">{{teamInfo.instructorPhone}}</span>
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
            <span class="title">邮箱: </span>
            <span class="detail">xxx@qq.com</span>
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
        </div>
        <div class="btn_contain">
          移除队伍
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import PublicTitle from '@/components/public_title.vue'
export default {
  components: {
    PublicTitle
  },
  data () {
    return {
      teamInfo: null
    }
  },
  created () {
    this.getTeamInfo()
  },
  methods: {
    ...mapActions(['GET_MY_TEAM_INFO']),
    async getTeamInfo () {
      const res = await this.GET_MY_TEAM_INFO()
      if (res.result === '0' && res.data) {
        this.teamInfo = res.data
      }
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
        flex-wrap: wrap;

        padding: 0 30px;

        .item {
          width: 33%;
          margin-top: 10px;
          font-size: 16px;
          &:nth-child(n > 3) {
          }
          .item_name {
            display: inline-block;

            width: 120px;
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
        .item {
          font-size: 16px;
          .item_name {
            display: inline-block;

            width: 80px;
            margin-right: 5px;

            color: rgb(51, 51, 51);
            text-align: right;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item_detail {
            color: rgb(51, 51, 51);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
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
          height: 40px;
          line-height: 40px;
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
