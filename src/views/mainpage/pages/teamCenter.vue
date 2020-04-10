<template>
  <div v-if="joinedData.length && applyList.length" class="team_cener_container">
    <PublicTitle title="已加入" />
    <div class="team_contain added_contain">
      <div
        @click="toDetail(item)"
        v-for="(item, index) in joinedData" :key="index"
        class="team_item">
        <div class="team_name">
          <i class="iconfont icon-tuandui"></i>
          {{item.teamName}}
          <span>{{item.teamNo}}</span>
        </div>
        <div class="item_contain">
          <div class="item_detail">
            <div class="title">队长: </div>
            <div class="detail">{{item.captain}}</div>
          </div>
          <div class="item_detail">
            <div class="title">赛区: </div>
            <div class="detail">{{getZone(item.matchZone)}}</div>
          </div>
          <div class="item_detail">
            <div class="title">省份: </div>
            <div class="detail">{{getProvince(item.matchZone, item.province)}}</div>
          </div>
          <div class="item_detail">
            <div class="title">方向: </div>
            <div class="detail">{{item.opusDirection}}</div>
          </div>
          <div class="item_detail">
            <div class="title">课题: </div>
            <div class="detail">{{item.subject}}</div>
          </div>
          <div class="item_detail">
            <div class="title">招募需求: </div>
            <div class="detail">{{item.recruitmentDemand}}</div>
          </div>
          <div class="item_detail">
            <div class="title">团队介绍: </div>
            <el-tooltip class="item" effect="dark" :content="item.teamIntroduction" placement="top-start">
              <div class="detail">
                {{item.teamIntroduction}}
              </div>
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>
    <PublicTitle title="申请列表" />
    <div class="team_contain">
      <div
        v-for="(item, index) in applyList" :key="index"
        class="team_item apply_contain">
        <div class="team_name">
          <i class="iconfont icon-tuandui"></i>
          {{item.teamName}}
          <span>{{item.teamNo}}</span>
        </div>
        <div class="item_contain">
          <div class="item_detail">
            <div class="title">队长: </div>
            <div class="detail">{{item.captain}}</div>
          </div>
          <div class="item_detail">
            <div class="title">赛区: </div>
            <div class="detail">{{getZone(item.matchZone)}}</div>
          </div>
          <div class="item_detail">
            <div class="title">省份: </div>
            <div class="detail">{{getProvince(item.matchZone, item.province)}}</div>
          </div>
          <div class="item_detail">
            <div class="title">方向: </div>
            <div class="detail">{{item.opusDirection}}</div>
          </div>
          <div class="item_detail">
            <div class="title">课题: </div>
            <div class="detail">{{item.subject}}</div>
          </div>
          <div class="item_detail">
            <div class="title">招募需求: </div>
            <div class="detail">{{item.recruitmentDemand}}</div>
          </div>
          <div class="item_detail">
            <div class="title">团队介绍: </div>
            <el-tooltip class="item" effect="dark" :content="item.teamIntroduction" placement="top-start">
              <div class="detail">
                {{item.teamIntroduction}}
              </div>
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PublicTitle from '@/components/public_title.vue'

import { mapActions } from 'vuex'
export default {
  components: {
    PublicTitle
  },
  data () {
    return {
      joinedData: [],
      applyList: [],
      joinedForm: {
        pageNo: 1,
        pageSize: 12,
        teamApplys: [1]
      },
      applyedForm: {
        pageNo: 1,
        pageSize: 12,
        teamApplys: [0, 2]
      }
    }
  },
  created () {
    this.getApplyList(this.joinedForm, 1)
    this.getApplyList(this.applyedForm, 2)
  },
  methods: {
    ...mapActions(['GET_TEMP_CENTER']),
    // 查询申请列表 type 1: 已加入 2: 拒绝/申请中
    async getApplyList (params, type) {
      const res = await this.GET_TEMP_CENTER(params)
      type === 1 && (this.joinedData = res.data.records)
      type === 2 && (this.applyList = res.data.records)
      console.log(res)
    },
    // 跳转队伍详情
    toDetail (data) {
      this.$router.push({
        path: 'teamDetail',
        query: {
          id: data.teamNo
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .team_cener_container {
    .iconfont {
      font-size: 18px;
    }
    .team_contain {
      display: flex;
      flex-wrap: wrap;
      &.added_contain {
        margin-bottom: 30px;
      }
      .team_item {
        width: 31%;
        padding: 20px 0;
        padding-top: 10px;
        margin-top: 30px;
        overflow: hidden;
        margin-left: 3.3%;

        background-color: #fff;
        border-radius: 10px;
        cursor: pointer;
        &.apply_contain {
          cursor: default;
        }
        transition: all .2s linear;
        &:nth-child(3n + 1) {
          margin-left: 0;
        }
        &:hover {
          box-shadow: 0 15px 30px rgba(0,0,0,.1);
          transform: translate3d(0,-2px,0);
        }
        .team_name {
          height: 40px;
          line-height: 40px;

          text-align: center;
          font-size: 16px;
          font-weight: bold;
          span {
            font-size: 12px;
            font-weight: normal;
            color: #dc1e32;
          }
        }
        .item_contain {
          padding: 0 20px;

          .item_detail {
            display: flex;
            margin-bottom: 15px;

            font-size: 14px;
            color: #666;
            .title {
              width: 30%;
              padding-right: 5px;

              text-align: right;

              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              line-clamp: 1;
              -webkit-box-orient: vertical;
            }
            .detail {
              width: 78%;

              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }
  }
</style>

<style lang="scss">
  .el-tooltip__popper {
    max-width: 300px;
  }
</style>
