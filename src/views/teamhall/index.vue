<template>
  <div class="teamhall_container">
    <el-header class="main_header">
      <MainHeader></MainHeader>
    </el-header>
    <div class="team_container">
      <PublicTitle title="队伍列表" />
      <div class="team_contain">
        <div v-for="(item, index) in teamList" :key="index" class="team_item">
          <div class="team_name">
            <span class="teamNum">{{item.teamNo}}</span>
            {{item.teamName}}
          </div>
          <div class="item_contain">
            <div class="item_detail">
              <div class="title">队长: </div>
              <div class="detail">{{item.captain}}</div>
            </div>
            <div class="item_detail">
              <div class="title">队长电话: </div>
              <div class="detail">{{item.captainPhone}}</div>
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
              <div class="title">作品方向: </div>
              <div class="detail">{{item.opusDirection}}</div>
            </div>
            <div class="item_detail">
              <div class="title">作品课题: </div>
              <div class="detail">{{item.subject}}</div>
            </div>
            <div class="item_detail">
              <div class="title">指导老师: </div>
              <div class="detail">{{item.instructor}}</div>
            </div>
            <div class="item_detail">
              <div class="title">招募需求: </div>
              <el-tooltip class="item" effect="dark" :content="item.teamIntroduction" placement="top-start">
                <div class="detail">{{item.recruitmentDemand}}</div>
              </el-tooltip>
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
          <div class="btn_contain">
            <span class="limit_count">{{item.memberNum}}/5</span>
            <el-button :disabled="item.applyState === 1 || item.applyState === 0" @click="joinTeam(item.teamNo)" type="danger" size="mini">
              {{
                item.applyState === 1 && '已加入' ||
                item.applyState === 0 && '申请中' ||
                '申请加入'
              }}
            </el-button>
          </div>
        </div>
      </div>
      <el-pagination
        small
        :page-size="pageData.pageSize"
        @current-change="pageChange"
        layout="prev, pager, next"
        :total="pageData.total">
      </el-pagination>
    </div>
    <el-dialog
      width="30%"
      :visible="dialogVisible"
      :before-close="handleClose"
      title="留言板"
      >
      <el-input
        rows="3"
        resize="none"
        type="textarea"
        v-model="joinData.leaveMesseges"
        ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="danger" @click="submitApply">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import PublicTitle from '@/components/public_title.vue'
import MainHeader from '@/components/MainHeader.vue'
export default {
  components: {
    PublicTitle,
    MainHeader
  },
  data () {
    return {
      // 弹框是否可见
      dialogVisible: false,
      // hall data
      hallData: {
        pageNo: 1,
        pageSize: 12,
        province: null,
        teamNo: null
      },
      teamList: [],
      joinData: {
        leaveMesseges: '',
        teamNo: ''
      },
      pageData: {}
    }
  },
  created () {
    this.getHallData()
  },
  methods: {
    ...mapActions(['GET_HALL_DATA', 'POST_APPLY_TEAM']),
    pageChange (data) {
      this.hallData.pageNo = data
      this.getHallData()
      console.log(data)
    },
    // 获取大厅消息
    async getHallData () {
      const params = this.hallData
      const res = await this.GET_HALL_DATA({ params })
      if (res.result === '0' && res.data) {
        this.pageData = res.data
        this.teamList = res.data.records
      }
    },
    // 弹框关闭
    handleClose (done) {
      this.dialogVisible = false
    },

    // 提交申请
    joinTeam (teamNo) {
      this.joinData.teamNo = teamNo
      this.dialogVisible = true
    },
    async submitApply () {
      const params = this.joinData
      try {
        const res = await this.POST_APPLY_TEAM(params)
        if (res.result === '0' && res.data) {
          this.$message.success('申请成功')
          this.getHallData()
          this.dialogVisible = false
        }
      } catch (err) {
        console.log(err)
        this.dialogVisible = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .teamhall_container {
    width: 100%;
    min-height: 100vh;

    background-color: #f4f5f8;
    .main_header {
      background-color: $bg_color;
    }
    .team_container {
      width: 1200px;
      margin: 0 auto;
      padding-top: 110px;
      .team_contain {
        display: flex;
        flex-wrap: wrap;
        .team_item {
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
          .team_name {
            position: relative;

            height: 40px;
            line-height: 40px;
            padding: 0 20px;

            text-align: center;
            font-size: 16px;
            font-weight: bold;
            .teamNum {
              position: absolute;
              left: 20px;

              font-size: 12px;
              font-weight: normal;
              color: #dc1e32;
            }
          }
          .item_contain {
            padding: 0 20px;

            .item_detail {
              display: flex;
              margin-bottom: 10px;

              font-size: 14px;
              color: #666;
              .title {
                width: 20%;
                padding-right: 5px;

                text-align: right;

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .detail {
                width: 78%;

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          }
          .btn_contain {
            display: flex;
            align-items: center;
            justify-content: space-between;

            height: 50px;
            padding: 0 30px;

            // background: #dc1e32;
            border-top: 1px solid #dc1e32;
            color: #fff;
            font-size: 14px;
            span {
              cursor: pointer;
              color: #666;
              &.limit_count {
                font-weight: bold;
                color: #dc1e32;
              }
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
