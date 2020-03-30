<template>
  <div class="teamhall_container">
    <el-header class="main_header">
      <MainHeader></MainHeader>
    </el-header>
    <div class="team_container">
      <PublicTitle title="队伍列表" />
      <div class="team_contain">
        <div class="team_item">
          <div class="team_name">
            关西支队
          </div>
          <div class="item_contain">
            <div class="item_detail">
              <div class="title">队长: </div>
              <div class="detail">关宏峰</div>
            </div>
            <div class="item_detail">
              <div class="title">队长电话: </div>
              <div class="detail">13122221111</div>
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
          <div class="btn_contain">
            <span class="limit_count">2/5</span>
            <el-button @click="submitApply" type="danger" size="mini">申请加入</el-button>
          </div>
        </div>
      </div>
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
        ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="danger" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
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
      dialogVisible: false
    }
  },
  methods: {
    // 弹框关闭
    handleClose (done) {
      this.dialogVisible = false
    },

    // 提交申请
    submitApply () {
      console.log('提交')
      this.dialogVisible = true
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
      margin-top: 50px;
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
              margin-bottom: 10px;

              font-size: 14px;
              color: #666;
              .title {
                width: 20%;
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
