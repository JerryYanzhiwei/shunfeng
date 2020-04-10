<template>
  <div class="team_cener_container">
    <PublicTitle title="已加入" />
    <div class="team_contain added_contain">
      <div
        @click="toDetail"
        v-for="(item, index) in joinedData" :key="index"
        class="team_item">
        <div class="team_name">
          <i class="iconfont icon-tuandui"></i>
          {{item.teamName}}
        </div>
        <div class="item_contain">
          <div class="item_detail">
            <div class="title">队长: </div>
            <div class="detail">{{item.captain}}</div>
          </div>
          <div class="item_detail">
            <div class="title">赛区: </div>
            <div class="detail">关宏峰</div>
          </div>
          <div class="item_detail">
            <div class="title">省份: </div>
            <div class="detail">关宏峰</div>
          </div>
          <div class="item_detail">
            <div class="title">方向: </div>
            <div class="detail">关宏峰</div>
          </div>
          <div class="item_detail">
            <div class="title">课题: </div>
            <div class="detail">关宏峰</div>
          </div>
          <div class="item_detail">
            <div class="title">老师: </div>
            <div class="detail">关宏峰</div>
          </div>
          <div class="item_detail">
            <div class="title">招募需求: </div>
            <div class="detail">需求</div>
          </div>
          <div class="item_detail">
            <div class="title">团队介绍: </div>
            <el-tooltip class="item" effect="dark" content="我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队" placement="top-start">
              <div class="detail">
                我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队
              </div>
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>
    <PublicTitle title="申请列表" />
    <div class="team_contain">
      <div class="team_item">
        <div class="team_name">
          <i class="iconfont icon-tuandui"></i>
          关西支队
        </div>
        <div class="item_contain">
          <div class="item_detail">
            <div class="title">队长: </div>
            <div class="detail">关宏峰</div>
          </div>
          <div class="item_detail">
            <div class="title">所在城市: </div>
            <div class="detail">深圳</div>
          </div>
          <div class="item_detail">
            <div class="title">招募需求: </div>
            <div class="detail">深圳大学</div>
          </div>
          <div class="item_detail">
            <div class="title">团队介绍: </div>
            <el-tooltip class="item" effect="dark" content="我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队" placement="top-start">
              <div class="detail">
                我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队
              </div>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="team_item">
        <div class="team_name">
          <i class="iconfont icon-tuandui"></i>
          关西支队
        </div>
        <div class="item_contain">
          <div class="item_detail">
            <div class="title">队长: </div>
            <div class="detail">关宏峰</div>
          </div>
          <div class="item_detail">
            <div class="title">所在城市: </div>
            <div class="detail">深圳</div>
          </div>
          <div class="item_detail">
            <div class="title">招募需求: </div>
            <div class="detail">深圳大学</div>
          </div>
          <div class="item_detail">
            <div class="title">团队介绍: </div>
            <el-tooltip class="item" effect="dark" content="我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队" placement="top-start">
              <div class="detail">
                我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队
              </div>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="team_item">
        <div class="team_name">
          <i class="iconfont icon-tuandui"></i>
          关西支队
        </div>
        <div class="item_contain">
          <div class="item_detail">
            <div class="title">队长: </div>
            <div class="detail">关宏峰</div>
          </div>
          <div class="item_detail">
            <div class="title">所在城市: </div>
            <div class="detail">深圳</div>
          </div>
          <div class="item_detail">
            <div class="title">招募需求: </div>
            <div class="detail">深圳大学</div>
          </div>
          <div class="item_detail">
            <div class="title">团队介绍: </div>
            <el-tooltip class="item" effect="dark" content="我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队" placement="top-start">
              <div class="detail">
                我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队我们是一个优秀的团队
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
    this.getApplyList(this.joinedForm)
    this.getApplyList(this.applyedForm)
  },
  methods: {
    ...mapActions(['GET_TEMP_CENTER']),
    // 查询申请列表
    async getApplyList (params, type) {
      const res = await this.GET_TEMP_CENTER(params)
      this.joinedData = res.data.records
      console.log(res)
    },
    toDetail () {
      this.$router.push('teamDetail')
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
