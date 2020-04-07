<template>
  <div class="userInfo_container">
    <PublicTitle title="个人信息"/>
    <div class="user_contain">
      <div class="user_top">
        <div>
          <span>姓名: </span>
          <el-input size="mini"></el-input>
        </div>
        <div>
          <span>手机: </span>
          <el-input size="mini"></el-input>
        </div>
        <div>
          <span>邮箱: </span>
          <el-input size="mini"></el-input>
        </div>
        <div>
          <span>学校: </span>
          <el-input size="mini"></el-input>
        </div>
        <div>
          <span>专业: </span>
          <el-input size="mini"></el-input>
        </div>
        <div>
          <span>年级: </span>
          <el-input size="mini"></el-input>
        </div>
        <div>
          <span>指导老师: </span>
          <el-input size="mini"></el-input>
        </div>
        <div>
          <span>老师电话: </span>
          <el-input size="mini"></el-input>
        </div>
        <div class="">
          <span>备注:</span>
          <el-input rows="3" resize="none" type="textarea"></el-input>
        </div>
        <div class="">
        </div>
      </div>
      <div class="btn_contain">
        <el-button size="mini">修改</el-button>
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
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.userInfo_container {
  width: 100%;
  min-height: 100vh;

  background-color: #f4f5f8;
  .user_contain {
    margin-top: 30px;
    padding: 20px 30px;

    background-color: #fff;
    border-radius: 8px;
    .user_top {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      div {
        width: 50%;
        margin: 10px 0;

        text-align: center;
        span {
          display: inline-block;

          width: 85px;
          margin-right: 10px;

          text-align: right;
        }
      }
    }
    .btn_contain {
      margin-top: 10px;

      text-align: center;
    }
  }
}
</style>

<style lang="scss">
  .userInfo_container .user_contain .user_top div.el-textarea {
    vertical-align: top;
    margin: 0;
  }
</style>
